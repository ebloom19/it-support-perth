import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ITConsulting() {
  const coreServices = [
    {
      title: "Strategic IT Planning",
      description:
        "We evaluate your current systems and develop a tailored roadmap to enhance productivity, security, and scalability.",
      icon: "📋",
    },
    {
      title: "Cloud and Security Consulting",
      description:
        "Considering a move to the cloud? Worried about data security? We'll guide you through the best options for your business.",
      icon: "☁️",
    },
    {
      title: "Simplified Solutions",
      description:
        "We explain IT in plain terms, empowering you to make confident, informed decisions without jargon.",
      icon: "🎯",
    },
  ];

  const benefits = [
    {
      title: "Cost Optimization",
      description:
        "Avoid overspending on unnecessary tools and software by choosing solutions that truly fit your needs.",
    },
    {
      title: "Future-Proofing",
      description:
        "Stay ahead of technological advancements with systems that grow alongside your business.",
    },
    {
      title: "Custom Strategies",
      description:
        "Every business is unique. We design solutions tailored to your specific challenges, ensuring maximum impact.",
    },
  ];

  const features = [
    {
      title: "Personalized Approach",
      description: "We focus on understanding your business, goals, and challenges.",
    },
    {
      title: "Local Expertise",
      description: "Our team has extensive experience supporting businesses in the region.",
    },
    {
      title: "Affordable and Effective",
      description:
        "We deliver high-quality consulting at a cost that works for small and medium businesses.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">IT Consulting</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Strategic IT Guidance for Small and Medium Businesses
        </p>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/close-up-smiling-person-conference-room.webp"
            alt="Close up on smiling person in conference room"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Navigating the fast-paced world of technology can be overwhelming,
          especially for small and medium businesses. Our IT Consulting Services
          provide the expertise you need to align your IT infrastructure with your
          business goals, ensuring long-term success.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
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
          How IT Consulting Helps Your Business
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
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
              Simplify your IT and focus on your core objectives with the right
              technology strategy. Let us guide you to smarter decisions and better
              outcomes.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 