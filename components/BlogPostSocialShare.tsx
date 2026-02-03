'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Share2, Facebook, Twitter, Linkedin, Link2, Mail, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

interface BlogPostSocialShareProps {
  title: string;
  url: string;
  excerpt?: string;
}

export function BlogPostSocialShare({ title, url, excerpt }: BlogPostSocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const shareData = {
    title: title,
    text: excerpt || title,
    url: url
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'hover:bg-sky-500 hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'hover:bg-blue-700 hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`,
      color: 'hover:bg-gray-600 hover:text-white'
    }
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handleNativeShare}
          className="flex items-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-2 right-0 z-50"
        >
          <Card className="w-64 shadow-lg border-0 bg-white dark:bg-gray-800">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-3 text-sm">Share this article</h4>
              <div className="space-y-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-2 rounded-md transition-colors ${social.color}`}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm">{social.name}</span>
                  </motion.a>
                ))}
                <motion.button
                  onClick={handleCopyLink}
                  className="flex items-center gap-3 p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link2 className="w-4 h-4" />
                  <span className="text-sm">Copy Link</span>
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}