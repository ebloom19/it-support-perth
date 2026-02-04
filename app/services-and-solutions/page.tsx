import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Server, 
  Shield, 
  Cloud, 
  Bot, 
  Database, 
  Mail, 
  Flame,
  Headset,
  Wrench 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

const url = `${siteConfig.url}/services-and-solutions`;
export const metadata: Metadata = {
  title: 'Comprehensive Proactive IT solutions in Perth | IT Support Perth',
  description: 'With over 23 years of experience, IT Support Perth delivers managed IT, cybersecurity, cloud, AI support, backup solutions and more to keep your business secure.',
  alternates: { canonical: url },
  openGraph: { title: 'Comprehensive Proactive IT solutions in Perth | IT Support Perth', description: 'With over 23 years of experience, IT Support Perth delivers managed IT, cybersecurity, cloud, AI support, backup solutions and more to keep your business secure.', url },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Managed IT Services",
      description: "Comprehensive IT management and support for your business",
      icon: Server,
      color: "text-blue-600",
      href: "/services-and-solutions/managed-it-services-provider"
    },
    {
      title: "Firewall Services",
      description: "Protect your business with FortiGate firewall solutions",
      icon: Shield,
      color: "text-red-600",
      href: "/services-and-solutions/firewall-service"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions for modern businesses",
      icon: Cloud,
      color: "text-sky-500",
      href: "/services-and-solutions/cloud-services"
    },
    {
      title: "AI-Enhanced Support",
      description: "Next-generation IT support powered by AI",
      icon: Bot,
      color: "text-purple-600",
      href: "/services-and-solutions/ai-enhanced-it-support"
    },
    {
      title: "On-Premises Servers",
      description: "Expert management of your on-site infrastructure",
      icon: Database,
      color: "text-emerald-600",
      href: "/services-and-solutions/on-premises-server-management"
    },
    {
      title: "Email Protection",
      description: "Advanced email security and spam protection",
      icon: Mail,
      color: "text-amber-600",
      href: "/services-and-solutions/email-protection-service"
    },
    {
      title: "Backup & Recovery",
      description: "Reliable backup and disaster recovery solutions",
      icon: Flame,
      color: "text-orange-600",
      href: "/services-and-solutions/backup-and-disaster-recovery-solutions"
    },
    {
      title: "IT Security Solutions",
      description: "Cybersecurity, data protection and secure remote access",
      icon: Headset,
      color: "text-indigo-600",
      href: "/services-and-solutions/it-security-solutions"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT guidance and technology consulting",
      icon: Wrench,
      color: "text-teal-600",
      href: "/services-and-solutions/it-consulting"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/photo-of-people-doing-handshakes-3183197.png"
          alt="People shaking hands"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comprehensive IT Solutions for Modern Businesses
          </p>
        </div>
      </div>

      {/* Services Grid - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            IT Services & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <Link href={service.href} className="flex flex-col flex-1">
                  <CardHeader className="flex-shrink-0">
                    <div className="w-full h-48 flex items-center justify-center">
                      <service.icon size={80} className={service.color} />
                    </div>
                    <CardTitle className="text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-center text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Computer Mechanics?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-center">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  23+ years of delivering reliable IT solutions to businesses
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-center">Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Certified professionals with deep technical knowledge
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-center">Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Responsive support when you need it most
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Primary Background */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-none bg-secondary">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
                Let Computer Mechanics solve your IT issues today!
              </h2>
              <p className="text-lg mb-8 text-center text-muted-foreground">
                Get in touch with our team to discuss how we can help your business thrive
              </p>
              <div className="flex justify-center">
                <Link href="/contact-us">
                  <Button size="lg" className="font-semibold">
                    Talk with us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
