import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SecurityAssessmentCTA } from "@/components/ui/security-assessment-cta";

export default function ManagedITServicesProvider() {
  const services = [
    {
      title: "24/7 Monitoring and Maintenance",
      description:
        "Proactive support ensures your systems are always up-to-date and running efficiently. By catching issues early, we help you avoid costly downtime.",
      icon: "🔄",
    },
    {
      title: "Data Security",
      description:
        "Protect your sensitive business information from ransomware, phishing, and other cyber threats with robust security measures.",
      icon: "🔒",
    },
    {
      title: "Remote Access Solutions",
      description:
        "Enable secure and efficient remote work, ensuring your team can stay productive from anywhere.",
      icon: "🌐",
    },
    {
      title: "Scalability",
      description:
        "Whether you're a team of five or fifty, our solutions grow with your business, adapting to your evolving needs.",
      icon: "📈",
    },
  ];

  const features = [
    {
      title: "Transparent Pricing",
      description: "No hidden fees—just straightforward, affordable solutions.",
    },
    {
      title: "Local Expertise",
      description:
        "We understand the unique challenges of small and medium businesses in the region.",
    },
    {
      title: "Real Support",
      description:
        "When you call us, you'll speak with a real person who knows your business and its needs.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Managed IT Services Provider (MSP)</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Your IT Partner for Seamless Operations
        </p>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/group-graphic-designers-interacting-with-each-other.webp"
            alt="Group of graphic designers interacting with each other"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Keeping your IT systems running smoothly is critical for the success of your
          business, but it shouldn&apos;t be your responsibility. Our Managed IT Services
          ensure your technology is reliable, secure, and optimized, so you can focus on
          growing your business.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
        <Card className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Evaluate Your IT Security</h3>
              <p className="mb-6">
                Not sure about your current security posture? Take our comprehensive security assessment.
              </p>
              <SecurityAssessmentCTA />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Managed IT Services Matter
        </h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg text-muted-foreground">
              Businesses using managed IT services experience an average 30% reduction in
              security incidents and 20% savings on IT costs.
            </p>
            <p className="text-lg text-muted-foreground">
              Proactive monitoring minimizes disruptions, saving time and money while
              ensuring optimal performance.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
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
              Let us handle your IT challenges while you focus on driving success. With our
              managed services, you&apos;ll enjoy peace of mind knowing your technology is in
              expert hands.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 