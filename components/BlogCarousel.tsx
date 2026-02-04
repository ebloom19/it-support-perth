'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { useState, useCallback, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCardsPerPage } from '@/hooks/use-cards-per-page';

export type BlogCarouselPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
};

type BlogCarouselProps = {
  posts: BlogCarouselPost[];
};

function BlogCard({ post }: { post: BlogCarouselPost }) {
  const blogUrl = post.slug.startsWith('/')
    ? post.slug
    : post.slug.startsWith('blog/')
      ? `/${post.slug}`
      : `/blog/${post.slug}`;
  const formattedDate = post.date
    ? format(new Date(post.date), 'MMMM dd, yyyy')
    : '';

  return (
    <Link href={blogUrl} className="block h-full group">
      <Card className="border-0 bg-white dark:bg-background shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col min-h-[280px]">
        <div className="absolute top-4 left-4 text-5xl text-[#3c91e6]/10 font-serif leading-none">"</div>
        {post.image ? (
          <div className="relative w-full h-40 sm:h-44 flex-shrink-0 overflow-hidden">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 672px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-2 left-3 text-xs text-white/90 font-medium">{formattedDate}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-5 pt-5 pb-2 flex-shrink-0">
            <span className="text-xs text-muted-foreground font-medium">{formattedDate}</span>
          </div>
        )}
        <CardContent className="p-5 sm:p-6 flex flex-col flex-1">
          <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-[#3c91e6] transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3 flex-1">
            {post.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3c91e6] mt-4 group-hover:underline">
            <FileText className="w-4 h-4 shrink-0" />
            Read article
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

export function BlogCarousel({ posts }: BlogCarouselProps) {
  const cardsPerPage = useCardsPerPage();
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(posts.length / cardsPerPage));
  const clampedPage = Math.min(currentPage, totalPages - 1);
  const startIndex = clampedPage * cardsPerPage;
  const visiblePosts = posts.slice(startIndex, startIndex + cardsPerPage);

  useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const goToPage = useCallback((page: number) => {
    setCurrentPage((prev) => Math.max(0, Math.min(page, totalPages - 1)));
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  }, [totalPages]);

  if (!posts?.length) {
    return (
      <section className="py-12 md:py-16 lg:py-20 bg-secondary/50 dark:bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground">No posts to display.</p>
        </div>
      </section>
    );
  }

  const canGoPrev = clampedPage > 0;
  const canGoNext = clampedPage < totalPages - 1;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-secondary/50 dark:bg-secondary/20 overflow-hidden">
      {/* Background decoration - similar to testimonials */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#3c91e6]/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#01042b]/5 dark:bg-[#01042b]/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Latest from Our Blog
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            IT tips, security updates, and insights for Perth businesses. Stay informed with our expert advice.
          </p>
        </motion.div>

        {/* Paged carousel: 1 card (mobile), 2 (tablet), 3 (desktop) + arrows + dots */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-stretch gap-3 sm:gap-4">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full shrink-0 self-center disabled:opacity-40 hover:bg-[#3c91e6] hover:text-white hover:border-[#3c91e6] transition-colors"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 min-w-0 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={clampedPage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {visiblePosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full shrink-0 self-center disabled:opacity-40 hover:bg-[#3c91e6] hover:text-white hover:border-[#3c91e6] transition-colors"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation dots (one per page) */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap" role="tablist" aria-label="Carousel navigation">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-label={`Go to page ${index + 1}`}
                aria-selected={clampedPage === index}
                onClick={() => goToPage(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  clampedPage === index
                    ? 'w-6 bg-[#3c91e6]'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="outline" size="lg" className="hover:bg-[#3c91e6] hover:text-white hover:border-[#3c91e6] transition-all duration-300">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
