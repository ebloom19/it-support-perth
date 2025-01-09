import type { Metadata } from 'next';

interface CreatePageMetadataProps {
  title: string;
  description: string;
  url: string;
  videos?: string[];
  type?: 'blog' | 'feature' | 'home';
}

export function createPageMetadata({
  title,
  description,
  url,
  videos,
  type = 'blog',
}: CreatePageMetadataProps): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    verification: {
      google: 'g3yfMG-G5hfGp_XMK8AH33evZ49iMDDeVVs0Z9KMc4w',
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Acedit',
      type: 'website',
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title)}&type=${type}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      videos: videos?.map((video) => ({
        url: video,
        width: 1920,
        height: 1080,
        type: 'video/mp4',
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og?title=${encodeURIComponent(title)}&type=${type}`],
    },
  };
}
