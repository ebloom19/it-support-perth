"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Coffee,
  Shield,
  Brain,
  Users,
  Heart,
  Wrench,
  Zap,
  CheckCircle,
  Award,
  Star,
  Target,
  TrendingUp,
  Calendar,
  Building,
} from "lucide-react";

export function EnhancedAboutPage() {
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

  const values = [
    {
      icon: Brain,
      title: "Tech Made Simple",
      description:
        "We translate complex technical concepts into clear, actionable solutions that make sense for your business",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage",
      color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-300",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description:
        "Every business is unique, and we tailor our approach to match your specific needs and culture",
      color: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-300",
    },
    {
      icon: Users,
      title: "Human Connection",
      description:
        "Behind every ticket and support call are real people who genuinely care about your success",
      color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-300",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description:
        "We build lasting relationships based on trust, transparency, and consistently exceeding expectations",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300",
    },
  ];

  const team = [
    {
      name: "Amir",
      role: "Cloud System Engineer",
      description:
        "Over a decade of expertise spanning server management, networking, cloud solutions, and virtualisation. Amir transforms complex infrastructure challenges into scalable, efficient solutions.",
      image: "/images/team/amir.png",
      experience: "10+ Years",
      specialties: ["Cloud Architecture", "Virtualization", "Network Security"],
      achievements: [
        "Cloud Migration Expert",
        "Security Specialist",
        "Innovation Driver",
      ],
    },
    {
      name: "Garry",
      role: "Senior IT Manager & Computer Repair Specialist",
      description:
        "With 25 years in IT management and support, Garry brings unparalleled expertise across internal and external service environments. His leadership has shaped our technical excellence and customer-first approach.",
      image: "/images/team/garry.png",
      experience: "25+ Years",
      specialties: ["IT Management", "System Architecture", "Team Leadership"],
      achievements: [
        "Founded IT Support Perth",
        "500+ Projects Delivered",
        "Industry Recognition",
      ],
    },
    {
      name: "Brett",
      role: "Senior IT Manager & Computer Repair Specialist",
      description:
        "A 15-year veteran at Computer Mechanics, Brett exemplifies technical excellence through rapid issue diagnosis and comprehensive industry knowledge. His commitment to quality has earned unwavering customer trust.",
      image: "/images/team/brett.png",
      experience: "15+ Years",
      specialties: [
        "Problem Diagnosis",
        "Hardware Repair",
        "Customer Relations",
      ],
      achievements: [
        "Customer Satisfaction Leader",
        "Technical Innovation Award",
        "Rapid Response Expert",
      ],
    },
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: Calendar },
    { number: "500+", label: "Businesses Served", icon: Building },
    { number: "99.9%", label: "Uptime Achieved", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const milestones = [
    {
      year: "1997",
      title: "Company Founded",
      description: "Started as a computer repair shop in Perth",
    },
    {
      year: "2005",
      title: "Business Expansion",
      description: "Grew to serve small and medium businesses",
    },
    {
      year: "2015",
      title: "Cloud Pioneer",
      description: "Led Perth businesses into cloud transformation",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Pioneering AI-enhanced IT support solutions",
    },
  ];

  return (
    <div className="min-h-screen" ref={ref}>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-us-hero.webp"
          alt="About IT Support Perth"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#01042b]/95 via-[#01042b]/85 to-[#3c91e6]/80" />

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
            transition={{ duration: 0.2 }}
          >
            <Heart className="w-5 h-5 text-white drop-shadow-md" />
            <span className="text-sm font-semibold text-white drop-shadow-md">
              Where Technology Meets Trust
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.3)]">
            Proudly Serving Perth
            <span className="block mt-2 text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
              Since 1997
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_4px_rgba(0,0,0,0.5),0_0_12px_rgba(0,0,0,0.25)]">
            From humble beginnings to Perth's trusted IT partner - our journey
            is built on relationships, innovation, and unwavering commitment to
            your success.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 dark:from-background dark:to-gray-900/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-white/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-[#3c91e6]/20 dark:hover:border-[#3c91e6]/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#3c91e6]/15 to-[#01042b]/10 dark:from-[#3c91e6]/20 dark:to-[#3c91e6]/5 rounded-2xl mb-4">
                  <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-[#3c91e6]" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 tabular-nums">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-[#3c91e6]/10 text-[#3c91e6] border-0 dark:bg-[#3c91e6]/20 dark:text-[#93c5fd]">
                Our Journey
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                From Vision to Reality
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="rounded-2xl p-8 bg-white/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#3c91e6] dark:text-[#93c5fd]">
                  The Beginning
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  What started as Garry Bloom's vision of making technology
                  accessible and reliable for local businesses has evolved into
                  something truly extraordinary. From a modest computer repair
                  shop to Perth's most trusted IT partner.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, Garry's decades of experience guide our talented team,
                  ensuring every interaction delivers the same level of
                  excellence and personal care that built our reputation. It's
                  this perfect blend of seasoned expertise and innovative
                  thinking that keeps us at the forefront of IT solutions.
                </p>
              </div>

              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#3c91e6] to-[#01042b] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg ring-2 ring-[#3c91e6]/20 group-hover:ring-[#3c91e6]/40 transition-shadow">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="pl-1 border-l-2 border-gray-200 dark:border-gray-600 group-hover:border-[#3c91e6]/50 transition-colors">
                      <h4 className="font-semibold text-lg mb-1 text-foreground">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/30 dark:to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-[#3c91e6]/10 text-[#3c91e6] border-0 dark:bg-[#3c91e6]/20 dark:text-[#93c5fd]">
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-foreground">
              Why Perth Businesses Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
              Our values aren't just words on a wall - they're the foundation of
              every interaction, every solution, and every relationship we
              build.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border border-gray-200 bg-white/95 shadow-sm hover:shadow-xl hover:border-[#3c91e6]/30 dark:hover:border-[#3c91e6]/40 transition-all duration-300 backdrop-blur-sm flex flex-col rounded-2xl overflow-hidden dark:bg-gray-800/95 dark:border-gray-700/50 dark:border group">
                  <div className="h-1 bg-gradient-to-r from-[#3c91e6] to-[#01042b] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="flex-shrink-0 pt-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110 ${value.color}`}
                    >
                      <value.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl mb-3 dark:text-gray-100">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 pb-6">
                    <p className="text-muted-foreground leading-relaxed dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-[#3c91e6]/10 text-[#3c91e6] border-0 dark:bg-[#3c91e6]/20 dark:text-[#93c5fd]">
              Meet The Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-foreground">
              The Experts Behind Your Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
              Our team combines decades of experience with fresh innovation, all
              united by a passion for making technology work seamlessly for your
              business.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border border-gray-200 bg-white/95 shadow-sm hover:shadow-xl hover:border-[#3c91e6]/30 dark:hover:border-[#3c91e6]/40 transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col rounded-2xl dark:bg-gray-800/95 dark:border-gray-700/50 dark:border group">
                  <div className="relative h-64 overflow-hidden flex-shrink-0 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#3c91e6] text-white shadow-md border-0">
                        {member.experience}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="flex-shrink-0 pt-6">
                    <CardTitle className="text-2xl mb-2 dark:text-gray-100">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-[#3c91e6] font-medium text-base dark:text-[#93c5fd]">
                      {member.role}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-1">
                    <p className="text-muted-foreground leading-relaxed dark:text-gray-300">
                      {member.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2 dark:text-gray-100">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs dark:bg-gray-700 dark:text-gray-200"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 dark:text-gray-100">Key Achievements:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#01042b] to-[#3c91e6] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-on-dark-strong">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed text-shadow-on-dark">
              Join hundreds of Perth businesses who trust us with their
              technology. Let's discuss how we can help your business thrive.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="h-full flex flex-col">
              <Card className="bg-white/10 backdrop-blur border-white/20 text-white h-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5" />
                    Visit Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col pt-0">
                  <div className="space-y-2 flex-shrink-0">
                    <p className="text-white/95 text-shadow-on-dark">75B Brewer Street, Perth, WA 6000</p>
                    <p className="flex items-center gap-2 text-white/95 text-shadow-on-dark">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      Mon-Fri: 9:00 AM - 5:30 PM
                    </p>
                  </div>
                  <div className="pt-4 space-y-3 flex-shrink-0 mt-auto">
                    <Button variant="secondary" asChild className="w-full bg-white text-[#01042b] hover:bg-gray-100 font-medium">
                      <a
                        href="tel:0894638600"
                        className="flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call (08) 9463 8600
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#01042b] font-medium"
                    >
                      <a
                        href="mailto:info@itsupportperth.net"
                        className="flex items-center justify-center gap-2 text-inherit"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full flex flex-col">
              <Card className="bg-white/10 backdrop-blur border-white/20 text-white h-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Coffee className="w-5 h-5" />
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col pt-0">
                  <p className="text-white/95 text-shadow-on-dark flex-1">
                    Ready to transform your IT experience? Let's chat over
                    coffee and discover how we can help your business thrive in
                    the digital world.
                  </p>
                  <div className="space-y-3 flex-shrink-0 pt-2">
                    <Link href="/contact-us" className="block">
                      <Button size="lg" variant="secondary" className="w-full bg-white text-[#01042b] hover:bg-gray-100 font-medium">
                        Schedule Free Consultation
                        <Calendar className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <p className="text-sm text-white/90 text-center text-shadow-on-dark">
                      Free assessment • No obligation • Same-day response
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
