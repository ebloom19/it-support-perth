import { cache } from 'react';
import { BlogClient } from "seobot";
import type { IArticle, IArticleIndex } from "seobot/dist/types/blog";
import { posts, type Post } from '@/content-output';
import { CustomBlogOrSeoBot } from "./seobot.helpers";
import { getAllBlogPosts } from "@/lib/db";
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';

/**
 * Create a SeoBot client using a secure, server‐side API key.
 */
function getSeoBotClient(): BlogClient {
  // Use a server side-only env variable.
  const apiKey = process.env.SEOBOT_API_KEY;
  if (!apiKey) {
    throw new Error("SEOBOT_API_KEY environment variable must be set");
  }
  return new BlogClient(apiKey);
}

/**
 * Retrieves SeoBot articles (optionally for a given page).
 */
export async function getSeoBotPosts(
  page?: number
): Promise<{ articles: IArticleIndex[]; total: number }> {
  const client = getSeoBotClient();
  return client.getArticles(page || 0);
}

/**
 * Retrieves a single SeoBot article by slug.
 */
export async function getSeoBotArticle(slug: string): Promise<IArticle | null> {
  const client = getSeoBotClient();
  return client.getArticle(slug);
}

/**
 * Normalizes a SeoBot article object to match the local post schema.
 */
export async function normalizePost(
  post: Post | IArticleIndex
): Promise<CustomBlogOrSeoBot> {
  if ("headline" in post) {
    const article = await getSeoBotArticle(post.slug);

    if (!article) {
      throw new Error(`Article not found for slug: ${post.slug}`);
    }

    return {
      slug: `blog/${article.slug}`,
      slugAsParams: article.slug,
      title: article.headline,
      description: article.metaDescription,
      date: article.publishedAt,
      published: article.published,
      body: article.markdown, // Keep markdown if available
      html: article.html,
      image: article.image,
      tags: article.tags.map((tag) => tag.title),
    };
  }

  return post;
}

/**
 * Gets all posts (local, SeoBot, and DB) and normalizes them
 */
export const getNormalizedPosts = cache(async () => {
  console.error('DEBUG: Starting getNormalizedPosts...');
  try {
    // 1. Get and normalize SeoBot posts
    console.error('DEBUG: Fetching SeoBot posts...');
    const { articles } = await getSeoBotPosts();
    const normalizedSeoBotArticles = await Promise.all(
      articles.map(async (article) => {
          try {
              return await normalizePost(article);
          } catch (e) {
              console.error(`Failed to normalize Seobot article ${article.slug}`, e);
              return null;
          }
      })
    ).then(items => items.filter(Boolean) as CustomBlogOrSeoBot[]); // Filter out failed ones
    console.error(`DEBUG: Fetched ${normalizedSeoBotArticles.length} Seobot articles.`);

    // 2. Get and normalize DB posts
    console.error('DEBUG: Fetching DB posts...');
    const dbPostsRaw = await getAllBlogPosts(true);
    console.error(`DEBUG: Fetched ${dbPostsRaw.length} DB posts.`);
    const normalizedDbPosts: CustomBlogOrSeoBot[] = dbPostsRaw.map(post => {
        let htmlContent = '';
        try {
            if (post.content && Object.keys(post.content).length > 0) {
                // Convert Tiptap JSON to HTML
                htmlContent = generateHTML(post.content, [
                    StarterKit,
                    Image,
                    Link
                ]);
            }
        } catch (e) {
            console.error(`Error rendering content for post ${post.slug}`, e);
            htmlContent = '<p>Error rendering content</p>';
        }

        return {
            slug: `blog/${post.slug}`,
            slugAsParams: post.slug,
            title: post.title,
            description: post.description || '',
            date: post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date(post.createdAt).toISOString(),
            published: post.published,
            html: htmlContent, // Provide HTML
            image: post.image || undefined,
            tags: post.tags,
            author: post.author || 'Admin'
        } as any; // Cast as CustomBlogOrSeoBot
    });

    // 3. Combine all sources
    const allPosts = [...normalizedDbPosts, ...normalizedSeoBotArticles, ...posts];
    console.error(`DEBUG: Total posts: ${allPosts.length}`);
    return allPosts;
  } catch (error) {
      console.error('Crucial error in getNormalizedPosts:', error);
      throw error;
  }
});
