import { Metadata } from 'next';

import { PostItem } from '@/components/PostItem';
import { QueryPagination } from '@/components/QueryPagination';
import { Tag } from '@/components/Tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags, sortPosts, sortTagsByCount } from '@/lib/utils';
import { posts } from '@/.velite';

export const metadata: Metadata = {
  title: 'IT Support Perth | Blog',
  description: 'Explore our blog posts.',
  alternates: {
    canonical: 'https://www.itsupportperth.net.au/blog',
  },
};

const POSTS_PER_PAGE = 5;

// Add static params generation
export function generateStaticParams() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

interface PageProps {
  params: { page?: string[] }
}

export default function BlogPage({ params }: PageProps) {
  // Get page number from params instead of searchParams
  const currentPage = params?.page ? Number(params.page[0]) : 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage,
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black lg:text-5xl">Blog</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Welcome to our blog.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
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
