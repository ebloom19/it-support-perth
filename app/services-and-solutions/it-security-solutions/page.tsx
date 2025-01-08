import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ITSecuritySolutions() {
  const cyberCrimes = [
    {
      title: "Identity Fraud",
      description: "Protection against identity theft and fraudulent activities",
      icon: "🔐",
    },
    {
      title: "Online Shopping Fraud",
      description: "Safeguards for e-commerce and digital transactions",
      icon: "🛒",
    },
    {
      title: "Online Banking Fraud",
      description: "Security measures for financial transactions and data",
      icon: "🏦",
    },
  ];

  const services = [
    {
      title: "Endpoint Protection",
      description:
        "Safeguard your devices with advanced antivirus and malware detection.",
      icon: "💻",
    },
    {
      title: "Microsoft Purview and DLP",
      description:
        "Protect sensitive data, prevent leaks, and maintain compliance effortlessly.",
      icon: "🔒",
    },
    {
      title: "Network Security with Firewalls",
      description:
        "Fortify your infrastructure with tools like FortiGate firewalls to block unauthorized access.",
      icon: "🛡️",
    },
    {
      title: "Secure Remote Access",
      description:
        "Implement VPNs and multi-factor authentication to ensure safe work-from-anywhere setups.",
      icon: "🌐",
    },
    {
      title: "Real-Time Threat Detection",
      description:
        "Monitor your systems 24/7 for potential risks, ensuring rapid responses to cyber incidents.",
      icon: "👁️",
    },
  ];

  const features = [
    {
      title: "Expertise You Can Trust",
      description: "Our team is equipped to handle the latest threats with tailored strategies.",
    },
    {
      title: "Proactive Approach",
      description:
        "Prevent attacks before they happen with our real-time monitoring and regular updates.",
    },
    {
      title: "Tailored Solutions",
      description:
        "From small businesses to larger enterprises, our strategies adapt to your specific requirements.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">IT Security Solutions</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Comprehensive IT Security Services for Your Business
        </p>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/hands-working-digital-device-network-graphic-overlay.webp"
            alt="Hands working on digital device network"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="max-w-3xl text-lg text-muted-foreground">
          As cyber threats grow more sophisticated, businesses must take proactive
          steps to protect their data, systems, and customers. Our IT Security
          Solutions provide the tools and expertise you need to defend against
          these threats, ensuring your operations remain secure.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Current Cyber Threat Landscape
        </h2>
        <Card className="max-w-4xl mx-auto mb-8">
          <CardContent className="pt-6">
            <p className="text-lg mb-4">
              According to the Australian Signals Directorate (ASD) Annual Cyber
              Threat Report 2023–24:
            </p>
            <p className="text-xl font-semibold mb-4 text-primary">
              Over 87,400 cybercrime reports were submitted in the past year,
              averaging one every six minutes.
            </p>
            <p className="text-lg mb-4">The top three cybercrimes impacting Australians were:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {cyberCrimes.map((crime, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-2xl">{crime.icon}</span>
                  <span>{crime.title}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
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
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us for IT Security?
        </h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{feature.title}</AccordionTrigger>
              <AccordionContent>{feature.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-16">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">
              Stay Safe in a Growing Cyber Landscape
            </h3>
            <p className="text-lg mb-4">
              The ASD emphasizes the need for every business to prioritize
              cybersecurity, and we&apos;re here to help you do just that. By
              partnering with us, you&apos;ll gain peace of mind knowing your IT
              environment is protected against identity fraud, online shopping
              scams, banking fraud, and more.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16 text-center">
        <Card className="max-w-3xl mx-auto bg-primary/5">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Protect Your Business Today</h3>
            <p className="text-lg mb-6">
              Secure your operations and data with trusted IT Security Services.
              Contact us for a free security assessment and start building a safer
              digital future.
            </p>
            <Link href="/contact-us">
              <Button size="lg" className="font-semibold">
                Get Your Free Security Assessment
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 