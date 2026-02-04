import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { posts } from '@/content-output';

interface BaseRoute {
  name: string;
  external?: boolean;
}

interface LinkRoute extends BaseRoute {
  href: string;
  dropdownItems?: never;
}

interface DropdownRoute extends BaseRoute {
  dropdownItems: { name: string; href: string }[];
  href?: string;
}

type Route = LinkRoute | DropdownRoute;

const routes: Route[] = [
  {
    name: "Services & Solutions",
    dropdownItems: [
      {
        name: "Managed IT Services Provider",
        href: "/services-and-solutions/managed-it-services-provider",
      },
      {
        name: "IT Security Solutions",
        href: "/services-and-solutions/it-security-solutions",
      },
      {
        name: "Backup and Disaster Recovery",
        href: "/services-and-solutions/backup-and-disaster-recovery-solutions",
      },
      {
        name: "Cloud Services",
        href: "/services-and-solutions/cloud-services",
      },
      {
        name: "Email Protection",
        href: "/services-and-solutions/email-protection-service",
      },
      {
        name: "Firewall Service",
        href: "/services-and-solutions/firewall-service",
      },
      {
        name: "On-Premises Server Management",
        href: "/services-and-solutions/on-premises-server-management",
      },
      {
        name: "IT Consulting",
        href: "/services-and-solutions/it-consulting",
      },
      {
        name: "AI-Enhanced IT Support",
        href: "/services-and-solutions/ai-enhanced-it-support",
      },
    ],
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
  {
    name: "Reviews",
    href: "/reviews",
  },
];

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

/** Service paths that have actual pages (app/services-and-solutions/[slug]/page.tsx). Ensures sitemap includes all key service URLs. */
const SERVICE_PATHS = [
  "/services-and-solutions",
  "/services-and-solutions/ai-enhanced-it-support",
  "/services-and-solutions/backup-and-disaster-recovery-solutions",
  "/services-and-solutions/cloud-services",
  "/services-and-solutions/email-protection-service",
  "/services-and-solutions/firewall-service",
  "/services-and-solutions/it-consulting",
  "/services-and-solutions/it-security-solutions",
  "/services-and-solutions/managed-it-services-provider",
  "/services-and-solutions/on-premises-server-management",
] as const;

  async function getSeoBotSitemap() {
    const key = process.env.SEOBOT_API_KEY;
    if (!key) {
      return [];
    }

    try {
      const res = await fetch(`https://app.seobotai.com/api/sitemap?key=${key}`, {
        cache: 'no-store',
      });
      const result = await res.json();
  
      // Transform SeoBot sitemap data to match MetadataRoute.Sitemap format
      return result.data.articles.map(
        (article: { slug: string; lastmod: string }) => ({
          url: `${siteConfig.url}/blog/${article.slug}`,
          priority: 0.8,
          changeFrequency: 'weekly' as const,
          lastModified: article.lastmod,
        }),
      );
    } catch (error) {
      console.error('Failed to fetch SeoBot sitemap:', error);
      return [];
    }
  }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedPosts = posts.filter((post) => post.published);
  const seoBotPosts = await getSeoBotSitemap();

  const sitemapPost = publishedPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slugAsParams}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.8,
  }));

  const sitemapRoutes = routes.flatMap((route) => {
    const routeEntries: MetadataRoute.Sitemap = [];

    if ("href" in route && !route.external) {
      routeEntries.push({
        url: `${siteConfig.url}${route.href}`,
        lastModified: new Date(),
        changeFrequency: "daily" as ChangeFrequency,
        priority: 0.9,
      });
    }

    if ("dropdownItems" in route && route.dropdownItems) {
      routeEntries.push(
        ...route.dropdownItems.map((item) => ({
          url: `${siteConfig.url}${item.href}`,
          lastModified: new Date(),
          changeFrequency: "daily" as ChangeFrequency,
          priority: 0.9,
        }))
      );
    }

    return routeEntries;
  });

  const sitemapServicePages: MetadataRoute.Sitemap = SERVICE_PATHS.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.9,
  }));

  const seenUrls = new Set<string>();
  const dedupedRoutes = sitemapRoutes.filter((entry) => {
    if (seenUrls.has(entry.url)) return false;
    seenUrls.add(entry.url);
    return true;
  });

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily" as ChangeFrequency,
      priority: 1.0,
    },
    ...sitemapPost,
    ...seoBotPosts,
    ...sitemapServicePages,
    ...dedupedRoutes,
  ];
}
