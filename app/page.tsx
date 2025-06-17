'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { 
  Shield, 
  Server, 
  Cloud, 
  Flame,
  CheckCircle,
  Users,
  Award,
  Phone
} from 'lucide-react';
import { SecurityAssessmentCTA } from '@/components/ui/security-assessment-cta';
import { BlogsSection } from '@/components/blogs-section';
import { motion } from 'framer-motion';

export default function Home() {
  const services = [
    {
      title: "Managed IT Services",
      description: "Proactive IT management and 24/7 support for Perth businesses. Over 20 years of reliable service.",
      icon: Server,
      color: "text-[#3c91e6]",
      href: "/services-and-solutions/managed-it-services-provider",
      features: ["24/7 Monitoring", "Proactive Maintenance", "Help Desk Support", "Strategic Planning"]
    },
    {
      title: "IT Security Solutions", 
      description: "Comprehensive cybersecurity protection including firewalls, email security, and threat management.",
      icon: Shield,
      color: "text-[#01042b]",
      href: "/services-and-solutions/it-security-solutions",
      features: ["FortiGate Firewalls", "Email Protection", "Security Assessments", "Compliance Support"]
    },
    {
      title: "Cloud Services",
      description: "Scalable, secure cloud solutions for modern Perth businesses. Migrate and manage with confidence.",
      icon: Cloud,
      color: "text-[#3c91e6]",
      href: "/services-and-solutions/cloud-services",
      features: ["Cloud Migration", "Office 365", "Azure Services", "Hybrid Solutions"]
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Reliable backup solutions and business continuity planning to protect your critical data.",
      icon: Flame,
      color: "text-[#01042b]",
      href: "/services-and-solutions/backup-and-disaster-recovery-solutions",
      features: ["Automated Backups", "Disaster Recovery", "Business Continuity", "Data Protection"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[70vh] bg-gradient-to-br from-[#01042b] via-[#01042b] to-[#3c91e6]/20 overflow-hidden">
        <Image
          src="/images/landing.webp"
          alt="IT Support Perth - Professional IT Services"
          layout="fill"
          objectFit="cover"
          className="opacity-30 mix-blend-overlay"
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
              <span className="bg-gradient-to-r from-[#3c91e6] to-[#5ba7f7] bg-clip-text text-transparent">
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
              <SecurityAssessmentCTA variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8 py-4 text-lg hover:scale-105 transition-all duration-300" />
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

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#01042b] to-[#3c91e6] bg-clip-text text-transparent">
              Our Core IT Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT support for Perth businesses with over 20 years of proven experience. 
              We focus on four core areas that matter most to your business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full border-0 bg-white dark:bg-background shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Gradient background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 dark:to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="pb-6 relative z-10">
                    <div className="flex items-start gap-6">
                      <motion.div 
                        className={`p-4 rounded-2xl bg-gradient-to-br ${
                          service.color.includes('3c91e6') 
                            ? 'from-[#3c91e6]/10 to-[#3c91e6]/5' 
                            : 'from-[#01042b]/10 to-[#01042b]/5'
                        } group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className={`w-10 h-10 ${service.color}`} />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 group-hover:text-[#3c91e6] transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 pb-6 relative z-10">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center text-sm font-medium text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * featureIndex }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-4 h-4 text-[#3c91e6] mr-3 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 relative z-10">
                    <Button asChild className="w-full bg-[#3c91e6] hover:bg-[#2a7bc4] text-white font-semibold py-3 group-hover:scale-105 transition-all duration-300">
                      <Link href={service.href}>
                        Learn More
                        <motion.span
                          className="ml-2 inline-block"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to action under services */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Not sure which service is right for your business?
            </p>
            <Button asChild variant="outline" size="lg" className="hover:bg-[#3c91e6] hover:text-white transition-all duration-300">
              <Link href="/contact-us">
                <Phone className="w-5 h-5 mr-2" />
                Call (08) 9325 1196 for Expert Advice
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proactive IT Support Across Perth & WA
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              20+ years of serving Perth businesses with reliable, proactive IT support that keeps you running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#3c91e6]">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3c91e6] mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Proactive Approach:</strong> We prevent problems before they impact your business
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3c91e6] mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Quick Response:</strong> Fast turnarounds and efficient problem-solving
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3c91e6] mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Flexible Service:</strong> No lock-in contracts, month-to-month flexibility
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#01042b]">Service Areas</h3>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive IT support across Perth metropolitan region and throughout Western Australia:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Perth CBD</div>
                  <div>• Fremantle</div>
                  <div>• Joondalup</div>
                  <div>• Rockingham</div>
                  <div>• Midland</div>
                  <div>• Armadale</div>
                  <div>• Mandurah</div>
                  <div>• Regional WA</div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Remote support available statewide
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to experience proactive IT support?
            </p>
            <Button asChild size="lg" className="bg-[#3c91e6] hover:bg-[#2a7bc4]">
              <Link href="/contact-us">Get Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            {[
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
            ].map((testimonial, index) => (
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

      <BlogsSection />

      {/* Trust & Certifications Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#01042b] to-[#3c91e6] bg-clip-text text-transparent">
              Trusted Technology Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We partner with industry leaders to deliver enterprise-grade IT solutions to Perth businesses
            </p>
          </motion.div>

          {/* Trust badges row */}
          <motion.div 
            className="flex justify-center items-center gap-8 mb-16 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 bg-white dark:bg-background rounded-lg px-4 py-3 shadow-md">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-sm">Microsoft Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-background rounded-lg px-4 py-3 shadow-md">
              <Shield className="w-5 h-5 text-[#3c91e6]" />
              <span className="font-semibold text-sm">Cybersecurity Experts</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-background rounded-lg px-4 py-3 shadow-md">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-sm">Perth Local Business</span>
            </div>
          </motion.div>

          {/* Partners grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center max-w-6xl mx-auto">
            {[
              { src: "/images/partners/microsoft-partner.png", alt: "Microsoft Partner" },
              { src: "/images/partners/synnex.svg", alt: "Synnex" },
              { src: "/images/partners/leader.png", alt: "Leader Computer" },
              { src: "/images/partners/veeam.svg", alt: "Veeam" },
              { src: "/images/partners/ingram-micro.svg", alt: "Ingram Micro" },
              { src: "/images/partners/acronis.svg", alt: "Acronis" },
              { src: "/images/partners/webroot.svg", alt: "Webroot" }
            ].map((partner, index) => (
              <motion.div 
                key={index}
                className="relative group w-full max-w-[120px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-[#3c91e6]/20 to-[#01042b]/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white dark:bg-background rounded-lg p-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="w-full h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional trust indicators */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-[#3c91e6]/5 to-[#01042b]/5 rounded-2xl px-8 py-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#3c91e6]">100%</p>
                <p className="text-sm text-muted-foreground">Perth Based</p>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#01042b]">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#3c91e6]">1 Month</p>
                <p className="text-sm text-muted-foreground">Notice Period</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
