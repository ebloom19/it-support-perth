import { IArticle } from 'seobot/dist/types/blog';

import { Post } from '@/.velite';

/**
 * Retrieves the title of a post, whether it's a local post or a SeoBot article.
 */
export function getTitle(post: { title?: string; headline?: string }): string {
  return post.title || post.headline || '';
}

/**
 * Retrieves the description of a post.
 */
export function getDescription(post: {
  description?: string;
  metaDescription?: string;
}): string {
  return post.description || post.metaDescription || '';
}

/**
 * Retrieves the date of a post.
 */
export function getDate(post: { date?: string; publishedAt?: string }): string {
  return post.date || post.publishedAt || '';
}

export type CustomBlogOrSeoBot =
  | Post
  | (IArticle & { slugAsParams: string; published: boolean });
