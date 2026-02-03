import { siteConfig } from '@/config/site';
import { posts } from '@/content-output';

async function getSeoBotBlogUrls(): Promise<string[]> {
  const key = process.env.SEOBOT_API_KEY;
  if (!key) return [];
  try {
    const res = await fetch(`https://app.seobotai.com/api/sitemap?key=${key}`, { cache: 'no-store' });
    const result = await res.json();
    const articles = result?.data?.articles ?? [];
    return articles.map((a: { slug: string }) => `${siteConfig.url}/blog/${a.slug}`);
  } catch {
    return [];
  }
}

const mainPages = [
  siteConfig.url,
  `${siteConfig.url}/about-us`,
  `${siteConfig.url}/contact-us`,
  `${siteConfig.url}/reviews`,
  `${siteConfig.url}/blog`,
];

const servicePaths = [
  '/services-and-solutions/managed-it-services-provider',
  '/services-and-solutions/it-security-solutions',
  '/services-and-solutions/backup-and-disaster-recovery-solutions',
  '/services-and-solutions/cloud-services',
  '/services-and-solutions/email-protection-service',
  '/services-and-solutions/firewall-service',
  '/services-and-solutions/on-premises-server-management',
  '/services-and-solutions/it-consulting',
  '/services-and-solutions/ai-enhanced-it-support',
  '/services-and-solutions/business-it-support',
  '/services-and-solutions/computer-repairs',
  '/services-and-solutions/network-management',
  '/services-and-solutions/remote-it-support',
];

export async function GET(request: Request) {
  const localBlogUrls = posts
    .filter((p) => p.published)
    .map((p) => `${siteConfig.url}/blog/${p.slugAsParams}`);
  const seoBotBlogUrls = await getSeoBotBlogUrls();
  const allBlogUrls = [...new Set([...localBlogUrls, ...seoBotBlogUrls])].sort();

  const mainSection = mainPages.map((u) => `> ${u}`).join('\n');
  const servicesSection = servicePaths.map((p) => `${siteConfig.url}${p}`).join('\n');
  const blogSection = allBlogUrls.length > 0 ? allBlogUrls.map((u) => `> ${u}`).join('\n') : `> ${siteConfig.url}/blog`;

  const body = `# IT Support Perth

IT Support Perth provides proactive managed IT services, cybersecurity, cloud solutions, and disaster recovery for Perth and Western Australia businesses. 20+ years experience, 250+ businesses served.

## Main pages

${mainSection}

## Services

${servicesSection}

## Blog posts

${blogSection}

## Contact

Phone: (08) 9325 1196
Free consultation available.
`;

  const { searchParams } = new URL(request.url);
  const preview = searchParams.get('preview') === '1' || searchParams.get('view') === 'html';

  if (preview) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>llms.txt - IT Support Perth</title>
  <style>
    body { font-family: system-ui, sans-serif; color: #111; background: #fff; padding: 2rem; max-width: 800px; margin: 0 auto; line-height: 1.6; }
    pre { white-space: pre-wrap; word-wrap: break-word; }
  </style>
</head>
<body>
  <pre>${body.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
</body>
</html>`;
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
      },
    });
  }

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}
