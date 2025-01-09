import { BlogPosting, WithContext } from 'schema-dts';

import { type SiteConfig } from '@/config/site';
import { type Post } from '#site/content';

export function generateJsonLd(
  post: Post,
  siteConfig: SiteConfig,
): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `/api/og?title=${encodeURIComponent(post.title)}`,
    datePublished: post.date,
    dateModified: post.date, // If you have a separate 'modified' date, use that instead
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
