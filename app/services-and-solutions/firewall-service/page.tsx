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

export default function FirewallService() {
  const benefits = [
    {
      title: "Machine Learning-Powered Threat Detection",
      description:
        "FortiGate leverages FortiGuard Labs, which uses machine learning to identify and block threats, including malware, ransomware, and phishing attempts.",
      icon: "🤖",
    },
    {
      title: "Secure Remote Access",
      description:
        "With hybrid and remote work becoming the norm, FortiGate provides reliable VPN solutions to ensure your team can work securely from anywhere.",
      icon: "🔒",
    },
    {
      title: "Comprehensive Network Visibility",
      description:
        "FortiGate firewalls give you full visibility into your network, enabling you to monitor traffic, enforce policies, and control applications easily.",
      icon: "👁️",
    },
    {
      title: "Scalability and Flexibility",
      description:
        "Whether you're a small business or a growing enterprise, FortiGate firewalls scale effortlessly to meet your needs.",
      icon: "📈",
    },
  ];

  const services = [
    {
      title: "Customized Setup and Configuration",
      description:
        "We design and configure firewalls tailored to your unique business needs, ensuring optimal performance and security.",
      icon: "⚙️",
    },
    {
      title: "Proactive Monitoring and Maintenance",
      description:
        "Our team monitors your network 24/7, identifying and addressing potential vulnerabilities before they become issues.",
      icon: "🔍",
    },
    {
      title: "Regular Updates and Patching",
      description:
        "Stay ahead of emerging threats with routine firmware and security updates.",
      icon: "🔄",
    },
    {
      title: "Policy Creation and Management",
      description:
        "We implement and manage security policies that align with your industry's standards and compliance requirements.",
      icon: "📋",
    },
    {
      title: "Scalable Solutions",
      description:
        "As your business grows, we ensure your firewall infrastructure grows with it, offering seamless upgrades and expansions.",
      icon: "🚀",
    },
  ];

  const statistics = [
    {
      title: "43% of Cyberattacks Target Small Businesses",
      description:
        "Many small businesses lack the resources to recover from a major breach. FortiGate provides enterprise-grade protection without the complexity.",
      icon: "🎯",
    },
    {
      title: "Ransomware Costs",
      description:
        "The average cost of a ransomware attack on small businesses exceeds $200,000, making proactive protection a necessity.",
      icon: "💰",
    },
    {
      title: "Hybrid Work Security",
      description:
        "With employees accessing networks remotely, robust firewall solutions ensure secure connections for all devices.",
      icon: "🏠",
    },
  ];

  const features = [
    {
      title: "Expertise You Can Trust",
      description:
        "With years of experience deploying FortiGate firewalls, our team ensures your network security is in expert hands.",
    },
    {
      title: "End-to-End Support",
      description:
        "From initial installation to ongoing management, we handle every aspect of your firewall solution.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Enterprise-level protection at a price that fits your budget, tailored for small and medium businesses.",
    },
    {
      title: "Local Expertise",
      description:
        "We understand the unique challenges businesses in the region face and design solutions that work for you.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Firewall Services (FortiGate)</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Fortify Your Business with FortiGate Firewall Solutions
        </p>

        <Tabs defaultValue="view1" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="view1">Overview</TabsTrigger>
            <TabsTrigger value="view2">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="view1">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/firewall-vectors.webp"
                alt="Firewall vectors illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </TabsContent>
          <TabsContent value="view2">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/computer-security-decorative-elements.webp"
                alt="Computer Security Decorative Elements"
                fill
                className="object-cover"
              />
            </div>
          </TabsContent>
        </Tabs>

        <p className="max-w-3xl text-lg text-muted-foreground">
          Your network is the backbone of your business, but it&apos;s also a primary
          target for cyber threats. Our FortiGate Firewall Services provide
          comprehensive protection for your network, ensuring your data, devices,
          and operations remain secure against even the most advanced attacks.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose FortiGate?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{benefit.icon}</span>
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Firewall Services Include
        </h2>
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
        <h2 className="text-3xl font-bold text-center mb-12">
          Why FortiGate Firewalls Are Essential
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
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
            <h3 className="text-xl font-semibold mb-4">Protect Your Network Today</h3>
            <p className="text-lg mb-6">
              Cyber threats evolve every day, but so do our solutions. With our
              FortiGate Firewall Services, you can safeguard your business with
              confidence, knowing your network is secure and future-ready.
            </p>
            <Link href="/contact-us">
              <Button size="lg" className="font-semibold">
                Get Started with FortiGate
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 