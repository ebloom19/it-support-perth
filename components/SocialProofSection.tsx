'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Users, Award, Building, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
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
      <section className="py-20 bg-gradient-to-b from-[#01042b] to-[#3c91e6] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{indicator.icon}</div>
                <div className="font-bold text-lg mb-1">{indicator.label}</div>
                <div className="text-sm text-white/90">{indicator.description}</div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3c91e6] to-[#01042b]" />
                  
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-[#3c91e6] mb-4" />
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="border-t pt-4">
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
              </motion.div>
            ))}
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3c91e6] to-[#01042b]" />
                  
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-[#3c91e6] mb-4" />
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="border-t pt-4">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}