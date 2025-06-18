'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { SearchPosts } from '@/components/SearchPosts';
import { Search, BookOpen, Clock, TrendingUp, Filter, Calendar } from 'lucide-react';
import { type CustomBlogOrSeoBot } from '@/lib/seobot.helpers';
import Link from 'next/link';

interface EnhancedBlogPageProps {
  allPosts: CustomBlogOrSeoBot[];
}

const categories = [
  { name: 'All', count: 0, icon: BookOpen },
  { name: 'IT Consulting', count: 0, icon: TrendingUp },
  { name: 'Cybersecurity', count: 0, icon: '🛡️' },
  { name: 'Cloud Services', count: 0, icon: '☁️' },
  { name: 'Business Technology', count: 0, icon: '💼' }
];

const featuredPosts = [
  {
    title: "Expert IT Consulting Perth - Solve Your Tech Challenges Fast",
    excerpt: "Experience fast, reliable solutions for all your tech challenges with our Perth IT consulting experts.",
    category: "IT Consulting",
    readTime: "5 min read",
    trending: true
  },
  {
    title: "Understanding Layers of Security in Computer and Network Systems",
    excerpt: "Learn about comprehensive security strategies to protect your business infrastructure.",
    category: "Cybersecurity",
    readTime: "7 min read",
    trending: false
  }
];

export function EnhancedBlogPage({ allPosts }: EnhancedBlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-gray-900" ref={ref}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
          <motion.div 
            className="absolute bottom-20 left-20 w-32 h-32 bg-[#01042b]/10 rounded-full blur-xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-[#3c91e6]/10 rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <BookOpen className="w-5 h-5 text-[#3c91e6]" />
              <span className="text-sm font-medium text-[#3c91e6]">IT Insights & Resources</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#01042b] to-[#3c91e6] bg-clip-text text-transparent">
              Perth IT Support Insights
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert IT tips, cybersecurity updates, and technology solutions for Perth businesses. 
              Stay informed with our latest insights on managed services, cloud computing, and digital transformation strategies.
            </p>
          </motion.div>

          {/* Featured Posts Preview */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {featuredPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3c91e6]/5 to-[#01042b]/5" />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-[#3c91e6]/10 text-[#3c91e6] border-0">
                        {post.category}
                      </Badge>
                      {post.trending && (
                        <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#3c91e6] hover:text-[#2a7bc4]">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            className="bg-gradient-to-r from-[#01042b] to-[#3c91e6] rounded-2xl p-8 text-white text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated with IT Insights</h3>
            <p className="text-gray-200 mb-6">
              Get the latest IT tips, security updates, and technology insights delivered to your inbox
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button variant="secondary" className="bg-white text-[#01042b] hover:bg-gray-100 font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className={`${
                  selectedCategory === category.name 
                    ? 'bg-[#3c91e6] hover:bg-[#2a7bc4] text-white' 
                    : 'hover:bg-[#3c91e6]/10'
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {typeof category.icon === 'string' ? (
                  <span className="mr-2">{category.icon}</span>
                ) : (
                  <category.icon className="w-4 h-4 mr-2" />
                )}
                {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Search and Filter */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <SearchPosts allPosts={allPosts} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}