'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Phone, Shield, Users, Clock, Star } from 'lucide-react';
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
        className="object-cover object-center opacity-20 mix-blend-overlay"
        priority
      />
      
      {/* Static background blurs - no transform animation to avoid mobile CLS */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#2563eb]/10 rounded-full blur-xl" />
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-white/5 rounded-full blur-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-[#2563eb]/5 to-[#01042b]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 md:py-8 lg:py-10 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch max-w-7xl mx-auto w-full">
          {/* Left Column - Main Content. Opacity-only animation to avoid CLS. */}
          <motion.div 
            className="text-white min-w-0 h-full flex flex-col [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Content with standard spacing - same min-height as right column */}
            <div className="flex-1 flex flex-col space-y-4 sm:space-y-5 md:space-y-6 min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-0 min-w-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#2563eb]/20 backdrop-blur-sm border border-[#2563eb]/30 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 w-fit">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" />
                <span className="text-xs sm:text-sm font-medium">Perth&apos;s #1 Rated IT Support</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Main Heading with Typewriter. No layout-affecting animation. */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-tight min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] lg:min-h-[5.5rem]">
                {mainHeading.displayText}
                {!mainHeading.isComplete && (
                  <span className="inline-block w-0.5 sm:w-1 h-8 sm:h-12 lg:h-16 bg-[#2563eb] ml-1 sm:ml-2 align-middle animate-pulse" aria-hidden />
                )}
              </h1>

              {/* Dynamic Value Proposition - min-height reserves space to avoid CLS */}
              <div className="min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
                {valuePropositions.map((prop, index) => (
                  <div
                    key={index}
                    className={activeProposition === index ? 'block' : 'hidden'}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      <div className={`p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#2563eb]/10 flex-shrink-0`}>
                        <prop.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${prop.color}`} />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-0.5 sm:mb-1 md:mb-2">{prop.title}</h2>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.4)] leading-snug">{prop.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Message */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
                Trusted by 250+ Perth businesses for reliable, proactive IT support that prevents problems before they impact your operations.
              </p>
            </div>

            {/* CTA Buttons - pinned to bottom, full width of column, wrap to avoid overflow */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-start mt-auto pt-3 sm:pt-4 md:pt-5 flex-shrink-0 w-full min-w-0">
              <Button asChild size="lg" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold h-11 sm:h-12 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Link href="/contact-us" className="inline-flex items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" />
                  Get Free Consultation
                </Link>
              </Button>
              <SecurityAssessmentCTA 
                variant="outline" 
                className="!bg-white/10 hover:!bg-white/20 !text-white !border-2 !border-white/40 backdrop-blur-sm h-11 sm:h-12 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base hover:scale-105 transition-all duration-300 w-full sm:w-auto" 
              />
            </div>
          </motion.div>

          {/* Right Column - min-height reserves space to prevent CLS; opacity-only animation */}
          <motion.div 
            className="space-y-4 sm:space-y-5 md:space-y-6 mt-6 sm:mt-8 md:mt-10 lg:mt-0 min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-0 h-full flex flex-col min-w-0 lg:col-span-1"
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
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#2563eb]/10 flex-shrink-0">
                        <prop.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${prop.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-0.5 sm:mb-1">{prop.title}</h3>
                        <p className="text-white/90 text-xs sm:text-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] leading-snug">{prop.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* Urgency Card */}
            <div className="group">
              <Card className="bg-gradient-to-r from-red-600/80 to-orange-600/80 backdrop-blur-sm border-red-300/50 hover:from-red-600/90 hover:to-orange-600/90 transition-all duration-300">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-red-900/40 rounded-full px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 mb-2 sm:mb-3 md:mb-4 border border-red-400/30">
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg">🚨</span>
                      <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white">Limited Time Offer</span>
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">Free IT Security Assessment</h3>
                    <p className="text-white/95 text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">Valued at $500 - Get yours today!</p>
                    <SecurityAssessmentCTA 
                      variant="secondary"
                      size="sm"
                      className="bg-white text-red-700 hover:bg-red-50 font-semibold shadow-md hover:shadow-lg transition-all duration-300 min-h-[36px] sm:min-h-[40px] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
                    >
                      Claim Now
                    </SecurityAssessmentCTA>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Trust Indicators - full width below both columns */}
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-5 md:pt-6 border-t border-white/10 lg:col-span-2 w-full justify-center items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex items-center gap-1 sm:gap-2 text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]"
              >
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">{indicator.icon}</span>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium">{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}