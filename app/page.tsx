import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Award } from 'lucide-react';
import { AnimatedHero } from '@/components/AnimatedHero';
import { AnimatedServices } from '@/components/AnimatedServices';
import { AnimatedTestimonials } from '@/components/AnimatedTestimonials';
import { BlogsSection } from '@/components/blogs-section';

export default function Home() {

  return (
    <div>
      <AnimatedHero />
      <AnimatedServices />
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proactive IT Support Across Perth & WA
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              20+ years of serving Perth businesses with reliable, proactive IT support that keeps you running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#3c91e6]">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3c91e6] mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Proactive Approach:</strong> We prevent problems before they impact your business
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3c91e6] mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Quick Response:</strong> Fast turnarounds and efficient problem-solving
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3c91e6] mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Flexible Service:</strong> No lock-in contracts, month-to-month flexibility
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#01042b]">Service Areas</h3>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive IT support across Perth metropolitan region and throughout Western Australia:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Perth CBD</div>
                  <div>• Fremantle</div>
                  <div>• Joondalup</div>
                  <div>• Rockingham</div>
                  <div>• Midland</div>
                  <div>• Armadale</div>
                  <div>• Mandurah</div>
                  <div>• Regional WA</div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Remote support available statewide
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to experience proactive IT support?
            </p>
            <Button asChild size="lg" className="bg-[#3c91e6] hover:bg-[#2a7bc4]">
              <Link href="/contact-us">Get Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedTestimonials />
      <BlogsSection />

      {/* Trust & Certifications Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#01042b] to-[#3c91e6] bg-clip-text text-transparent">
              Trusted Technology Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We partner with industry leaders to deliver enterprise-grade IT solutions to Perth businesses
            </p>
          </div>

          {/* Trust badges row */}
          <div className="flex justify-center items-center gap-8 mb-16 flex-wrap">
            <div className="flex items-center gap-2 bg-white dark:bg-background rounded-lg px-4 py-3 shadow-md">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-sm">Microsoft Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-background rounded-lg px-4 py-3 shadow-md">
              <Shield className="w-5 h-5 text-[#3c91e6]" />
              <span className="font-semibold text-sm">Cybersecurity Experts</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-background rounded-lg px-4 py-3 shadow-md">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-sm">Perth Local Business</span>
            </div>
          </div>

          {/* Partners grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center max-w-6xl mx-auto">
            {[
              { src: "/images/partners/microsoft-partner.png", alt: "Microsoft Partner" },
              { src: "/images/partners/synnex.svg", alt: "Synnex" },
              { src: "/images/partners/leader.png", alt: "Leader Computer" },
              { src: "/images/partners/veeam.svg", alt: "Veeam" },
              { src: "/images/partners/ingram-micro.svg", alt: "Ingram Micro" },
              { src: "/images/partners/acronis.svg", alt: "Acronis" },
              { src: "/images/partners/webroot.svg", alt: "Webroot" }
            ].map((partner, index) => (
              <div 
                key={index}
                className="relative group w-full max-w-[120px]"
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-[#3c91e6]/20 to-[#01042b]/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white dark:bg-background rounded-lg p-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="w-full h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional trust indicators */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-[#3c91e6]/5 to-[#01042b]/5 rounded-2xl px-8 py-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#3c91e6]">100%</p>
                <p className="text-sm text-muted-foreground">Perth Based</p>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#01042b]">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#3c91e6]">1 Month</p>
                <p className="text-sm text-muted-foreground">Notice Period</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
