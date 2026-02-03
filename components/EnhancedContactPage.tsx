'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Shield, Users, Award, MessageCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us Direct",
    description: "Speak with an IT expert immediately",
    value: "(08) 9325 1196",
    href: "tel:0893251196",
    color: "text-[#3c91e6]",
    urgent: true
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get a detailed response within 2 hours",
    value: "support@itsupportperth.com.au",
    href: "mailto:support@itsupportperth.com.au",
    color: "text-foreground",
    urgent: false
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team in real-time",
    value: "Start Chat",
    href: "#chat",
    color: "text-[#3c91e6]",
    urgent: false
  }
];

const whyContactUs = [
  { text: "Free consultation & quote", icon: "💰" },
  { text: "Same-day response guaranteed", icon: "⚡" },
  { text: "No obligation assessment", icon: "🔍" },
  { text: "Perth local experts", icon: "🏢" },
  { text: "20+ years experience", icon: "⭐" }
];

const urgencyIndicators = [
  "🚨 Server down or critical issue? Call immediately!",
  "⚡ Same-day response for all inquiries",
  "🛡️ Free security assessment valued at $500",
  "📞 Speak with a real person, not a call center"
];

export function EnhancedContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, service: selectedService }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you within 2 hours during business hours.");
        reset();
        setSelectedService('');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again or call us directly at (08) 9325 1196");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-[#01042b] via-[#01042b] to-[#3c91e6]/20 overflow-hidden">
        <Image
          src="/images/IMAG02331-washed1.webp"
          alt="Contact IT Support Perth"
          layout="fill"
          objectFit="cover"
          className="opacity-30 mix-blend-overlay"
        />
        
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
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center text-white min-h-[60vh]">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-full px-6 py-3 mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-lg">🚨</span>
              <span className="text-sm font-medium">Emergency IT Support Available 24/7</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Expert IT Help
              <br />
              <span className="text-foreground">
                Right Now
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
              Same-day response • Free consultation • No obligation quote
            </p>

            {/* Urgency Scrolling Text */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-full py-3 px-6 mb-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="flex gap-8 text-sm font-medium whitespace-nowrap"
                animate={{ x: [0, -100] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {urgencyIndicators.map((indicator, index) => (
                  <span key={index} className="flex-shrink-0">{indicator}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Contact Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg shadow-lg">
                <a href="tel:0893251196">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now - Emergency
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8 py-4 text-lg">
                <a href="#contact-form">
                  Get Free Quote
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the contact method that works best for your situation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden ${method.urgent ? 'ring-2 ring-red-500' : ''}`}>
                  {method.urgent && (
                    <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-xs font-medium text-center py-1">
                      URGENT ISSUES
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br from-[#3c91e6]/10 to-[#3c91e6]/5`}>
                        <method.icon className={`w-8 h-8 ${method.color}`} />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <Button asChild className={`w-full ${method.urgent ? 'bg-red-600 hover:bg-red-700' : 'bg-[#3c91e6] hover:bg-[#2a7bc4]'}`}>
                      <a href={method.href}>
                        {method.value}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Why Contact Us */}
          <motion.div 
            className="bg-gradient-to-r from-[#3c91e6]/5 to-[#01042b]/5 rounded-2xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center mb-6">Why Contact Us Today?</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {whyContactUs.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xl">{reason.icon}</span>
                  <span className="font-medium">{reason.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">Get Your Free IT Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your IT challenges and we'll provide a customized solution.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          {...register("name", { required: "Name is required" })}
                          placeholder="Your Name *"
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          {...register("company")}
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          placeholder="Email Address *"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          {...register("phone", { required: "Phone number is required" })}
                          placeholder="Phone Number *"
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <select
                        {...register("service")}
                        className="w-full p-3 border rounded-md"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        <option value="">Select Service (Optional)</option>
                        <option value="managed-it">Managed IT Services</option>
                        <option value="security">IT Security Solutions</option>
                        <option value="cloud">Cloud Services</option>
                        <option value="backup">Backup & Recovery</option>
                        <option value="emergency">Emergency Support</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <Textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Describe your IT challenges or requirements *"
                        rows={5}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#3c91e6] hover:bg-[#2a7bc4] font-semibold min-h-[56px] py-3 sm:py-4 text-base sm:text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get Free Consultation"}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      * Required fields. We'll respond within 2 hours during business hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Trust */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Business Hours & Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#3c91e6]" />
                    Visit Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Perth, Western Australia</p>
                    <p className="text-muted-foreground">Servicing all Perth metro areas</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#3c91e6]" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Emergency Support: 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#3c91e6]" />
                    Why Choose Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>20+ years serving Perth businesses</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>250+ satisfied customers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Microsoft certified partners</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>No lock-in contracts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Phone className="w-6 h-6" />
                    Emergency IT Support
                  </h3>
                  <p className="mb-4">Critical system down? Server issues? Call immediately for urgent support.</p>
                  <Button asChild variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                    <a href="tel:0893251196">
                      Call (08) 9325 1196 Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}