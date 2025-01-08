import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BackupAndDisasterRecovery() {
  const statistics = [
    {
      title: "94% of Businesses",
      description:
        "Companies that experience major data loss often don't survive beyond two years.",
      icon: "📊",
    },
    {
      title: "Rising Cyber Threats",
      description:
        "Small businesses are increasingly targeted by ransomware, with the average cost of a cyberattack reaching $200,000 per incident.",
      icon: "⚠️",
    },
  ];

  const services = [
    {
      title: "Automatic Backups",
      description:
        "Your data is backed up regularly to secure locations, including on-premises servers and cloud platforms like Azure and OneDrive.",
      icon: "🔄",
    },
    {
      title: "Fast Disaster Recovery",
      description:
        "Restore systems quickly to minimize downtime and ensure continuity.",
      icon: "⚡",
    },
    {
      title: "Customized Recovery Plans",
      description:
        "We develop recovery strategies tailored to your specific business needs, ensuring minimal disruption during a crisis.",
      icon: "📋",
    },
    {
      title: "Proactive Monitoring",
      description:
        "Identify potential risks before they impact your data with our advanced monitoring systems.",
      icon: "👁️",
    },
    {
      title: "Testing and Updates",
      description:
        "Regularly test and update your recovery plans to ensure they work when needed.",
      icon: "✅",
    },
  ];

  const features = [
    {
      title: "Tailored Solutions",
      description:
        "From small businesses to larger enterprises, we adapt our backup and recovery strategies to meet your unique requirements.",
    },
    {
      title: "Cost-Effective Protection",
      description: "Avoid the high costs of downtime with affordable, proactive solutions.",
    },
    {
      title: "Expert Support",
      description:
        "Our team handles every aspect, from setup to recovery, so you can focus on running your business.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Backup & Disaster Recovery Solutions</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Be Prepared for Anything with Reliable Data Protection
        </p>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/cloud-backup-download-network.webp"
            alt="Cloud Backup Download Network"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Data loss can strike at any time—whether due to cyberattacks, hardware
          failure, or human error. Without a solid backup and disaster recovery
          plan, the consequences can be devastating. Our Backup & Disaster Recovery
          Solutions ensure your business stays protected and operational, no matter
          what happens.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Backup & Recovery Matter
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            <h3 className="text-xl font-semibold mb-4">Protect Your Business Today</h3>
            <p className="text-lg">
              Don&apos;t wait for a disaster to strike. With our backup and disaster
              recovery services, you can operate with confidence knowing your data
              is safe and recoverable. Let&apos;s ensure your business is prepared
              for anything.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 