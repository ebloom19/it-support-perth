'use client';

import { useMemo, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileText, Search, Calendar } from 'lucide-react';
import { type CustomBlogOrSeoBot, getTitle, getDescription, getDate } from '@/lib/seobot.helpers';
import { QueryPagination } from '@/components/QueryPagination';

const POSTS_PER_PAGE = 12;

function postHref(post: CustomBlogOrSeoBot): string {
  const slug = 'slugAsParams' in post ? post.slugAsParams : (post as { slug?: string }).slug?.replace(/^blog\/?/, '') ?? '';
  return slug.startsWith('blog/') ? `/${slug}` : `/blog/${slug}`;
}

function postKey(post: CustomBlogOrSeoBot): string {
  if ('slugAsParams' in post) return post.slugAsParams;
  const s = (post as { slug?: string }).slug;
  return (s ?? getTitle(post)) || '';
}

function BlogCard({ post }: { post: CustomBlogOrSeoBot }) {
  const href = postHref(post);
  const title = getTitle(post);
  const description = getDescription(post);
  const dateStr = getDate(post);
  const formattedDate = dateStr ? format(new Date(dateStr), 'MMM d, yyyy') : '';
  const image = 'image' in post ? post.image : undefined;

  return (
    <Link href={href} className="block h-full group">
      <Card className="h-full border border-border/60 bg-card hover:border-[#3c91e6]/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <FileText className="w-12 h-12 text-muted-foreground/50" />
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <span className="text-xs font-medium text-white/95 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
          </div>
        </div>
        <CardContent className="p-4 sm:p-5">
          <h2 className="font-semibold text-lg text-foreground line-clamp-2 group-hover:text-[#3c91e6] transition-colors mb-2">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description || 'Read more about this topic.'}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3c91e6] mt-3 group-hover:underline">
            <FileText className="w-4 h-4 shrink-0" />
            Read article
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

interface EnhancedBlogPageProps {
  allPosts: CustomBlogOrSeoBot[];
}

export function EnhancedBlogPage({ allPosts }: EnhancedBlogPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return allPosts;
    const term = searchTerm.toLowerCase().trim();
    return allPosts.filter(
      (post) =>
        getTitle(post).toLowerCase().includes(term) ||
        getDescription(post).toLowerCase().includes(term)
    );
  }, [allPosts, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const goToPage = useCallback((p: number) => setCurrentPage(Math.max(1, Math.min(p, totalPages))), [totalPages]);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            IT tips, security updates, and expert insights for Perth businesses. Stay informed with practical advice from our team.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 h-11 bg-background border border-border dark:border-gray-600 dark:focus-visible:ring-gray-500"
                aria-label="Search blog posts"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All posts grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            {searchTerm ? 'No articles match your search.' : 'No posts yet.'}
          </p>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {paginatedPosts.map((post) => (
                <BlogCard key={postKey(post)} post={post} />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <QueryPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                />
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
