import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Award } from 'lucide-react';
import { EnhancedHeroSection } from '@/components/EnhancedHeroSection';
import { MobileOptimizedServiceShowcase } from '@/components/MobileOptimizedServiceShowcase';
import { AnimatedTestimonials } from '@/components/AnimatedTestimonials';
import { BlogsSection } from '@/components/blogs-section';
import { SocialProofSection } from '@/components/SocialProofSection';
import { StructuredData } from '@/components/StructuredData';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Expert IT Support & Managed Services Perth | Cybersecurity | 24/7 Support',
  description: 'Perth\'s trusted IT experts serving 250+ businesses. Expert IT support, managed services, cybersecurity & cloud solutions. 20+ years experience. Call (08) 9325 1196 for free consultation.',
  keywords: 'expert IT support Perth, managed IT services Perth, IT experts Perth, cybersecurity Perth, cloud services Perth, computer support Perth, network support Perth, Microsoft 365 Perth, IT consultants Perth',
  openGraph: {
    title: 'Expert IT Support & Managed Services Perth | Cybersecurity | 24/7 Support',
    description: 'Perth\'s trusted IT experts serving 250+ businesses. Expert IT support, managed services, cybersecurity & cloud solutions.',
    type: 'website',
    locale: 'en_AU',
    url: siteConfig.url,
    siteName: 'IT Support Perth',
    images: [
      {
        url: '/images/landing.webp',
        width: 1200,
        height: 630,
        alt: 'IT Support Perth - Professional IT Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Support Perth | Proactive IT Services & Cybersecurity',
    description: 'Trusted by 250+ Perth businesses. 24/7 support, no lock-in contracts.',
    images: ['/images/landing.webp'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {

  return (
    <div>
      <StructuredData type="organization" />
      <EnhancedHeroSection />
      <MobileOptimizedServiceShowcase />
      
      {/* Social Proof Section */}
      <SocialProofSection variant="stats" />
      
      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Proactive IT Support Across Perth & WA
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              20+ years of serving Perth businesses with reliable, proactive IT support that keeps you running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-[#3c91e6]">Why Choose Us?</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#3c91e6] mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <strong>Proactive Approach:</strong> We prevent problems before they impact your business
                    </p>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#3c91e6] mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <strong>Quick Response:</strong> Fast turnarounds and efficient problem-solving
                    </p>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#3c91e6] mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <strong>Flexible Service:</strong> No lock-in contracts, month-to-month flexibility
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">Service Areas</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  We provide comprehensive IT support across Perth metropolitan region and throughout Western Australia:
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                  <div>• Perth CBD</div>
                  <div>• Fremantle</div>
                  <div>• Joondalup</div>
                  <div>• Rockingham</div>
                  <div>• Midland</div>
                  <div>• Armadale</div>
                  <div>• Mandurah</div>
                  <div>• Regional WA</div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
                  Remote support available statewide
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 lg:mb-8">
              Ready to experience proactive IT support?
            </p>
            <Button asChild size="lg" className="bg-[#3c91e6] hover:bg-[#2a7bc4] min-h-[48px] sm:min-h-[56px] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <Link href="/contact-us">Get Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <SocialProofSection variant="testimonials" />
      <BlogsSection />

      {/* Trust & Certifications Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-foreground">
              Trusted Technology Partners
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              We partner with industry leaders to deliver enterprise-grade IT solutions to Perth businesses
            </p>
          </div>

          {/* Trust badges row */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 flex-wrap px-2">
            <div className="flex items-center gap-2 bg-white dark:bg-background rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-md">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              <span className="font-semibold text-xs sm:text-sm">Microsoft Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-background rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-md">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#3c91e6]" />
              <span className="font-semibold text-xs sm:text-sm">Cybersecurity Experts</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-background rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-md">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              <span className="font-semibold text-xs sm:text-sm">Perth Local Business</span>
            </div>
          </div>

          {/* Partners grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center max-w-6xl mx-auto px-2">
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
                className="relative group w-full max-w-[100px] sm:max-w-[120px]"
              >
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-[#3c91e6]/20 to-[#01042b]/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white dark:bg-background rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="w-full h-8 sm:h-10 lg:h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional trust indicators */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="inline-flex items-center gap-3 sm:gap-4 lg:gap-6 bg-gradient-to-r from-[#3c91e6]/5 to-[#01042b]/5 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-full overflow-x-auto">
              <div className="text-center flex-shrink-0">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Perth Based</p>
              </div>
              <div className="w-px h-6 sm:h-8 bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
              <div className="text-center flex-shrink-0">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">24/7</p>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Support</p>
              </div>
              <div className="w-px h-6 sm:h-8 bg-gray-300 dark:bg-gray-600 flex-shrink-0"></div>
              <div className="text-center flex-shrink-0">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">1 Month</p>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Notice Period</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
