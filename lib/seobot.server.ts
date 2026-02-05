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
 * Returns null when SEOBOT_API_KEY is not set (SeoBot is optional).
 */
function getSeoBotClient(): BlogClient | null {
  const apiKey = process.env.SEOBOT_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new BlogClient(apiKey);
}

/**
 * Retrieves SeoBot articles (optionally for a given page).
 * Returns empty when SeoBot API key is not configured.
 */
export async function getSeoBotPosts(
  page?: number
): Promise<{ articles: IArticleIndex[]; total: number }> {
  const client = getSeoBotClient();
  if (!client) {
    return { articles: [], total: 0 };
  }
  return client.getArticles(page || 0);
}

/**
 * Retrieves a single SeoBot article by slug.
 * Returns null when SeoBot API key is not configured or article not found.
 */
export async function getSeoBotArticle(slug: string): Promise<IArticle | null> {
  const client = getSeoBotClient();
  if (!client) {
    return null;
  }
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
  try {
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
    ).then(items => items.filter(Boolean) as CustomBlogOrSeoBot[]);

    let normalizedDbPosts: CustomBlogOrSeoBot[] = [];
    try {
      if (process.env.DATABASE_URL) {
        const dbPostsRaw = await getAllBlogPosts(true);
        normalizedDbPosts = dbPostsRaw.map(post => {
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
      }
    } catch (_dbError) {
      // DATABASE_URL unset or DB unavailable; continue with local + SeoBot posts only
    }

    return [...normalizedDbPosts, ...normalizedSeoBotArticles, ...posts];
  } catch (error) {
      console.error('Crucial error in getNormalizedPosts:', error);
      throw error;
  }
});
