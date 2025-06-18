'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, Shield, Server, Cloud, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

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

export function AnimatedServices() {
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
  );
}