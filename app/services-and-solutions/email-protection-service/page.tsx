import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BarChart,
  Lock,
  Mail,
  Bot,
  CheckCircle,
  Send,
  Cloud,
  Shield,
  Search,
  AlertTriangle,
  Settings,
  Users,
} from "lucide-react";
import { SecurityAssessmentCTA } from "@/components/ui/security-assessment-cta";

export default function EmailProtectionService() {
  const statistics = [
    {
      title: "90% of Cyberattacks Begin with Email",
      description:
        "Phishing scams, malware links, and fraudulent emails are common threats that can lead to data breaches.",
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      title: "Protecting Sensitive Information",
      description:
        "Unsecured emails can expose confidential business data, putting your reputation at risk.",
      icon: Lock,
      color: "text-blue-500",
    },
    {
      title: "Ensure Email Delivery",
      description:
        "Properly configured email settings prevent your messages from being flagged as spam.",
      icon: Send,
      color: "text-green-500",
    },
  ];

  const services = [
    {
      title: "AI-Powered Email Filtering",
      description:
        "Advanced tools to identify and block spam, phishing attempts, and harmful attachments",
      icon: Bot,
      features: ["Spam Detection", "Phishing Protection", "Malware Scanning"],
    },
    {
      title: "Email Deliverability",
      description:
        "Optimize your email configuration to ensure messages reach their destination",
      icon: CheckCircle,
      features: ["SPF Records", "DKIM Setup", "DMARC Implementation"],
    },
    {
      title: "Secure Email Gateway",
      description:
        "Multi-layered protection for incoming and outgoing email traffic",
      icon: Shield,
      features: ["Content Filtering", "URL Defense", "Attachment Scanning"],
    },
    {
      title: "Cloud Email Security",
      description:
        "Cloud-based protection that scales with your business needs",
      icon: Cloud,
      features: ["24/7 Protection", "Real-time Updates", "Zero Downtime"],
    },
    {
      title: "Email Monitoring",
      description:
        "Continuous monitoring and threat detection for your email systems",
      icon: Search,
      features: [
        "Threat Detection",
        "Performance Monitoring",
        "Security Alerts",
      ],
    },
    {
      title: "Email Management",
      description: "Comprehensive tools for email security and administration",
      icon: Settings,
      features: ["Policy Management", "Compliance", "Reporting"],
    },
  ];

  const features = [
    {
      title: "Enterprise-Grade Protection",
      description:
        "Advanced security features typically reserved for large enterprises, made accessible for businesses of all sizes",
      icon: Shield,
      color: "text-purple-500",
    },
    {
      title: "Easy Integration",
      description:
        "Seamless integration with popular email platforms including Microsoft 365 and Google Workspace",
      icon: Settings,
      color: "text-indigo-500",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock expert support to ensure your email security never sleeps",
      icon: Users,
      color: "text-amber-500",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/message-online-chat-social-text-concept.webp"
          alt="Email Protection Services"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Email Protection Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Secure Your Business Communication with Advanced Email Protection
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button asChild>
              <Link href="/contact-us">Get Started</Link>
            </Button>
            <SecurityAssessmentCTA variant="secondary" />
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why Email Security Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Email is the backbone of modern business communication, but
              it&apos;s also a major entry point for cyber threats. Our Email
              Protection Services safeguard your inbox from spam, phishing
              attempts, malware, and other cyber risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {statistics.map((stat, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    <CardTitle>{stat.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Email Protection Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIndex) => (
                      <Badge key={fIndex} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Our Email Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-none">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-center mb-4">
                Secure Your Email Communications Today
              </h3>
              <p className="text-lg text-center text-muted-foreground mb-8">
                Don&apos;t let email be your security weak spot. Our advanced
                protection services keep your business communications secure and
                efficient.
              </p>
              <div className="flex justify-center">
                <Link href="/contact-us">
                  <Button size="lg" className="font-semibold">
                    Get Started
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
