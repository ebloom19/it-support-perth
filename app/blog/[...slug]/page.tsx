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

interface PostPageProps {
  params: { slug: string[] };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const posts = await getNormalizedPosts();
  
  const post = posts.find((post) => post.slugAsParams === slug);
  if (post) return post;

  const article = await getSeoBotArticle(slug);
  if (article) {
    return normalizePost(article);
  }

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
  const description = getDescription(post);
  const date = getDate(post);

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", title);

  const postTags = "tags" in post && post.tags
    ? post.tags.map((t) => (typeof t === "string" ? t : t.title))
    : [];

  return {
    title: title,
    description: description,
    keywords: postTags.join(", ") + ", IT Support Perth, Perth IT Services, Technology Blog",
    metadataBase: new URL("https://itsupportperth.com.au"),
    alternates: { canonical: `https://itsupportperth.com.au/blog/${params.slug.join("/")}` },
    authors: [{ name: "IT Support Perth Team" }],
    publisher: "IT Support Perth",
    category: "Technology",
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: `https://itsupportperth.com.au${post.slug}`,
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
  const posts = await getNormalizedPosts();
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

// It is already referenced in the BlogLayout component
const stripFirstH1 = (html: string) => {
  return html.replace(/<h1[^>]*>.*?<\/h1>/, "");
};

export default async function PostPage({ params }: PostPageProps) {
  const post = (await getPostFromParams(params)) as CustomBlogOrSeoBot;
  const posts = await getNormalizedPosts();

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
          url: `https://itsupportperth.com.au${post.slug}`
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
