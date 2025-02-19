import { BlogPosting, WithContext } from 'schema-dts';

import { type SiteConfig } from '@/config/site';
import { type Post } from '@/.velite';
import { CustomBlogOrSeoBot, getDate, getDescription, getTitle } from '@/lib/seobot.helpers';

export function generateJsonLd(
  post: CustomBlogOrSeoBot,
  siteConfig: SiteConfig,
): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: getTitle(post),
    description: getDescription(post),
    image: `/api/og?title=${encodeURIComponent(getTitle(post))}`,
    datePublished: getDate(post),
    dateModified: getDate(post), // If you have a separate 'modified' date, use that instead
    author: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  };
}
