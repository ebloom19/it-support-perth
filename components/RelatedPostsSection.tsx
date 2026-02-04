'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { type CustomBlogOrSeoBot, getTitle, getDescription, getDate } from '@/lib/seobot.helpers';

interface RelatedPostsSectionProps {
  currentPostSlug: string;
  allPosts: CustomBlogOrSeoBot[];
  currentPostTags?: string[];
}

export function RelatedPostsSection({ 
  currentPostSlug, 
  allPosts, 
  currentPostTags = [] 
}: RelatedPostsSectionProps) {
  // Filter out current post and find related posts
  const otherPosts = allPosts.filter(post => post.slug !== currentPostSlug);
  
  // Simple relatedness scoring based on tags and recency
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    const postTags = ('tags' in post && post.tags) ? 
      post.tags.map(t => typeof t === 'string' ? t : t.title) : [];
    
    // Score based on tag overlap
    const tagOverlap = currentPostTags.filter(tag => 
      postTags.some(postTag => 
        postTag.toLowerCase().includes(tag.toLowerCase()) ||
        tag.toLowerCase().includes(postTag.toLowerCase())
      )
    ).length;
    score += tagOverlap * 3;
    
    // Boost recent posts
    const postDate = new Date(getDate(post));
    const daysSincePublished = (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSincePublished < 30) score += 2;
    if (daysSincePublished < 7) score += 1;
    
    return { post, score };
  });
  
  // Sort by score and take top 3
  const relatedPosts = scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.post);

  // If no good matches, just take the 3 most recent posts
  const finalPosts = relatedPosts.length >= 3 ? 
    relatedPosts : 
    otherPosts.slice(0, 3);

  if (finalPosts.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#3c91e6]/10 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-[#3c91e6]" />
            <span className="text-sm font-medium text-[#3c91e6]">Related Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Continue Reading
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore more insights and expert advice on IT support, cybersecurity, and digital transformation
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {finalPosts.map((post, index) => {
            const postUrl = post.slug.startsWith('/') ? post.slug : `/blog/${post.slugAsParams}`;
            const postTags = ('tags' in post && post.tags) ? 
              post.tags.map(t => typeof t === 'string' ? t : t.title).slice(0, 2) : [];
            
            return (
              <motion.div
                key={post.slug}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-white dark:bg-gray-800 flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg flex-shrink-0">
                    {post.image && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.image}
                          alt={getTitle(post)}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    )}
                    {!post.image && (
                      <div className="h-48 bg-gradient-to-br from-[#3c91e6]/20 to-[#01042b]/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-[#3c91e6] rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold text-lg">IT</span>
                          </div>
                          <p className="text-sm text-muted-foreground">IT Support Perth</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-1">
                    {/* Tags */}
                    {postTags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3 flex-shrink-0">
                        {postTags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="text-xs bg-[#3c91e6]/10 text-[#3c91e6]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#3c91e6] transition-colors flex-shrink-0">
                      {getTitle(post)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {getDescription(post)}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 flex-shrink-0">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>5 min read</span>
                      </div>
                      <span>{new Date(getDate(post)).toLocaleDateString()}</span>
                    </div>

                    {/* Read more button */}
                    <Link href={postUrl} className="flex-shrink-0">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-[#3c91e6] group-hover:text-white group-hover:border-[#3c91e6] transition-all duration-300"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all posts CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/blog">
            <Button 
              size="lg" 
              className="bg-[#3c91e6] hover:bg-[#2a7bc4] text-white px-8"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}