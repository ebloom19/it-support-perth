import { format } from 'date-fns';
import Image from 'next/image';

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { sortPosts } from '@/lib/utils';
import { posts } from '#site/content';

export const BlogsSection = () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const targetPost = sortedPosts.find(
    (post) => post.slug === 'blog/ai-interview-answer-generator',
  );
  const otherPosts = sortedPosts.filter(
    (post) => post.slug !== 'blog/ai-interview-answer-generator',
  );
  const displayPosts = targetPost
    ? [targetPost, ...otherPosts.slice(0, 3)]
    : sortedPosts.slice(0, 4);

  const PostHeader = ({ date, image }: { date: string; image?: string }) => {
    const formattedDate = format(new Date(date), 'MMMM dd, yyyy');

    return (
      <div className="flex flex-1 w-full h-1/2 min-h-[6rem] rounded-xl relative overflow-hidden">
        {image && (
          <Image
            src={image}
            alt="Post header"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            quality={75}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 opacity-30" />
        <span className="text-sm text-white p-4 z-10 relative">
          {formattedDate}
        </span>
      </div>
    );
  };

  return (
    <section className="relative px-8 py-8 md:px-28 lg:px-40 md:py-16 bg-background bg-opacity-80 overflow-hidden flex flex-row w-100">
      <BentoGrid className="max-w-7xl mx-auto mb-8">
        <BentoGridItem
          className="col-span-full md:col-span-1 text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          title="Blogs"
          description="Our news insights for your daily joyful life. Take best advantage and don't waste your time."
          href="/blog"
        />
        {displayPosts?.length > 0 ? (
          displayPosts.map((post, i) => {
            const blogUrl = post.slug.startsWith('/')
              ? post.slug
              : post.slug.startsWith('blog/')
                ? `/${post.slug}`
                : `/blog/${post.slug}`;

            return (
              <BentoGridItem
                key={post.slug}
                title={post.title}
                description={post.description}
                header={<PostHeader date={post.date} image={post.image} />}
                className={i === displayPosts.length - 1 ? 'md:col-span-2' : ''}
                href={blogUrl}
              />
            );
          })
        ) : (
          <div className="col-span-full text-center">
            <p>Nothing to see here yet</p>
          </div>
        )}
      </BentoGrid>
    </section>
  );
};
