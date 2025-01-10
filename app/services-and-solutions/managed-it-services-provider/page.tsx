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
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/group-graphic-designers-interacting-with-each-other.webp"
          alt="Group of graphic designers interacting with each other"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed IT Services Provider (MSP)</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your IT Partner for Seamless Operations
          </p>
        </div>
      </div>

      {/* Intro Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            Keeping your IT systems running smoothly is critical for the success of your
            business, but it shouldn&apos;t be your responsibility. Our Managed IT Services
            ensure your technology is reliable, secure, and optimized, so you can focus on
            growing your business.
          </p>
        </div>
      </section>

      {/* Services Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Security Assessment Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Benefits Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Features Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <Accordion type="single" collapsible className="max-w-3xl bg-secondary px-4 mx-auto">
            {features.map((feature, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{feature.title}</AccordionTrigger>
                <AccordionContent>{feature.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-none">
            <CardContent className="pt-6">
              <p className="text-lg text-center">
                Let us handle your IT challenges while you focus on driving success. With our
                managed services, you&apos;ll enjoy peace of mind knowing your technology is in
                expert hands.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 