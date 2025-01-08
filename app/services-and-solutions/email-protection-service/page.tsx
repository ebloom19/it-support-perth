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
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Email Protection Services</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Protect Your Business Communication with Advanced Email Security
        </p>

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

        <p className="max-w-3xl text-lg text-muted-foreground">
          Email is the backbone of modern business communication, but it&apos;s also
          a major entry point for cyber threats. Our Email Protection Services
          safeguard your inbox from spam, phishing attempts, malware, and other
          cyber risks, ensuring your communications remain secure and efficient.
        </p>
      </div>

      <section className="mb-16">
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
      </section>

      <section className="mb-16">
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
      </section>

      <section className="mb-16">
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
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{feature.title}</AccordionTrigger>
              <AccordionContent>{feature.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mt-16 text-center">
        <Card className="max-w-3xl mx-auto bg-primary/5">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">
              Don&apos;t Let Email Be Your Weak Spot
            </h3>
            <p className="text-lg mb-6">
              With our advanced email protection services, you can focus on your
              business with peace of mind, knowing your communications are secure.
              Contact us today to learn more and take control of your email security.
            </p>
            <Link href="/contact-us">
              <Button size="lg" className="font-semibold">
                Secure Your Email Today
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 