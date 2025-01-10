import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Server, 
  Shield, 
  Users, 
  Clock, 
  ArrowUpDown,
  Laptop,
  Database,
  Coins
} from "lucide-react";

export default function CloudServices() {
  const cloudBenefits = [
    {
      title: "Scalability",
      description: "Scale your IT infrastructure up or down based on demand",
      icon: ArrowUpDown,
      color: "text-blue-500"
    },
    {
      title: "Cost-Effective",
      description: "Pay only for what you use with no upfront infrastructure costs",
      icon: Coins,
      color: "text-green-500"
    },
    {
      title: "Reliability",
      description: "99.9% uptime with automatic failover and redundancy",
      icon: Clock,
      color: "text-purple-500"
    },
    {
      title: "Security",
      description: "Enterprise-grade security with regular updates and monitoring",
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "Collaboration",
      description: "Enable seamless teamwork with anywhere, anytime access",
      icon: Users,
      color: "text-orange-500"
    },
    {
      title: "Flexibility",
      description: "Access your data and applications from any device",
      icon: Laptop,
      color: "text-indigo-500"
    }
  ];

  const cloudSolutions = [
    {
      title: "Microsoft 365",
      description: "Complete cloud productivity suite with Teams, Exchange, and SharePoint",
      features: ["Email", "Collaboration", "File Storage", "Video Conferencing"]
    },
    {
      title: "Azure Cloud",
      description: "Enterprise-grade cloud infrastructure and platform services",
      features: ["Virtual Machines", "Backup", "Disaster Recovery", "Web Hosting"]
    },
    {
      title: "Cloud Storage",
      description: "Secure and scalable storage solutions for your business data",
      features: ["File Sharing", "Backup", "Sync", "Version Control"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/saas-concept-collage.webp"
          alt="Cloud Services"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your business with secure and scalable cloud solutions
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Move to the Cloud?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Cloud technology offers unparalleled flexibility, collaboration, and
              security for businesses. Our Cloud Services make transitioning to the
              cloud simple and efficient, empowering small and medium businesses to
              work smarter, not harder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {cloudBenefits.map((benefit, index) => (
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

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Cloud Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">{solution.title}</CardTitle>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, fIndex) => (
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

      {/* Rest of your sections... */}
    </div>
  );
} 