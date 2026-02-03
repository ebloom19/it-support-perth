import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/tags',
      },
    ],
    sitemap: 'https://www.itsupportperth.net.au/sitemap.xml',
  };
}
