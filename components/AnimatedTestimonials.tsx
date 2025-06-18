'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    review: "Walked in with my laptop that had a wifi issue and had it looked at and fixed on the spot. Efficient and friendly service.",
    author: "Perth Customer",
    rating: 5
  },
  {
    review: "A huge thank you to Brett today for helping to troubleshoot my laptop issue. When I thought my laptop was gone forever, he got it running again. One happy customer!",
    author: "Business Owner",
    rating: 5
  },
  {
    review: "Great customer service and they do an amazing job. Have taken laptops here several times & always been happy.",
    author: "Repeat Customer",
    rating: 5
  }
];

export function AnimatedTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#3c91e6]/5 via-white to-gray-50 dark:from-[#3c91e6]/10 dark:via-background dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#3c91e6]/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#01042b]/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#01042b] to-[#3c91e6] bg-clip-text text-transparent">
            Trusted by Perth Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over 250 five-star reviews from satisfied customers across Perth and Western Australia. 
            See why businesses choose us for their IT support needs.
          </p>
          
          {/* Review stats */}
          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="flex text-yellow-400 text-2xl">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">4.9/5 Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#3c91e6]">250+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#01042b]">20+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 bg-white dark:bg-background shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                {/* Quote decoration */}
                <div className="absolute top-6 left-6 text-6xl text-[#3c91e6]/10 font-serif leading-none">"</div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400 text-lg">
                      {"★".repeat(testimonial.rating)}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed text-lg italic">
                    {testimonial.review}
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3c91e6] to-[#01042b] flex items-center justify-center text-white font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">Verified Customer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white dark:bg-background rounded-full px-6 py-3 shadow-md mb-6">
            <Users className="w-5 h-5 text-[#3c91e6]" />
            <span className="font-semibold">Join 250+ satisfied customers</span>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild variant="outline" size="lg" className="hover:bg-[#3c91e6] hover:text-white transition-all duration-300">
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#3c91e6] hover:bg-[#2a7bc4] text-white">
              <Link href="/contact-us">Get Your Free Quote</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}