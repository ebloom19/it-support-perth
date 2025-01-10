import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Settings, 
  Zap, 
  Eye, 
  Wrench, 
  HardDrive,
  Lock,
  LineChart,
  Server,
  Network,
  Clock,
  Users
} from "lucide-react";

export default function OnPremisesServerManagement() {
  const benefits = [
    {
      title: "Compliance and Security",
      description: "Meet strict data protection regulations for healthcare, legal, and finance industries",
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "Customizability",
      description: "Complete control over configurations to meet your unique business demands",
      icon: Settings,
      color: "text-blue-500"
    },
    {
      title: "Reliable Performance",
      description: "Reduced reliance on external factors for resource-intensive applications",
      icon: Zap,
      color: "text-amber-500"
    },
    {
      title: "Data Control",
      description: "Keep sensitive data within your physical infrastructure",
      icon: Lock,
      color: "text-green-500"
    },
    {
      title: "Network Performance",
      description: "Optimized local network speeds and reduced latency",
      icon: Network,
      color: "text-purple-500"
    },
    {
      title: "Resource Management",
      description: "Direct control over hardware resources and allocation",
      icon: Server,
      color: "text-indigo-500"
    }
  ];

  const services = [
    {
      title: "Proactive Monitoring",
      description: "24/7 server monitoring to detect and resolve issues before they affect operations",
      icon: Eye,
      features: ["Real-time Alerts", "Performance Tracking", "Issue Prevention"]
    },
    {
      title: "Regular Maintenance",
      description: "Scheduled maintenance to prevent downtime and optimize performance",
      icon: Wrench,
      features: ["Updates", "Patching", "Optimization"]
    },
    {
      title: "Data Management",
      description: "Comprehensive data backup and recovery solutions",
      icon: HardDrive,
      features: ["Backup", "Recovery", "Storage Management"]
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and improvement of server performance",
      icon: LineChart,
      features: ["Resource Optimization", "Load Balancing", "Capacity Planning"]
    },
    {
      title: "Support Services",
      description: "Round-the-clock technical support and assistance",
      icon: Users,
      features: ["24/7 Support", "Remote Assistance", "On-site Support"]
    },
    {
      title: "Scheduled Maintenance",
      description: "Regular maintenance windows to ensure system reliability",
      icon: Clock,
      features: ["Planned Updates", "Security Patches", "Health Checks"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/young-it-service-man-repairing-computer.webp"
          alt="IT service technician repairing computer"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">On-Premises Server Management</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert Management of Your On-Site Infrastructure
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why On-Premises Servers?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              On-premises servers remain vital for businesses requiring maximum control,
              security, and performance. Our management services ensure your infrastructure
              runs at peak efficiency while meeting compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Management Services</h2>
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-none bg-secondary">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-center mb-4">Ready to Optimize Your Infrastructure?</h3>
              <p className="text-lg text-center text-muted-foreground">
                Whether you're maintaining existing servers or planning new deployments,
                our team has the expertise to ensure your infrastructure performs at its best.
                Let us handle the complexity while you focus on your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 