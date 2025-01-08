import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AIEnhancedITSupport() {
  const benefits = [
    {
      title: "Proactive Issue Detection",
      description:
        "AI tools monitor your systems 24/7, identifying and resolving potential issues before they escalate. Businesses using proactive IT support report up to a 50% reduction in downtime, saving hours of productivity and thousands of dollars annually.",
      icon: "🔍",
    },
    {
      title: "Increased Efficiency",
      description:
        "AI takes care of routine tasks like system updates, email management, and troubleshooting. Tools like Copilot can handle these tasks effortlessly, giving your team more time to focus on core projects.",
      icon: "⚡",
    },
    {
      title: "Advanced Cybersecurity",
      description:
        "With small businesses being the target of 43% of cyberattacks, our AI systems detect and neutralize malware, phishing attempts, and unauthorized access in real time, providing an essential layer of protection.",
      icon: "🛡️",
    },
  ];

  const features = [
    {
      title: "Tailored Solutions",
      description:
        "We customize AI tools to match your specific needs and industry requirements.",
    },
    {
      title: "Human Support Always Available",
      description:
        "AI doesn't replace people—it works alongside our skilled team to enhance efficiency.",
    },
    {
      title: "Affordable Plans",
      description:
        "Designed for small and medium businesses, our services deliver maximum value without stretching your budget.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">AI-Enhanced IT Support</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Revolutionize Your IT with AI-Powered Solutions
        </p>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/person-working-html-computer.webp"
            alt="Person working on computer"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Managing IT can be a challenge for small and medium businesses, but it
          doesn&apos;t have to be. Our AI-Enhanced IT Support brings cutting-edge
          automation to your systems, saving you time, reducing costs, and
          improving security.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why AI-Enhanced IT Support?
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
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              Our AI tools integrate seamlessly into your existing
              infrastructure. They handle routine tasks and monitor for risks,
              while our human experts step in for complex issues that require a
              personal touch. This combination of automation and hands-on
              expertise ensures a seamless experience.
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
    </div>
  );
}
