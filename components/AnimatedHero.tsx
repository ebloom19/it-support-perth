'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Phone } from 'lucide-react';
import { SecurityAssessmentCTA } from '@/components/ui/security-assessment-cta';
import { motion } from 'framer-motion';

export function AnimatedHero() {
  return (
    <div className="relative min-h-[70vh] bg-gradient-to-br from-[#01042b] via-[#01042b] to-[#3c91e6]/20 overflow-hidden">
      <Image
        src="/images/landing.webp"
        alt="IT Support Perth - Professional IT Services"
        fill
        sizes="100vw"
        className="object-cover opacity-30 mix-blend-overlay"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-[#3c91e6]/10 rounded-full blur-xl"
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
          className="absolute bottom-40 left-20 w-24 h-24 bg-white/5 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center text-white min-h-[70vh]">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-[#3c91e6]/20 backdrop-blur-sm border border-[#3c91e6]/30 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Award className="w-4 h-4 text-[#3c91e6]" />
            <span className="text-sm font-medium">20+ Years of Excellence</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Proactive IT Support
            <br />
            <span className="text-foreground">
              Perth
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-6 text-gray-200 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Trusted by 250+ Perth businesses
          </motion.p>

          <motion.p 
            className="text-lg mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Experience reliable, proactive IT support that prevents problems before they impact your business. 
            Straight advice, quick turnarounds, and solutions that work.
          </motion.p>

          <motion.div 
            className="flex gap-4 flex-wrap justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button asChild size="lg" className="bg-[#3c91e6] hover:bg-[#2a7bc4] text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/contact-us">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
            </Button>
            <SecurityAssessmentCTA variant="outline" className="!bg-white/10 hover:!bg-white/20 !text-white !border-white/40 backdrop-blur-sm px-8 py-4 text-lg hover:scale-105 transition-all duration-300" />
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-[#3c91e6]" />
              <span className="text-sm font-medium">No Lock-in Contracts</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-[#3c91e6]" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-[#3c91e6]" />
              <span className="text-sm font-medium">Perth Local</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}