'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    subtitle: '24/7 Proactive Support',
    description: 'Comprehensive IT management that prevents problems before they impact your business. Proactive monitoring, maintenance, and support.',
    icon: '⚙️',
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'System Optimization'],
    stats: { value: '99.9%', label: 'Uptime' },
    link: '/services-and-solutions/managed-it-services-provider',
    color: 'from-[#3c91e6] to-[#5ba7f7]',
    popular: true
  },
  {
    id: 'security',
    title: 'IT Security Solutions',
    subtitle: 'Cybersecurity Protection',
    description: 'Enterprise-grade security solutions to protect your business from cyber threats. Advanced threat detection and prevention.',
    icon: '🛡️',
    features: ['Threat Monitoring', 'Firewall Protection', 'Data Encryption', 'Security Training'],
    stats: { value: '87,400', label: 'Threats Blocked' },
    link: '/services-and-solutions/it-security-solutions',
    color: 'from-[#01042b] to-[#3c91e6]',
    popular: false
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    subtitle: 'Scalable Cloud Solutions',
    description: 'Microsoft 365 migration, Azure cloud infrastructure, and hybrid cloud solutions tailored to your business needs.',
    icon: '☁️',
    features: ['Microsoft 365', 'Azure Cloud', 'Hybrid Solutions', 'Cloud Migration'],
    stats: { value: '50%', label: 'Cost Savings' },
    link: '/services-and-solutions/cloud-services',
    color: 'from-[#3c91e6] to-[#01042b]',
    popular: false
  },
  {
    id: 'backup',
    title: 'Backup & Recovery',
    subtitle: 'Data Protection',
    description: 'Comprehensive backup and disaster recovery solutions to ensure your business data is always protected and recoverable.',
    icon: '💾',
    features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Recovery Testing'],
    stats: { value: '15min', label: 'Recovery Time' },
    link: '/services-and-solutions/backup-and-disaster-recovery-solutions',
    color: 'from-[#01042b] to-[#3c91e6]',
    popular: false
  }
];

export function InteractiveServiceShowcase() {
  const [activeService, setActiveService] = useState(services[0]);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#3c91e6]/10 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <TrendingUp className="w-5 h-5 text-[#3c91e6]" />
            <span className="text-sm font-medium text-[#3c91e6]">Comprehensive IT Solutions</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#01042b] to-[#3c91e6] bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From proactive monitoring to cybersecurity - we've got your IT needs covered with expert solutions designed for Perth businesses
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Service Selection Cards */}
          <motion.div 
            className="lg:col-span-1 space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    activeService.id === service.id 
                      ? 'ring-2 ring-[#3c91e6] shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setActiveService(service)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {service.popular && (
                    <motion.div
                      className="absolute top-3 right-3"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                        <Star className="w-3 h-3 mr-1 fill-white" />
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                      </div>
                      <motion.div
                        animate={{ 
                          x: activeService.id === service.id ? 5 : 0,
                          opacity: activeService.id === service.id ? 1 : 0.5
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-[#3c91e6]" />
                      </motion.div>
                    </div>

                    {/* Quick stats */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                      <div className="text-2xl font-bold text-[#3c91e6]">{service.stats.value}</div>
                      <div className="text-sm text-muted-foreground">{service.stats.label}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Service Details */}
          <motion.div 
            className="lg:col-span-2"
            key={activeService.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full shadow-xl border-0 relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-5`} />
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <motion.h3 
                      className="text-3xl font-bold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {activeService.title}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-[#3c91e6] font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {activeService.subtitle}
                    </motion.p>
                  </div>
                  <motion.div 
                    className="text-6xl"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    {activeService.icon}
                  </motion.div>
                </div>

                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-8 text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {activeService.description}
                </motion.p>

                {/* Features Grid */}
                <motion.div 
                  className="grid grid-cols-2 gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {activeService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Stats Highlight */}
                <motion.div 
                  className={`bg-gradient-to-r ${activeService.color} p-6 rounded-xl text-white mb-8`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">{activeService.stats.value}</div>
                      <div className="text-sm opacity-90">{activeService.stats.label}</div>
                    </div>
                    <div className="text-4xl opacity-80">{activeService.icon}</div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button asChild size="lg" className="bg-[#3c91e6] hover:bg-[#2a7bc4] font-semibold px-8">
                    <Link href={activeService.link}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="font-semibold px-8">
                    <Link href="/contact-us">
                      Get Quote
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? We&apos;ve got additional services to meet your specific needs.
          </p>
          <Button asChild variant="outline" size="lg" className="font-semibold px-8">
            <Link href="/services-and-solutions">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}