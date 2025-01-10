import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EmailProtectionService() {
  const statistics = [
    {
      title: "90% of Cyberattacks Begin with Email",
      description:
        "Phishing scams, malware links, and fraudulent emails are common threats that can lead to data breaches, financial loss, or system compromise.",
      icon: "📊",
    },
    {
      title: "Protecting Sensitive Information",
      description:
        "Unsecured emails can expose confidential business data, putting your reputation and operations at risk.",
      icon: "🔒",
    },
    {
      title: "Ensure Email Delivery",
      description:
        "Misconfigured email settings can cause your emails to be flagged as spam by recipients, disrupting critical communication.",
      icon: "✉️",
    },
  ];

  const services = [
    {
      title: "AI-Powered Email Filtering",
      description:
        "Our advanced tools identify and block spam, phishing attempts, and harmful attachments before they reach your inbox, ensuring only legitimate emails get through.",
      icon: "🤖",
    },
    {
      title: "Never Land in Spam",
      description:
        "We optimize your email configuration and reputation settings to prevent your emails from being marked as spam by recipients.",
      icon: "✅",
    },
    {
      title: "Guaranteed Email Delivery",
      description:
        "Legitimate emails are prioritized, ensuring your communication flow remains uninterrupted.",
      icon: "📨",
    },
    {
      title: "Cloud-Based Email Management",
      description:
        "Access and manage your email security settings from anywhere, offering flexibility and ease of use.",
      icon: "☁️",
    },
    {
      title: "Real-Time Threat Updates",
      description:
        "Our system evolves to address new and emerging threats, keeping your inbox secure against the latest cyber risks.",
      icon: "🛡️",
    },
  ];

  const workProcess = [
    {
      title: "Comprehensive Assessment",
      description:
        "We analyze your current email infrastructure to identify vulnerabilities and recommend solutions tailored to your needs.",
    },
    {
      title: "Seamless Integration",
      description:
        "Our tools integrate effortlessly with your existing email platforms, minimizing disruption during setup.",
    },
    {
      title: "Ongoing Monitoring and Support",
      description:
        "Our team provides continuous support and regular updates to ensure your email security remains robust.",
    },
  ];

  const features = [
    {
      title: "Tailored Solutions",
      description:
        "Whether you're a small business or a growing enterprise, our email protection services adapt to your specific needs.",
    },
    {
      title: "Affordable Plans",
      description:
        "Enterprise-grade security at a price point that works for small and medium businesses.",
    },
    {
      title: "Expert Support",
      description:
        "Our team is available to resolve issues quickly and ensure your systems remain secure.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/message-online-chat-social-text-concept-1.webp"
          alt="Message Online Chat Social Text Concept"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Email Protection Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Protect Your Business Communication with Advanced Email Security
          </p>
        </div>
      </div>

      {/* Intro Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="view1" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="view1">Overview</TabsTrigger>
              <TabsTrigger value="view2">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="view1">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/message-online-chat-social-text-concept-1.webp"
                  alt="Message Online Chat Social Text Concept"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </TabsContent>
            <TabsContent value="view2">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/message-online-chat-social-text-concept-2.webp"
                  alt="Message Online Chat Social Text Concept Alternative View"
                  fill
                  className="object-cover"
                />
              </div>
            </TabsContent>
          </Tabs>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            Email is the backbone of modern business communication, but it&apos;s also
            a major entry point for cyber threats. Our Email Protection Services
            safeguard your inbox from spam, phishing attempts, malware, and other
            cyber risks, ensuring your communications remain secure and efficient.
          </p>
        </div>
      </section>

      {/* Statistics Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Email Protection is Essential
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{stat.icon}</span>
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{service.icon}</span>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl text-primary">{index + 1}</span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <Accordion type="single" collapsible className="max-w-3xl px-4 mx-auto bg-secondary rounded-lg">
            {features.map((feature, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{feature.title}</AccordionTrigger>
                <AccordionContent>{feature.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-none">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Don&apos;t Let Email Be Your Weak Spot
              </h3>
              <p className="text-lg mb-6 text-center">
                With our advanced email protection services, you can focus on your
                business with peace of mind, knowing your communications are secure.
                Contact us today to learn more and take control of your email security.
              </p>
              <div className="flex justify-center">
                <Link href="/contact-us">
                  <Button size="lg" className="font-semibold">
                    Secure Your Email Today
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