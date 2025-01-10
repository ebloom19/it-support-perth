import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Bot, 
  Lock, 
  Eye, 
  LineChart, 
  Settings, 
  Activity,
  Shield,
  Users,
  Target,
  DollarSign,
  Home,
  Cog,
  Monitor,
  RefreshCw,
  FileText,
  Rocket
} from "lucide-react";

export default function FirewallService() {
  const benefits = [
    {
      title: "Machine Learning-Powered Threat Detection",
      description: "FortiGate leverages FortiGuard Labs to identify and block threats using advanced ML",
      icon: Bot,
      color: "text-purple-500"
    },
    {
      title: "Secure Remote Access",
      description: "Reliable VPN solutions for secure remote work from anywhere",
      icon: Lock,
      color: "text-blue-500"
    },
    {
      title: "Comprehensive Network Visibility",
      description: "Full network visibility for monitoring traffic and enforcing policies",
      icon: Eye,
      color: "text-green-500"
    },
    {
      title: "Scalability and Flexibility",
      description: "Solutions that scale effortlessly with your business growth",
      icon: LineChart,
      color: "text-orange-500"
    }
  ];

  const services = [
    {
      title: "Customized Setup",
      description: "Tailored firewall configuration for your business needs",
      icon: Settings,
      features: ["Custom Rules", "Policy Configuration", "Network Integration"]
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring and threat detection",
      icon: Activity,
      features: ["Real-time Alerts", "Threat Detection", "Performance Monitoring"]
    },
    {
      title: "Regular Updates",
      description: "Stay protected with routine updates and patches",
      icon: RefreshCw,
      features: ["Firmware Updates", "Security Patches", "Threat Database Updates"]
    },
    {
      title: "Policy Management",
      description: "Comprehensive security policy implementation",
      icon: FileText,
      features: ["Access Control", "Compliance", "Policy Enforcement"]
    },
    {
      title: "Performance Optimization",
      description: "Ensure optimal firewall performance",
      icon: Monitor,
      features: ["Load Balancing", "Traffic Optimization", "Resource Management"]
    },
    {
      title: "Scalable Solutions",
      description: "Growth-ready firewall infrastructure",
      icon: Rocket,
      features: ["Easy Expansion", "Flexible Deployment", "Future-proof Design"]
    }
  ];

  const statistics = [
    {
      title: "43% of Cyberattacks Target SMBs",
      description: "Enterprise-grade protection without the complexity",
      icon: Target,
      color: "text-red-500"
    },
    {
      title: "Ransomware Protection",
      description: "$200,000 average cost per ransomware incident for SMBs",
      icon: DollarSign,
      color: "text-amber-500"
    },
    {
      title: "Hybrid Work Security",
      description: "Secure connections for remote workforce",
      icon: Home,
      color: "text-indigo-500"
    }
  ];

  const features = [
    {
      title: "Expert Implementation",
      description: "Years of experience deploying FortiGate solutions",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      title: "Complete Support",
      description: "End-to-end management of your firewall infrastructure",
      icon: Cog,
      color: "text-green-500"
    },
    {
      title: "24/7 Assistance",
      description: "Round-the-clock support from our security experts",
      icon: Users,
      color: "text-purple-500"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/firewall-vectors.webp"
          alt="Firewall Services"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Firewall Services (FortiGate)</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Enterprise-Grade Network Protection for Your Business
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose FortiGate?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Your network is the backbone of your business. Our FortiGate Firewall
              Services provide comprehensive protection against advanced threats,
              ensuring your operations remain secure and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    <CardTitle>{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Firewall Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
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

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Firewalls Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
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

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-none bg-secondary">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-center mb-4">Ready to Secure Your Network?</h3>
              <p className="text-lg text-center text-muted-foreground mb-8">
                Protect your business with enterprise-grade FortiGate firewall solutions.
                Get started today and ensure your network is secure against modern threats.
              </p>
              <div className="flex justify-center">
                <Link href="/contact-us">
                  <Button size="lg" className="font-semibold">
                    Get Started with FortiGate
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