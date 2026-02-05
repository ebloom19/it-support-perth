'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Users, Award, Building, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCardsPerPage } from '@/hooks/use-cards-per-page';

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  industry?: string;
  image?: string;
}

interface SocialProofSectionProps {
  testimonials?: Testimonial[];
  variant?: 'testimonials' | 'stats' | 'combined';
  title?: string;
  description?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    company: "Perth Legal Services",
    role: "Managing Partner",
    content: "Their proactive approach to IT management has transformed our practice. We haven't had a single major IT issue since partnering with them 2 years ago.",
    rating: 5,
    industry: "Legal Services"
  },
  {
    name: "David Chen",
    company: "Coastal Manufacturing",
    role: "Operations Director",
    content: "The cloud migration they managed for us resulted in 40% cost savings and dramatically improved our team's productivity. Exceptional service.",
    rating: 5,
    industry: "Manufacturing"
  },
  {
    name: "Lisa Thompson",
    company: "Thompson Accounting",
    role: "Principal Accountant",
    content: "Their cybersecurity solutions gave us peace of mind during tax season. Professional, responsive, and truly understand small business needs.",
    rating: 5,
    industry: "Accounting"
  }
];

const trustIndicators = [
  { icon: "👥", label: "250+ Happy Clients", description: "Businesses we've helped succeed" },
  { icon: "⭐", label: "4.9 Star Rating", description: "Average customer satisfaction" },
  { icon: "🏆", label: "20+ Years Experience", description: "Supporting Perth businesses" },
  { icon: "🛡️", label: "99.9% Uptime", description: "System reliability guarantee" },
  { icon: "⚡", label: "24/7 Support", description: "Always here when you need us" },
  { icon: "🎯", label: "100% Local Team", description: "Perth-based IT professionals" }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400 dark:text-gray-500'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3c91e6] to-[#01042b]" />
      <CardContent className="p-6 flex flex-col flex-1">
        <Quote className="w-8 h-8 text-[#3c91e6] mb-4 flex-shrink-0" />
        <StarRating rating={testimonial.rating} />
        <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-1">
          "{testimonial.content}"
        </blockquote>
        <div className="border-t pt-4 flex-shrink-0">
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-[#3c91e6] font-medium">{testimonial.role}</div>
          <div className="text-sm text-muted-foreground">{testimonial.company}</div>
          {testimonial.industry && (
            <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <Building className="w-3 h-3" />
              {testimonial.industry}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const cardsPerPage = useCardsPerPage();
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(testimonials.length / cardsPerPage));
  const clampedPage = Math.min(currentPage, totalPages - 1);
  const startIndex = clampedPage * cardsPerPage;
  const visible = testimonials.slice(startIndex, startIndex + cardsPerPage);

  useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const goToPage = useCallback((page: number) => {
    setCurrentPage((p) => Math.max(0, Math.min(page, totalPages - 1)));
  }, [totalPages]);

  const canGoPrev = clampedPage > 0;
  const canGoNext = clampedPage < totalPages - 1;

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="flex items-stretch gap-3 sm:gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full shrink-0 self-center disabled:opacity-40 hover:bg-[#3c91e6] hover:text-white hover:border-[#3c91e6] transition-colors"
          onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visible.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full shrink-0 self-center disabled:opacity-40 hover:bg-[#3c91e6] hover:text-white hover:border-[#3c91e6] transition-colors"
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={!canGoNext}
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex justify-center gap-2 mt-6 flex-wrap" role="tablist" aria-label="Testimonials navigation">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-label={`Go to page ${index + 1}`}
            aria-selected={clampedPage === index}
            onClick={() => goToPage(index)}
            className={`h-2 rounded-full transition-all duration-200 ${
              clampedPage === index ? 'w-6 bg-[#3c91e6]' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function SocialProofSection({ 
  testimonials = defaultTestimonials,
  variant = 'combined',
  title = "Trusted by Perth Businesses",
  description = "See why local businesses choose us for their IT needs"
}: SocialProofSectionProps) {
  
  if (variant === 'stats') {
    return (
      <section className="py-20 bg-[#3c91e6]/8 dark:bg-[#3c91e6]/15 border-t border-b border-[#3c91e6]/20 dark:border-[#3c91e6]/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="text-center text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{indicator.icon}</div>
                <div className="font-bold text-lg mb-1">{indicator.label}</div>
                <div className="text-sm text-muted-foreground">{indicator.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'testimonials') {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
    );
  }

  // Combined variant
  return (
    <>
      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-[#01042b] to-[#3c91e6] text-white" aria-label="Trust and social proof">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="text-3xl mb-2">{indicator.icon}</div>
                <div className="font-bold text-sm mb-1">{indicator.label}</div>
                <div className="text-xs text-white/90">{indicator.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real feedback from Perth businesses we've helped succeed
            </p>
          </motion.div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}