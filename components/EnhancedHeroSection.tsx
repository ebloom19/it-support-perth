'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Phone, ArrowRight, Shield, Users, Clock, Star } from 'lucide-react';
import { SecurityAssessmentCTA } from '@/components/ui/security-assessment-cta';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const valuePropositions = [
  {
    icon: Shield,
    title: "Proactive Protection",
    description: "Prevent problems before they impact your business",
    color: "text-[#2563eb]"
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock system surveillance and support",
    color: "text-[#2563eb]"
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Perth-based team with 20+ years experience",
    color: "text-[#2563eb]"
  }
];

const trustIndicators = [
  { text: "250+ Happy Clients", icon: "👥" },
  { text: "99.9% Uptime", icon: "⚡" },
  { text: "24/7 Support", icon: "🛟" },
  { text: "No Lock-in Contracts", icon: "🔓" },
  { text: "Perth Local", icon: "🏢" }
];

// Typing animation hook
function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return { displayText, isComplete };
}

export function EnhancedHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeProposition, setActiveProposition] = useState(0);
  
  const mainHeading = useTypewriter("Expert IT Support & Managed Services Perth", 80);
  
  // Cycle through value propositions
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProposition(prev => (prev + 1) % valuePropositions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#01042b] via-[#01042b] to-[#2563eb]/20 overflow-hidden" ref={ref}>
      <Image
        src="/images/landing.webp"
        alt="IT Support Perth - Professional IT Services"
        fill
        sizes="(max-width: 768px) 100vw, 100vw"
        className="object-cover opacity-20 mix-blend-overlay"
        priority
      />
      
      {/* Static background blurs - no transform animation to avoid mobile CLS */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#2563eb]/10 rounded-full blur-xl" />
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-white/5 rounded-full blur-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-[#2563eb]/5 to-[#01042b]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-7xl mx-auto w-full">
          {/* Left Column - Main Content. Opacity-only animation to avoid CLS. */}
          <motion.div 
            className="text-white space-y-6 sm:space-y-8 lg:space-y-10 min-w-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2563eb]/20 backdrop-blur-sm border border-[#2563eb]/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" />
              <span className="text-xs sm:text-sm font-medium">Perth&apos;s #1 Rated IT Support</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            {/* Main Heading with Typewriter. No layout-affecting animation. */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
              {mainHeading.displayText}
              {!mainHeading.isComplete && (
                <span className="inline-block w-0.5 sm:w-1 h-8 sm:h-12 lg:h-16 bg-[#2563eb] ml-1 sm:ml-2 align-middle animate-pulse" aria-hidden />
              )}
            </h1>

            {/* Dynamic Value Proposition - min-height reserves space to avoid CLS */}
            <div className="min-h-[100px] sm:min-h-[120px]">
              {valuePropositions.map((prop, index) => (
                <div
                  key={index}
                  className={activeProposition === index ? 'block' : 'hidden'}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#2563eb]/10`}>
                      <prop.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${prop.color}`} />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{prop.title}</h2>
                      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200">{prop.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Message */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              Trusted by 250+ Perth businesses for reliable, proactive IT support that prevents problems before they impact your operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold min-h-[48px] sm:min-h-[56px] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="/contact-us">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Free Consultation
                </Link>
              </Button>
              <SecurityAssessmentCTA 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm min-h-[48px] sm:min-h-[56px] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300" 
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/10">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 sm:gap-2 text-gray-300"
                >
                  <span className="text-sm sm:text-base lg:text-lg">{indicator.icon}</span>
                  <span className="text-xs sm:text-sm font-medium">{indicator.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - min-height reserves space to prevent CLS; opacity-only animation */}
          <motion.div 
            className="space-y-4 sm:space-y-6 mt-8 lg:mt-0 min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] min-w-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {valuePropositions.map((prop, index) => (
              <div key={index} className="group">
                <Card 
                  className={`cursor-pointer bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 ${activeProposition === index ? 'ring-2 ring-[#2563eb]' : ''}`}
                  onClick={() => setActiveProposition(index)}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#2563eb]/10">
                        <prop.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${prop.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1">{prop.title}</h3>
                        <p className="text-gray-300 text-xs sm:text-sm">{prop.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* Urgency Card */}
            <div className="group">
              <Card className="bg-gradient-to-r from-red-600/80 to-orange-600/80 backdrop-blur-sm border-red-300/50 hover:from-red-600/90 hover:to-orange-600/90 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-red-900/40 rounded-full px-3 sm:px-4 py-1 sm:py-2 mb-3 sm:mb-4 border border-red-400/30">
                      <span className="text-sm sm:text-base lg:text-lg">🚨</span>
                      <span className="text-xs sm:text-sm font-medium text-white">Limited Time Offer</span>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2">Free IT Security Assessment</h3>
                    <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4">Valued at $500 - Get yours today!</p>
                    <SecurityAssessmentCTA 
                      variant="secondary"
                      size="sm"
                      className="bg-white text-red-700 hover:bg-red-50 font-semibold shadow-md hover:shadow-lg transition-all duration-300 min-h-[40px] px-4 py-2 text-xs sm:text-sm"
                    >
                      Claim Now
                    </SecurityAssessmentCTA>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}