import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function SecurityAdvicePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-16">
        {/* CTA Section */}
        <Card className="mb-16 bg-secondary">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-4">
                    Congrats on taking an action
                  </h1>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg">
                    People generally avoid thinking about IT security. But your first actions cost nothing and are quick and easy.
                  </p>
                  <p className="text-lg">
                  Who are the people that take action? We’ve learned they’re the people who make a phone call.
                  </p>
                  <p className="text-lg font-medium">
                  We do our best to be jargon-free. Try Amir on <a href="tel:0893251196" className="text-primary hover:underline">9325 1196</a> and mention the Sitting Duck ad.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 pt-6">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Call: (08) 9325 1196
                  </Button>
                  <Button variant="outline" size="lg">
                    Email: support@computermechanics.com.au
                  </Button>
                </div>
              </div>

              <div className="relative w-64 h-64 flex-shrink-0">
                <Image
                  src="/sitting_duck.webp"
                  alt="Don't be a sitting duck - secure your IT today"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            "Network Security Assessment",
            "Malware Protection Review",
            "Data Backup Strategies",
            "Security Best Practices",
            "Ransomware Prevention",
            "System Vulnerability Check",
          ].map((benefit, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {benefit}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Card>
            <CardContent className="p-6">
              <CardTitle className="text-2xl mb-2">4.7 ★</CardTitle>
              <CardDescription>250+ Google Reviews</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <CardTitle className="text-2xl mb-2">Perth Based</CardTitle>
              <CardDescription>75B Brewer St, Perth</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
