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
      <div className="relative h-[calc(50vh-4rem)] bg-black">
        <Image
          src="/images/landing.webp"
          alt="IT Support Perth - Professional IT Services"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Proactive IT Support<br />
              <span className="text-[#3c91e6]">Perth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              20+ years of reliable IT services for Perth businesses
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Straight advice, quick turnarounds, and proactive support that keeps your business running smoothly
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Button asChild size="lg" className="bg-[#3c91e6] hover:bg-[#2a7bc4] text-white font-semibold px-8 py-3">
                <Link href="/contact-us">Get Free Consultation</Link>
              </Button>
              <SecurityAssessmentCTA variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core IT Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT support for Perth businesses with over 20 years of proven experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-background">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-${service.color.replace('text-', '')}/10 to-${service.color.replace('text-', '')}/5`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')} mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
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
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Perth Businesses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over 250 five-star reviews from satisfied customers across Perth and Western Australia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Walked in with my laptop that had a wifi issue and had it looked at and fixed on the spot. Efficient and friendly service."
                </p>
                <div className="text-sm font-medium">Perth Customer</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "A huge thank you to Brett today for helping to troubleshoot my laptop issue. When I thought my laptop was gone forever, he got it running again. One happy customer!"
                </p>
                <div className="text-sm font-medium">Business Owner</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Great customer service and they do an amazing job. Have taken laptops here several times & always been happy."
                </p>
                <div className="text-sm font-medium">Repeat Customer</div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              <span className="text-[#3c91e6] font-semibold">20+ years</span> of reliable IT support in Perth
            </p>
            <Button asChild variant="outline">
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
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
              { src: "/images/partners/microsoft-partner.png", alt: "Microsoft" },
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
