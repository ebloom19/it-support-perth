"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomBlogOrSeoBot, getTitle, getDescription, getDate } from "@/lib/seobot.helpers";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlogPostEngagement } from "./BlogPostEngagement";
import { RelatedPostsSection } from "./RelatedPostsSection";

type EnhancedBlogLayoutProps = {
  children: React.ReactNode;
  title: string;
  slug: string;
  allPosts: CustomBlogOrSeoBot[];
  tags?: string[];
  description?: string;
  publishDate?: string;
  readTime?: string;
  author?: string;
};

const EnhancedBlogLayout: React.FC<EnhancedBlogLayoutProps> = ({
  children,
  title,
  tags,
  allPosts,
  description,
  slug,
  publishDate,
  readTime = "5 min read",
  author = "IT Support Perth Team",
}) => {
  const shareUrl = `https://itsupportperth.com.au${slug}`;

  // Get related posts for suggestions
  const relatedPosts = allPosts
    .filter(post => post.slug !== slug)
    .slice(0, 3)
    .map(post => ({
      title: getTitle(post),
      url: post.slug.startsWith('/') ? post.slug : `/blog/${post.slugAsParams}`,
      excerpt: getDescription(post),
      readTime: "5 min read"
    }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 right-20 w-40 h-40 bg-[#3c91e6]/10 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="ghost" className="flex items-center gap-2 text-[#3c91e6] hover:text-[#2a7bc4]">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#01042b] to-[#3c91e6] bg-clip-text text-transparent leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
            )}

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              {publishDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(publishDate).toLocaleDateString()}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <motion.div 
                className="flex flex-wrap justify-center gap-2 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-[#3c91e6]/10 text-[#3c91e6] border-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-[#01042b] dark:prose-headings:text-white prose-a:text-[#3c91e6] hover:prose-a:text-[#2a7bc4] prose-strong:text-[#01042b] dark:prose-strong:text-white">
                    {children}
                  </article>
                </CardContent>
              </Card>
            </motion.div>

            {/* Engagement Section */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <BlogPostEngagement
                title={title}
                url={shareUrl}
                excerpt={description}
                readTime={readTime}
                publishDate={publishDate}
                tags={tags}
                author={author}
                relatedPosts={relatedPosts}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPostsSection 
        currentPostSlug={slug}
        allPosts={allPosts}
        currentPostTags={tags}
      />
    </div>
  );
};

export default EnhancedBlogLayout;