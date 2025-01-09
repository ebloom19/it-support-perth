'use client';

import Link from 'next/link';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { getAllTags, sortPosts } from '@/lib/utils';
import { posts } from '@/.velite';

import { Tag } from './Tag';

type BlogLayoutProps = {
  children: React.ReactNode;
  title: string;
  slug: string;
  tags?: string[];
  description?: string;
};

const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  title,
  tags,
  description,
  slug,
}) => {
  const latestPosts = sortPosts(posts).slice(0, 5);
  const allTags = getAllTags(posts);
  const shareUrl = `https://www.itsupportperth.net.au/${slug}`;

  return (
    <div className="container mx-auto px-4 md:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6 bg-white dark:bg-muted bg-opacity-80 rounded-lg">
              <h1 className="text-4xl font-bold mb-4 text-primary">{title}</h1>
              <p className="text-grey-600">{description}</p>
              <div className="mt-6 flex space-x-4 border-b border-gray-200 pb-4 mb-4">
                <EmailShareButton
                  url={shareUrl}
                  subject={title}
                  body={description}
                >
                  <EmailIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                </EmailShareButton>
                <FacebookShareButton url={shareUrl} quote={title}>
                  <FacebookIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                </FacebookShareButton>
                {/* <FacebookMessengerShareButton
                  url={shareUrl}
                  appId="YOUR_APP_ID"
                >
                  <MessengerIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                </FacebookMessengerShareButton> */}
                <WhatsappShareButton url={shareUrl} title={title}>
                  <WhatsappIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                </WhatsappShareButton>
                <RedditShareButton url={shareUrl} title={title}>
                  <RedditIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                </RedditShareButton>
                <TwitterShareButton url={shareUrl} title={title}>
                  <TwitterIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                </TwitterShareButton>
              </div>
              <article className="prose max-w-none container mx-auto px-4 py-4">
                {children}
              </article>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-1">
          <div className="sticky top-32">
            <Card className="mb-6 bg-white dark:bg-muted bg-opacity-80 rounded-lg">
              <CardContent>
                <h2 className="text-xl font-semibold mb-4 py-2">
                  Recent Posts
                </h2>
                <ul className="space-y-2">
                  {latestPosts.map((post) => (
                    <li key={post.slug} className="list-none">
                      <Link
                        title={post.title}
                        href={'/' + post.slug}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-muted bg-opacity-80 rounded-lg">
              <CardContent>
                <h2 className="text-xl font-semibold mb-4 py-2">Tags</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags?.map((tag) => (
                    <Tag tag={tag} key={tag} count={allTags[tag]} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
