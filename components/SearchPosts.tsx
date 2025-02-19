'use client';

import debounce from 'lodash/debounce';
import React, { useEffect, useMemo, useState } from 'react';

import { PostHeader } from '@/components/PostHeader';
import { QueryPagination } from '@/components/QueryPagination';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  type CustomBlogOrSeoBot,
  getDate,
  getDescription,
  getTitle,
} from '@/lib/seobot.helpers';

interface SearchPostsProps {
  /** Expect pre-normalized posts from the server */
  allPosts: CustomBlogOrSeoBot[];
}

const POSTS_PER_PAGE = 9;

export const fetchCache = 'force-no-store';

export const SearchPosts: React.FC<SearchPostsProps> = ({ allPosts }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<CustomBlogOrSeoBot[]>(
    allPosts.slice(0, POSTS_PER_PAGE),
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(allPosts.length / POSTS_PER_PAGE),
  );

  useEffect(() => {
    // Since posts are already normalized on the server, we only need to filter them.
    const calculateTotalPages = () => {
      if (searchTerm) {
        const filteredCount = allPosts.filter((post) =>
          getTitle(post).toLowerCase().includes(searchTerm.toLowerCase()),
        ).length;
        setTotalPages(Math.ceil(filteredCount / POSTS_PER_PAGE));
      } else {
        setTotalPages(Math.ceil(allPosts.length / POSTS_PER_PAGE));
      }
    };
    calculateTotalPages();
  }, [searchTerm, allPosts]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const postsToFilter = searchTerm
      ? allPosts.filter((post) =>
          getTitle(post).toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : allPosts;
    setFilteredPosts(postsToFilter.slice(startIndex, endIndex));
  }, [currentPage, allPosts, searchTerm]);

  // Update filtered posts without async normalization
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        if (term === '') {
          setFilteredPosts(allPosts.slice(0, POSTS_PER_PAGE));
          setCurrentPage(1);
        } else {
          const matchedPosts = allPosts.filter((post) =>
            getTitle(post).toLowerCase().includes(term.toLowerCase()),
          );
          setFilteredPosts(matchedPosts.slice(0, POSTS_PER_PAGE));
          setCurrentPage(1);
        }
      }, 300),
    [allPosts],
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        aria-label="Search blog posts"
        role="searchbox"
        placeholder="Search blog posts..."
        className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 shadow-xs focus:outline-hidden focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 sm:text-sm"
      />
      <BentoGrid className="max-w-7xl mx-auto mb-8 grid-flow-row-dense mt-4">
        {filteredPosts.map((post, i) => (
          <BentoGridItem
            key={post.slug}
            title={getTitle(post)}
            description={getDescription(post)}
            header={<PostHeader date={getDate(post)} image={post.image} />}
            className={`${i % 4 === 0 ? 'md:col-span-2' : 'md:col-span-1'} transition-transform transform hover:scale-105`}
            href={
              post.slugAsParams.startsWith('blog/')
                ? `/${post.slugAsParams}`
                : `/blog/${post.slugAsParams}`
            }
          />
        ))}
      </BentoGrid>
      <div className="flex justify-center mt-4">
        <QueryPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
