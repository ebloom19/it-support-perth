import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SecurityAssessmentCTA } from "@/components/ui/security-assessment-cta";

export default function CloudServices() {
  const cloudBenefits = [
    {
      title: "Enhanced Collaboration",
      description:
        "Platforms like Microsoft 365 (M365) and SharePoint allow your team to work together in real time, from anywhere. Businesses using cloud solutions report a 20% increase in productivity on average.",
      icon: "👥",
    },
    {
      title: "Cost Savings",
      description:
        "Eliminate the expense of maintaining on-premises servers. With pay-as-you-go pricing, you only pay for the resources you use.",
      icon: "💰",
    },
    {
      title: "Automatic Updates",
      description:
        "Stay ahead with the latest features and security patches without manual upgrades.",
      icon: "🔄",
    },
  ];

  const migrationSteps = [
    {
      title: "Assessment",
      description: "We evaluate your current IT infrastructure and recommend the best cloud solutions.",
    },
    {
      title: "Data Migration",
      description: "Securely transfer files and systems to the cloud without downtime.",
    },
    {
      title: "User Training",
      description: "Equip your team to make the most of new tools and features.",
    },
  ];

  const features = [
    {
      title: "Tailored Solutions",
      description: "We create cloud strategies based on your unique needs.",
    },
    {
      title: "Expert Support",
      description: "Our team is available every step of the way, from setup to ongoing maintenance.",
    },
    {
      title: "Proven Results",
      description: "We've helped countless businesses transition to the cloud seamlessly and efficiently.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/saas-concept-collage.webp"
          alt="SaaS concept collage"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Secure, Scalable Cloud Solutions Tailored for Your Business
          </p>
        </div>
      </div>

      {/* Intro Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="concept1" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="concept1">Overview</TabsTrigger>
              <TabsTrigger value="concept2">Hosting</TabsTrigger>
              <TabsTrigger value="concept3">Solutions</TabsTrigger>
            </TabsList>
            <TabsContent value="concept1">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/saas-concept-collage.webp"
                  alt="SaaS concept collage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </TabsContent>
            <TabsContent value="concept2">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/website-hosting-concept-with-cloud.webp"
                  alt="Website hosting concept with cloud"
                  fill
                  className="object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="concept3">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/benefits-of-cloud.png"
                  alt="SaaS concept collage alternative view"
                  fill
                />
              </div>
            </TabsContent>
          </Tabs>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-center">
            Cloud technology offers unparalleled flexibility, collaboration, and
            security for businesses. Our Cloud Services make transitioning to the
            cloud simple and efficient, empowering small and medium businesses to
            work smarter, not harder.
          </p>
        </div>
      </section>

      {/* Benefits Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Cloud?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cloudBenefits.map((benefit, index) => (
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
        </div>
      </section>

      {/* Migration Steps Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cloud Migration Assistance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl text-primary">{index + 1}</span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Assessment Section - Secondary */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Cloud Security Assessment</h3>
                <p className="mb-6">
                  Moving to the cloud? Ensure your migration is secure with our free security assessment.
                </p>
                <SecurityAssessmentCTA />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section - Light */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <Accordion type="single" collapsible className="max-w-3xl px-4 mx-auto bg-secondary rounded-lg">
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
                Embrace the future with secure, flexible cloud solutions designed for
                your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 