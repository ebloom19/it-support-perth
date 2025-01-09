import { Metadata } from 'next';

import { PostItem } from '@/components/PostItem';
import { QueryPagination } from '@/components/QueryPagination';
import { Tag } from '@/components/Tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags, sortPosts, sortTagsByCount } from '@/lib/utils';
import { posts } from '#site/content';

export const metadata: Metadata = {
  title: 'Acedit: Interview with AI | Blog',
  description: 'Explore our blog posts.',
  alternates: {
    canonical: 'https://www.acedit.ai/blog',
  },
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage,
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container pt-24 md:pt-32 mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black lg:text-5xl">Blog</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Welcome to our blog.
        </p>
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
      <div className="flex justify-center mt-8">
        <QueryPagination totalPages={totalPages} />
      </div>
      <div className="mt-8">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
