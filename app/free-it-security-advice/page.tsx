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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Stop Being a Sitting Duck!
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Get Your Free IT Security Assessment Today
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
          >
            Call (08) 9325 1196 Now
          </Button>
        </div>

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
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  {benefit}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800/50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Take Action Today - It&apos;s Quick & Easy
          </h2>
          <p className="text-slate-300 mb-6">
            Most security improvements cost nothing and are quick to implement.
            Speak with Amir and mention the Take Action Today - It&apos;s Quick
            & Easy Sitting Duck Take Action Today - It&apos;s Quick & Easy ad
            for your free consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Email: support@computermechanics.com.au
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
            >
              Call: (08) 9325 1196
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <CardTitle className="text-2xl mb-2">4.7 ★</CardTitle>
                <CardDescription>250+ Google Reviews</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <CardTitle className="text-2xl mb-2">Perth Based</CardTitle>
                <CardDescription>75B Brewer St, Perth</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
