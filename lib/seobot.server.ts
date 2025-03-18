import { BlogClient } from "seobot";
import type { IArticle, IArticleIndex } from "seobot/dist/types/blog";

import { posts, type Post } from "@/.velite";

import { CustomBlogOrSeoBot } from "./seobot.helpers";
import { siteConfig } from "@/config/site";

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
 *
 * This function converts fields such as 'headline' into 'title',
 * 'metaDescription' into 'description', 'publishedAt' into 'date',
 * and so forth. The returned object conforms to the Post type.
 *
 * @param article The raw SeoBot article object.
 * @returns The normalized article object.
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
      slugAsParams: article.slug, // customize if necessary
      title: article.headline,
      description: article.metaDescription,
      date: article.publishedAt,
      published: article.published,
      body: article.markdown,
      html: article.html,
      image: article.image,
      tags: article.tags.map((tag) => tag.title),
      // Add additional mappings as needed to satisfy the Post type
    };
  }

  return post;
}

/**
 * Gets all posts (both local and from SeoBot) and normalizes them
 */
export async function getNormalizedPosts() {
  // Get and sort local posts

  // Get and normalize SeoBot posts
  const { articles } = await getSeoBotPosts();
  const normalizedArticles = await Promise.all(
    articles.map(async (article) => normalizePost(article))
  );

  // Combine both sources
  return [...normalizedArticles, ...posts];
}
