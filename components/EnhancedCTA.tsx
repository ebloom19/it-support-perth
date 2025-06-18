'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, ArrowRight, MessageCircle, Calendar, Shield, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import { SecurityAssessmentCTA } from '@/components/ui/security-assessment-cta';

interface CTAOption {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  variant: 'default' | 'secondary' | 'outline';
  external?: boolean;
}

interface EnhancedCTAProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  variant?: 'default' | 'multi-path' | 'urgency';
}

const ctaOptions: CTAOption[] = [
  {
    title: "Call Now",
    description: "Speak with an expert immediately",
    icon: <Phone className="w-5 h-5" />,
    href: "tel:0893251196",
    variant: "default",
    external: true
  },
  {
    title: "Free Security Assessment", 
    description: "Get your personalized IT security report",
    icon: <Shield className="w-5 h-5" />,
    href: "/contact-us",
    variant: "secondary"
  },
  {
    title: "Book Consultation",
    description: "Schedule a strategic IT discussion",
    icon: <Calendar className="w-5 h-5" />,
    href: "/contact-us",
    variant: "outline"
  }
];

const urgencyIndicators = [
  { icon: <Users className="w-4 h-4" />, text: "250+ Businesses Protected" },
  { icon: <Clock className="w-4 h-4" />, text: "24/7 Support Available" },
  { icon: <Shield className="w-4 h-4" />, text: "99.9% Uptime Guarantee" }
];

export function EnhancedCTA({ 
  title = "Ready to Transform Your IT?",
  description = "Contact us today for a free consultation and discover how we can help your business thrive.",
  primaryCTA = "Get Started Today",
  secondaryCTA = "Learn More",
  variant = 'default'
}: EnhancedCTAProps) {

  if (variant === 'multi-path') {
    return (
      <section className="py-20 bg-gradient-to-br from-[#01042b] via-[#01042b] to-[#3c91e6] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl"
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
            className="absolute bottom-20 left-20 w-32 h-32 bg-[#3c91e6]/20 rounded-full blur-xl"
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-white mb-4 flex justify-center">
                      {option.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                    <Button
                      asChild
                      variant={option.variant}
                      className={`w-full ${
                        option.variant === 'default' 
                          ? 'bg-white text-[#01042b] hover:bg-gray-100' 
                          : option.variant === 'secondary'
                          ? 'bg-[#3c91e6] hover:bg-[#2a7bc4] text-white'
                          : 'border-white text-white hover:bg-white hover:text-[#01042b]'
                      }`}
                    >
                      {option.external ? (
                        <a href={option.href}>{option.title}</a>
                      ) : (
                        <Link href={option.href}>{option.title}</Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {urgencyIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                {indicator.icon}
                <span className="text-sm font-medium">{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === 'urgency') {
    return (
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Time: Free Security Assessment</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't Wait Until It's Too Late
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Cyber threats are increasing every day. Protect your business now with our comprehensive IT security solutions.
            </p>
            
            <div className="flex gap-4 flex-wrap justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                <Link href="/contact-us">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Protected Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4 text-lg">
                <a href="tel:0893251196">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (08) 9325 1196
                </a>
              </Button>
            </div>

            <div className="text-sm text-gray-200">
              ⚡ Fast Response • 🛡️ Expert Protection • 📞 24/7 Support
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-20 bg-gradient-to-r from-[#01042b] to-[#3c91e6] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8 text-gray-200">{description}</p>
          
          <div className="flex gap-4 flex-wrap justify-center mb-8">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#01042b] hover:bg-gray-100 font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300">
              <Link href="/contact-us">
                <Phone className="w-5 h-5 mr-2" />
                {primaryCTA}
              </Link>
            </Button>
            <SecurityAssessmentCTA 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#01042b] font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
            />
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 border-t border-white/20">
            {urgencyIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                {indicator.icon}
                <span className="text-sm font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}