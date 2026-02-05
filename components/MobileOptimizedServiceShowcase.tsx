"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "managed-it",
    title: "Managed IT Services",
    subtitle: "24/7 Proactive Support",
    description:
      "Comprehensive IT management that prevents problems before they impact your business. Proactive monitoring, maintenance, and support.",
    icon: "⚙️",
    features: [
      "24/7 Monitoring",
      "Proactive Maintenance",
      "Help Desk Support",
      "System Optimization",
    ],
    stats: { value: "99.9%", label: "Uptime" },
    link: "/services-and-solutions/managed-it-services-provider",
    color: "from-[#3c91e6] to-[#5ba7f7]",
    popular: true,
  },
  {
    id: "security",
    title: "IT Security Solutions",
    subtitle: "Cybersecurity Protection",
    description:
      "Enterprise-grade security solutions to protect your business from cyber threats. Advanced threat detection and prevention.",
    icon: "🛡️",
    features: [
      "Threat Monitoring",
      "Firewall Protection",
      "Data Encryption",
      "Security Training",
    ],
    stats: { value: "87,400", label: "Threats Blocked" },
    link: "/services-and-solutions/it-security-solutions",
    color: "from-[#01042b] to-[#3c91e6]",
    popular: false,
  },
  {
    id: "cloud",
    title: "Cloud Services",
    subtitle: "Scalable Cloud Solutions",
    description:
      "Microsoft 365 migration, Azure cloud infrastructure, and hybrid cloud solutions tailored to your business needs.",
    icon: "☁️",
    features: [
      "Microsoft 365",
      "Azure Cloud",
      "Hybrid Solutions",
      "Cloud Migration",
    ],
    stats: { value: "50%", label: "Cost Savings" },
    link: "/services-and-solutions/cloud-services",
    color: "from-[#3c91e6] to-[#01042b]",
    popular: false,
  },
  {
    id: "backup",
    title: "Backup & Recovery",
    subtitle: "Data Protection",
    description:
      "Enterprise-grade backup and disaster recovery solutions. Protect your business data from ransomware and system failures.",
    icon: "💾",
    features: [
      "Automated Backups",
      "Disaster Recovery",
      "Ransomware Protection",
      "Quick Restore",
    ],
    stats: { value: "15min", label: "Recovery Time" },
    link: "/services-and-solutions/backup-and-disaster-recovery-solutions",
    color: "from-[#01042b] to-[#3c91e6]",
    popular: false,
  },
];

export function MobileOptimizedServiceShowcase() {
  const [activeService, setActiveService] = useState(services[0]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const toggleCardExpansion = (serviceId: string) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId);
    // Also set as active service
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      setActiveService(service);
    }
  };

  return (
    <section
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#3c91e6]/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" />
            <span className="text-xs sm:text-sm font-medium text-[#2563eb]">
              Comprehensive IT Solutions
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Our Core Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            From proactive monitoring to cybersecurity - we&apos;ve got your IT needs
            covered with expert solutions designed for Perth businesses
          </p>
        </motion.div>

        {/* Mobile-First Approach: Desktop shows side-by-side, Mobile shows expandable cards */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout (lg+) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service Selection Cards */}
            <motion.div
              className="lg:col-span-1 space-y-3 lg:space-y-4"
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
                        ? "ring-2 ring-[#2563eb] shadow-lg"
                        : "hover:shadow-md"
                    }`}
                    onClick={() => setActiveService(service)}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <motion.div
                          className="text-2xl sm:text-3xl"
                          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {service.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-base sm:text-lg mb-1">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {service.subtitle}
                          </p>
                        </div>
                        <motion.div
                          animate={{
                            x: activeService.id === service.id ? 5 : 0,
                            opacity: activeService.id === service.id ? 1 : 0.5,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-5 h-5 text-[#2563eb]" />
                        </motion.div>
                      </div>

                      <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                        <div className="text-2xl font-bold text-[#2563eb]">
                          {service.stats.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {service.stats.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Active Service Details - Desktop */}
            <motion.div
              className="lg:col-span-2"
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full shadow-xl border-0 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-5`}
                />

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
                        className="text-lg text-[#2563eb] font-medium"
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
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {activeService.icon}
                    </motion.div>
                  </div>

                  <motion.p
                    className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {activeService.description}
                  </motion.p>

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
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className={`bg-gradient-to-r ${activeService.color} p-6 rounded-xl text-white mb-8`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold mb-1">
                          {activeService.stats.value}
                        </div>
                        <div className="text-sm opacity-90">
                          {activeService.stats.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Button
                      asChild
                      className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={activeService.link}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      <Link href="/contact-us">Get Quote</Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Mobile Layout (< lg) - Expandable Cards */}
          <div className="lg:hidden space-y-3 sm:space-y-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {services.map((service, index) => (
                <motion.div key={service.id} variants={itemVariants}>
                  <Card className="relative overflow-hidden shadow-md">
                    {service.popular && (
                      <motion.div
                        className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 text-xs">
                          <Star className="w-3 h-3 mr-1 fill-white" />
                          Popular
                        </Badge>
                      </motion.div>
                    )}

                    {/* Card Header - Always Visible */}
                    <CardContent
                      className="p-3 sm:p-4 cursor-pointer"
                      onClick={() => toggleCardExpansion(service.id)}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl">{service.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-base sm:text-lg mb-1">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            {service.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-right">
                            <div className="text-sm sm:text-base lg:text-lg font-bold text-[#2563eb]">
                              {service.stats.value}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {service.stats.label}
                            </div>
                          </div>
                          <motion.div
                            animate={{
                              rotate: expandedCard === service.id ? 180 : 0,
                              scale: expandedCard === service.id ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>

                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedCard === service.id ? "auto" : 0,
                        opacity: expandedCard === service.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                        <div className="border-t border-gray-100 dark:border-gray-700 pt-3 sm:pt-4">
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4">
                            {service.description}
                          </p>

                          {/* Features */}
                          <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-3 sm:mb-4">
                            {service.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                className="flex items-center gap-2 sm:gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                  opacity:
                                    expandedCard === service.id ? 1 : 0,
                                  x: expandedCard === service.id ? 0 : -10,
                                }}
                                transition={{
                                  delay: featureIndex * 0.1,
                                  duration: 0.3,
                                }}
                              >
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                                <span className="text-xs sm:text-sm font-medium">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <Button
                              asChild
                              size="sm"
                              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold min-h-[40px] sm:min-h-[44px] px-4 py-2 text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex-1"
                            >
                              <Link href={service.link}>
                                Learn More
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white min-h-[40px] sm:min-h-[44px] px-4 py-2 text-xs sm:text-sm rounded-lg transition-all duration-300 flex-1"
                            >
                              <Link href="/contact-us">Get Quote</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white border-0 shadow-xl mx-2 sm:mx-0">
              <CardContent className="p-6 sm:p-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                    Ready to Transform Your IT?
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 opacity-90 leading-relaxed max-w-2xl mx-auto">
                    Get a free consultation and discover how our expert IT services can boost your business productivity and security.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Button
                      asChild
                      variant="secondary"
                      size="lg"
                      className="bg-white text-[#2563eb] hover:bg-gray-100 font-semibold min-h-[48px] sm:min-h-[56px] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Link href="/contact-us">
                        Get Free Consultation
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="!border-white !text-white hover:!bg-white hover:!text-[#2563eb] min-h-[48px] sm:min-h-[56px] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all duration-300 bg-transparent"
                    >
                      <Link href="/services-and-solutions">View All Services</Link>
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
