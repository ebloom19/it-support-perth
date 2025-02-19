import "@/styles/mdx.css";
import "@/styles/seobot.css";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import BlogLayout from "@/components/BlogLayout";
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

  return {
    title: title,
    description: description,
    metadataBase: new URL("https://www.acedit.ai"),
    alternates: { canonical: `https://www.acedit.ai/blog/${params.slug}` },
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: date,
      modifiedTime: date, // If you have a separate 'modified' date, use that instead
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`/api/og?${ogSearchParams.toString()}`],
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

  if (!post || !post.isPublished) {
    notFound();
  }

  const jsonLd = generateJsonLd(post, siteConfig);

  return (
    <>
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogLayout
        title={getTitle(post)}
        allPosts={posts}
        description={getDescription(post)}
        slug={post.slug}
        tags={
          "tags" in post
            ? post.tags?.map((t) => (typeof t === "string" ? t : t.title))
            : post.tags
        }
        {...("podcast" in post
          ? { podcast: post.podcast, podcastTitle: post.podcast_title }
          : {})}
      >
        {"html" in post ? (
          <HTMLContent html={stripFirstH1(post.html)} />
        ) : (
          <MDXContent code={post.body} />
        )}
      </BlogLayout>
    </>
  );
}
