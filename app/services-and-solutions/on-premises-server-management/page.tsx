import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OnPremisesServerManagement() {
  const benefits = [
    {
      title: "Compliance and Security",
      description:
        "Industries like healthcare, legal, and finance often require on-premises servers to meet strict data protection regulations.",
      icon: "🔒",
    },
    {
      title: "Customizability",
      description:
        "On-prem servers allow complete control over configurations, ensuring they meet the unique demands of your business.",
      icon: "⚙️",
    },
    {
      title: "Reliable Performance",
      description:
        "On-prem solutions reduce reliance on external factors, such as internet speeds, making them ideal for resource-intensive applications.",
      icon: "⚡",
    },
  ];

  const services = [
    {
      title: "Proactive Monitoring",
      description:
        "We monitor your servers 24/7 to detect and resolve issues before they affect your operations.",
      icon: "👁️",
    },
    {
      title: "Regular Maintenance",
      description:
        "Avoid downtime with regular patching, updates, and performance optimization.",
      icon: "🔧",
    },
    {
      title: "Data Backup and Recovery",
      description:
        "Ensure quick recovery from hardware failures or accidental deletions with integrated on-premises backup solutions.",
      icon: "💾",
    },
    {
      title: "Advanced Security",
      description:
        "Protect your servers with robust firewalls, intrusion detection, and antivirus solutions.",
      icon: "🛡️",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "We assist with upgrades and expansions, ensuring your servers grow with your business needs.",
      icon: "📈",
    },
  ];

  const features = [
    {
      title: "Local Expertise",
      description:
        "With more than 15 years of experience supporting businesses in the region, we provide solutions tailored to your industry.",
    },
    {
      title: "End-to-End Support",
      description:
        "From initial setup to ongoing management, we handle every aspect of your on-prem environment.",
    },
    {
      title: "Hybrid Solutions Available",
      description:
        "Interested in combining on-prem reliability with cloud scalability? We design hybrid systems that offer the best of both worlds.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">On-Premises Server Management</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Still Using On-Premises Servers? We&apos;ve Got You Covered.
        </p>

        <Tabs defaultValue="service" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="service">Service</TabsTrigger>
            <TabsTrigger value="server">Server Room</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>
          <TabsContent value="service">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/young-it-service-man-repairing-computer.webp"
                alt="IT service technician repairing computer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </TabsContent>
          <TabsContent value="server">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/young-engineer-in-server-room.webp"
                alt="Engineer working in server room"
                fill
                className="object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent value="maintenance">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/young-engineer-writing-in-clipboard-medium-shot.webp"
                alt="Engineer performing maintenance checks"
                fill
                className="object-cover"
              />
            </div>
          </TabsContent>
        </Tabs>

        <p className="max-w-3xl text-lg text-muted-foreground">
          On-premises servers are still a vital component for many businesses,
          offering unmatched control and reliability for critical operations.
          However, maintaining and securing these systems can be complex.
          That&apos;s where we come in. Our On-Premises Server Management Services
          ensure your servers run smoothly, securely, and efficiently, allowing you
          to focus on what matters—your business.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why On-Premises Servers Still Matter
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
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
          Our Comprehensive Services
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
            <p className="text-lg">
              Whether you&apos;re sticking with on-prem or considering a hybrid
              approach, our team has the expertise to keep your systems secure and
              optimized. Let us handle your servers so you can focus on growing
              your business.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 