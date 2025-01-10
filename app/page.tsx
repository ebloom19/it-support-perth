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
  Bot, 
  Database, 
  Mail, 
  Flame,
  Headset,
  Wrench 
} from 'lucide-react';
import { SecurityAssessmentCTA } from '@/components/ui/security-assessment-cta';
import { BlogsSection } from '@/components/blogs-section';

export default function Home() {
  const services = [
    {
      title: "Managed IT Services",
      description: "Comprehensive IT management and support for your business",
      icon: Server,
      color: "text-blue-600",
      href: "/services-and-solutions/managed-it-services-provider"
    },
    {
      title: "IT Security",
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
      title: "Remote IT Support",
      description: "Quick and efficient remote technical assistance",
      icon: Headset,
      color: "text-indigo-600",
      href: "/services-and-solutions/remote-support"
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
          src="/images/landing.webp"
          alt="Computer Mechanics"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IT Support Perth
          </h1>
          <p className="text-xl mb-8">
            23 years of straight advice, quick turnarounds and trouble-shooting
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button asChild>
              <Link href="/contact-us">Get Started</Link>
            </Button>
            <SecurityAssessmentCTA variant="secondary" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className={`w-12 h-12 ${service.color} mb-4`} />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            What makes us different?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground">
            <div>
              <p className="mb-4">
                As a business, as a culture, we&apos;re all about efficient use of
                time.
              </p>
              <p className="mb-4">
                We take pride in three things: straight advice, fixing things
                fast and solving problems.
              </p>
              <p>
                Our main customers are small to medium-sized businesses who want
                outsourced IT that is a match for their circumstances rather
                than being locked-in to a 12 month package.
              </p>
            </div>
            <div>
              <p className="mb-4">
                We offer flexible Managed IT where you can change the service
                offering as you go. And you can walk away with a month&apos;s notice.
              </p>
              <p className="mb-4">
                The real value here is anticipating problems so that your
                systems become resilient with absolutely minimal downtime.
              </p>
              <p>
                Give us a call if you&apos;d like to talk over a specific problem or
                decision. That&apos;s a pretty good way to check us out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogsSection />

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>
          <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
            {[
              { src: "/images/partners/microsoft.svg", alt: "Microsoft" },
              { src: "/images/partners/synnex.svg", alt: "Synnex" },
              { src: "/images/partners/leader.png", alt: "Leader Computer" },
              { src: "/images/partners/veeam.svg", alt: "Veeam" },
              { src: "/images/partners/ingram-micro.svg", alt: "Ingram Micro" },
              { src: "/images/partners/acronis.svg", alt: "Acronis" },
              { src: "/images/partners/webroot.svg", alt: "Webroot" }
            ].map((partner, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative transform group-hover:scale-110 transition-all duration-300">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={150}
                    height={80}
                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
