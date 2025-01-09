import '@/styles/mdx.css';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import BlogLayout from '@/components/BlogLayout';
import { MDXContent } from '@/components/mdx-components';
import { siteConfig } from '@/config/site';
import { posts } from '#site/content';

import { generateJsonLd } from './jsonLd';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = posts.find((post: any) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    alternates: {
      canonical: `https://www.itsupportperth.net.au/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date, // If you have a separate 'modified' date, use that instead
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
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
        title={post.title}
        tags={post.tags}
        description={post.description}
        slug={post.slug}
      >
        <MDXContent code={post.body} />
      </BlogLayout>
    </>
  );
}
