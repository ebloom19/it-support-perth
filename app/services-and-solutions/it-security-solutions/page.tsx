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
import { SecurityAssessmentCTA } from "@/components/ui/security-assessment-cta";

export default function ITSecuritySolutions() {
  const cyberCrimes = [
    {
      title: "Identity Fraud",
      description:
        "Protection against identity theft and fraudulent activities",
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
      description:
        "Our team is equipped to handle the latest threats with tailored strategies.",
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
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/hands-working-digital-device-network-graphic-overlay.webp"
          alt="Hands working on digital device network"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IT Security Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comprehensive IT Security Services for Your Business
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button asChild>
              <Link href="/contact-us">Get Started</Link>
            </Button>
            <SecurityAssessmentCTA variant="secondary" />
          </div>
        </div>
      </div>

      {/* Intro Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            As cyber threats grow more sophisticated, businesses must take
            proactive steps to protect their data, systems, and customers. Our
            IT Security Solutions provide the tools and expertise you need to
            defend against these threats, ensuring your operations remain
            secure.
          </p>
        </div>
      </section>

      {/* Threat Landscape Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Current Cyber Threat Landscape
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                According to the Australian Signals Directorate (ASD) Annual
                Cyber Threat Report 2023–24:
              </p>
              <p className="text-xl font-semibold mb-4 text-primary">
                Over 87,400 cybercrime reports were submitted in the past year,
                averaging one every six minutes.
              </p>
              <p className="text-lg mb-4">
                The top three cybercrimes impacting Australians were:
              </p>
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
        </div>
      </section>

      {/* Services Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
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
        </div>
      </section>

      {/* Features Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us for IT Security?
          </h2>
          <Accordion
            type="single"
            collapsible
            className="max-w-3xl px-4 mx-auto bg-background rounded-lg"
          >
            {features.map((feature, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{feature.title}</AccordionTrigger>
                <AccordionContent>{feature.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Assessment Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Free Security Assessment
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Take our comprehensive security assessment to evaluate your
                  organization&apos;s security posture
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Why Take This Assessment?
                </h3>
                <ul className="space-y-3 mb-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Identify potential security vulnerabilities in your
                      systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Get personalized recommendations for improvement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Understand your compliance with security best practices
                    </span>
                  </li>
                </ul>
                <SecurityAssessmentCTA />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
