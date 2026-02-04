'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPostSocialShare } from './BlogPostSocialShare';

interface BlogPostEngagementProps {
  title: string;
  url: string;
  excerpt?: string;
  readTime?: string;
  publishDate?: string;
  tags?: string[];
  author?: string;
  relatedPosts?: Array<{
    title: string;
    url: string;
    excerpt: string;
    readTime?: string;
  }>;
}

export function BlogPostEngagement({ 
  title, 
  url, 
  excerpt, 
  readTime, 
  publishDate, 
  tags, 
  author,
  relatedPosts = []
}: BlogPostEngagementProps) {

  return (
    <div className="space-y-8">
      {/* Post Meta Information */}
      <motion.div 
        className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {author && (
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
        )}
        {publishDate && (
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(publishDate).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        )}
        {readTime && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        )}
      </motion.div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-[#3c91e6]/10 text-[#3c91e6] hover:bg-[#3c91e6]/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </motion.div>
      )}

      {/* Engagement Actions */}
      <motion.div 
        className="flex items-center justify-between py-6 border-y"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <BlogPostSocialShare title={title} url={url} excerpt={excerpt} />
      </motion.div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="bg-gradient-to-r from-[#01042b] to-[#3c91e6] text-white border-0">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white text-shadow-on-dark-strong">Stay Updated with IT Insights</h3>
            <p className="text-white/95 mb-4 text-shadow-on-dark">
              Get the latest cybersecurity tips and technology insights delivered to your inbox
            </p>
            <Button variant="secondary" className="bg-white text-[#01042b] hover:bg-gray-100">
              Subscribe to Newsletter
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-foreground">Related Articles</h3>
          <div className="grid gap-6">
            {relatedPosts.slice(0, 3).map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 line-clamp-2">{post.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                        {post.readTime && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        )}
                      </div>
                      <Link href={post.url}>
                        <Button variant="ghost" size="sm" className="flex-shrink-0">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="bg-gray-50 dark:bg-gray-800/50 border-0">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Need Expert IT Support?</h3>
            <p className="text-muted-foreground mb-4">
              Get personalized advice from our Perth IT experts. Free consultation available.
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild>
                <Link href="/contact-us">Get Free Consultation</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="tel:0893251196">Call (08) 9325 1196</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}