import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { posts } from "@/.velite";

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
        name: "Business IT Support",
        href: "/services-and-solutions/business-it-support",
      },
      {
        name: "Computer Repairs",
        href: "/services-and-solutions/computer-repairs",
      },
      {
        name: "IT Consulting",
        href: "/services-and-solutions/it-consulting",
      },
      {
        name: "Network Management",
        href: "/services-and-solutions/network-management",
      },
      {
        name: "Remote IT Support",
        href: "/services-and-solutions/remote-it-support",
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapPost = posts.map((post) => ({
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

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily" as ChangeFrequency,
      priority: 1.0,
    },
    ...sitemapPost,
    ...sitemapRoutes,
  ];
}
