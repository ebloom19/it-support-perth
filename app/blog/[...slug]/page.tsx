import "@/styles/mdx.css";
import "@/styles/seobot.css";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import EnhancedBlogLayout from "@/components/EnhancedBlogLayout";
import { StructuredData } from "@/components/StructuredData";
import { HTMLContent } from "@/components/HTMLContent";
import { MDXContent } from "@/components/mdx-components";
import { siteConfig } from "@/config/site";
import {
  type CustomBlogOrSeoBot,
  getDate,
  getDescription,
  getTitle,
} from "@/lib/seobot.helpers";
import { getNormalizedPosts, getSeoBotArticle, normalizePost } from "@/lib/seobot.server";

import { generateJsonLd } from "./jsonLd";

// Force dynamic rendering so newly published posts are available immediately
export const dynamic = 'force-dynamic';

interface PostPageProps {
  params: { slug: string[] };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  console.error(`DEBUG: getPostFromParams searching for slug: ${slug}`);
  const posts = await getNormalizedPosts();
  console.error(`DEBUG: Found ${posts.length} normalized posts.`);
  
  const post = posts.find((post) => post.slugAsParams === slug);
  if (post) {
      console.error(`DEBUG: Found post for slug: ${slug}, published: ${post.published}`);
      return post;
  }

  console.error(`DEBUG: Post not found in normalized posts, checking SeoBot for slug: ${slug}`);
  const article = await getSeoBotArticle(slug);
  if (article) {
    console.error(`DEBUG: Found SeoBot article for slug: ${slug}`);
    return normalizePost(article);
  }

  console.error(`DEBUG: No post or article found for slug: ${slug}`);
  return null;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const title = getTitle(post);
  const rawDescription = getDescription(post);
  const description = rawDescription.length > 160 ? rawDescription.slice(0, 157).trim() + "..." : rawDescription;
  const date = getDate(post);

  const canonicalUrl = `${siteConfig.url}/blog/${params.slug.join("/")}`;

  const postTags = "tags" in post && post.tags
    ? post.tags.map((t) => (typeof t === "string" ? t : t.title))
    : [];

  return {
    title: title,
    description: description,
    keywords: postTags.join(", ") + ", IT Support Perth, Perth IT Services, Technology Blog",
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: canonicalUrl },
    authors: [{ name: "IT Support Perth Team" }],
    publisher: "IT Support Perth",
    category: "Technology",
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: canonicalUrl,
      siteName: "IT Support Perth",
      locale: "en_AU",
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : [],
      publishedTime: date,
      modifiedTime: date,
      authors: ["IT Support Perth Team"],
      tags: postTags,
    },
    twitter: {
      card: "summary_large_image",
      site: "@ITSupportPerth",
      creator: "@ITSupportPerth",
      title: title,
      description: description,
      images: post.image ? [post.image] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  const posts = (await getNormalizedPosts()).filter(post => post.published);
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

// It is already referenced in the BlogLayout component
const stripFirstH1 = (html: string) => {
  return html.replace(/<h1[^>]*>.*?<\/h1>/, "");
};

export default async function PostPage({ params }: PostPageProps) {
  const post = (await getPostFromParams(params)) as CustomBlogOrSeoBot;
  const posts = (await getNormalizedPosts()).filter(p => p.published);

  if (!post || !post.published) {
    notFound();
  }

  const jsonLd = generateJsonLd(post, siteConfig);

  const postTags = "tags" in post
    ? post.tags?.map((t) => (typeof t === "string" ? t : t.title))
    : post.tags;

  return (
    <>
      <StructuredData 
        type="service" 
        serviceData={{
          name: getTitle(post),
          description: getDescription(post),
          url: `${siteConfig.url}${post.slug}`
        }}
      />
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EnhancedBlogLayout
        title={getTitle(post)}
        allPosts={posts}
        description={getDescription(post)}
        slug={post.slug}
        tags={postTags}
        publishDate={getDate(post)}
        readTime="5 min read"
        author="IT Support Perth Team"
      >
        {"html" in post ? (
          <HTMLContent html={stripFirstH1(post.html)} />
        ) : (
          <MDXContent code={post.body} />
        )}
      </EnhancedBlogLayout>
    </>
  );
}
