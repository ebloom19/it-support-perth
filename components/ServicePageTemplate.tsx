'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Award } from 'lucide-react';
import { SecurityAssessmentCTA } from '@/components/ui/security-assessment-cta';
import { motion } from 'framer-motion';
import { ProcessFlowDiagram } from '@/components/ProcessFlowDiagram';
import { AnimatedStats } from '@/components/AnimatedStats';
import { SocialProofSection } from '@/components/SocialProofSection';
import { EnhancedCTA } from '@/components/EnhancedCTA';
import { InteractiveFeaturesShowcase } from '@/components/InteractiveFeaturesShowcase';
import { LazySection } from '@/components/LazySection';

interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
  color?: string;
}

interface ServiceBenefit {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  // Hero Section
  title: string;
  subtitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  
  // Intro Section
  introText: string;
  
  // Features Section
  features: ServiceFeature[];
  
  // Benefits Section
  benefits: ServiceBenefit[];
  
  // Process Section
  processSteps?: ProcessStep[];
  
  // Stats/Social Proof
  stats?: Array<{
    number: string;
    label: string;
    description?: string;
  }>;
  
  // Call to Actions
  primaryCTA?: string;
  secondaryCTA?: string;
  
  // Additional Content
  additionalSections?: React.ReactNode;
}

export function ServicePageTemplate({
  title,
  subtitle,
  heroDescription,
  heroImage,
  heroImageAlt,
  introText,
  features,
  benefits,
  processSteps,
  stats,
  primaryCTA = "Get Started Today",
  additionalSections,
}: ServicePageTemplateProps) {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-[#01042b] via-[#01042b] to-[#2563eb]/20 overflow-hidden">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#01042b]/90 via-[#01042b]/70 to-[#2563eb]/50" aria-hidden />
        
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 right-20 w-32 h-32 bg-[#2563eb]/10 rounded-full blur-xl"
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
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center text-white min-h-[60vh]">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#2563eb]/20 backdrop-blur-sm border border-[#2563eb]/30 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Award className="w-4 h-4 text-[#2563eb]" />
              <span className="text-sm font-medium">Perth IT Experts</span>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white text-shadow-on-dark-strong"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {title}
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-6 text-white/95 font-medium text-shadow-on-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {subtitle}
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow-on-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {heroDescription}
            </motion.p>

            <motion.div 
              className="flex gap-4 flex-wrap justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild size="lg" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold min-h-[56px] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="/contact-us">
                  <Phone className="w-5 h-5 mr-2" />
                  {primaryCTA}
                </Link>
              </Button>
              <SecurityAssessmentCTA variant="outline" className="!bg-white/10 hover:!bg-white/20 !text-white !border-white/40 backdrop-blur-sm min-h-[56px] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:scale-105 transition-all duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              {introText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (if provided) */}
      {stats && (
        <AnimatedStats 
          stats={stats} 
          variant="cards"
          title="Proven Results"
          description="Numbers that demonstrate our commitment to excellence"
        />
      )}

      {/* Interactive Features Section */}
      <LazySection>
        <InteractiveFeaturesShowcase 
          features={features}
          variant="carousel"
          title="What We Offer"
          description="Comprehensive solutions designed to meet your specific business needs"
        />
      </LazySection>

      {/* Process Steps (if provided) */}
      {processSteps && (
        <LazySection>
          <ProcessFlowDiagram 
            steps={processSteps}
            title="Our Proven Process"
            description="A systematic approach that delivers consistent results"
          />
        </LazySection>
      )}

      {/* Benefits Section */}
      <LazySection>
        <section className="py-20 bg-gradient-to-b from-[#2563eb]/5 via-white to-gray-50 dark:from-[#2563eb]/10 dark:via-background dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Experience the difference of working with Perth&apos;s IT experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-stretch gap-4"
                >
                  <div className="flex-shrink-0">
                    {benefit.icon ? (
                      <div className="text-2xl">{benefit.icon}</div>
                    ) : (
                      <CheckCircle className="w-6 h-6 text-[#2563eb] mt-1" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Additional Sections */}
      {additionalSections && (
        <LazySection>
          {additionalSections}
        </LazySection>
      )}

      {/* Social Proof Section */}
      <LazySection>
        <SocialProofSection variant="stats" />
      </LazySection>

      {/* Enhanced CTA Section */}
      <LazySection>
        <EnhancedCTA 
          variant="multi-path"
          title="Ready to Transform Your IT?"
          description="Multiple ways to get started with Perth's most trusted IT support team. Choose the option that works best for you."
        />
      </LazySection>
    </div>
  );
}