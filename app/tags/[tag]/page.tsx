import { slug } from 'github-slugger';
import { Metadata } from 'next';

import { PostItem } from '@/components/PostItem';
import { Tag } from '@/components/Tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from '@/lib/utils';
import { posts } from '@/.velite';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: tag,
    description: `Posts on the topic of ${tag}`,
    alternates: {
      canonical: `https://www.itsupportperth.net.au/tags/${tag}`,
    },
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split('-').join(' ');

  const allPosts = getPostsByTagSlug(posts, tag);
  const displayPosts = allPosts.filter((post) => post.published);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container pt-24 md:pt-32 mx-auto py-6 lg:py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black lg:text-5xl capitalize">{title}</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {displayPosts?.length > 0 ? (
          displayPosts.map((post) => {
            const { slug, date, title, description, tags } = post;
            return (
              <li key={slug} className="list-none">
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  tags={tags}
                />
              </li>
            );
          })
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
      <div className="mt-8">
        <Card className="mx-auto max-w-md bg-white dark:bg-background">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((t) => (
              <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
