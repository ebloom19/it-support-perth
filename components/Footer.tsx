'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, FileText } from 'lucide-react';
import { CustomBlogOrSeoBot, getTitle } from '@/lib/seobot.helpers';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services & Solutions', path: '/services-and-solutions' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact Us', path: '/contact-us' },
];

const services = [
  { name: 'Managed IT Services', path: '/services-and-solutions/managed-it-services-provider' },
  { name: 'IT Security', path: '/services-and-solutions/it-security-solutions' },
  { name: 'Cloud Services', path: '/services-and-solutions/cloud-services' },
  { name: 'Backup & Recovery', path: '/services-and-solutions/backup-and-disaster-recovery-solutions' },
  { name: 'Email Protection', path: '/services-and-solutions/email-protection-service' },
  { name: 'Firewall Services', path: '/services-and-solutions/firewall-service' },
  { name: 'IT Consulting', path: '/services-and-solutions/it-consulting' },
  { name: 'On-Premises Servers', path: '/services-and-solutions/on-premises-server-management' },
  { name: 'AI-Enhanced Support', path: '/services-and-solutions/ai-enhanced-it-support' },
];

const linkClass =
  'text-sm text-white/75 hover:text-[#3c91e6] transition-colors duration-200';

const headingClass =
  'text-xs font-semibold uppercase tracking-wider text-white/90 mb-4';

export default function Footer({ posts }: { posts: CustomBlogOrSeoBot[] }) {
  const displayPosts = posts.slice(0, 4);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f2e] dark:bg-[#0a0f2e] text-white border-t border-white/10">
      {/* Main footer grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <Link href="/" className="inline-block">
                <span className="text-xl font-bold text-white">IT Support Perth</span>
              </Link>
              <p className="mt-3 text-sm text-white/70 max-w-[260px] leading-relaxed">
                Proactive IT support and managed services for Perth small and medium businesses. 20+ years trusted by 250+ local businesses.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="tel:0894638600"
                className="flex items-center gap-3 text-sm text-white/90 hover:text-[#3c91e6] transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                08 9463 8600
              </a>
              <a
                href="mailto:info@itsupportperth.net.au"
                className="flex items-center gap-3 text-sm text-white/90 hover:text-[#3c91e6] transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                info@itsupportperth.net.au
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
                <span>75B Brewer Street, Perth WA 6000</span>
              </div>
            </div>
            <Button
              asChild
              size="sm"
              className="bg-[#3c91e6] hover:bg-[#2a7bc4] text-white mt-2"
            >
              <Link href="/contact-us" className="gap-2">
                Free consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={headingClass}>Quick links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={headingClass}>Services & solutions</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.path}>
                  <Link href={service.path} className={linkClass}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className={headingClass}>From the blog</h3>
            {displayPosts.length > 0 ? (
              <ul className="space-y-2.5">
                {displayPosts.map((post) => (
                  <li key={post.slugAsParams}>
                    <Link
                      href={`/blog/${post.slugAsParams}`}
                      className={`${linkClass} line-clamp-2`}
                    >
                      {getTitle(post)}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm text-[#3c91e6] hover:underline font-medium mt-1"
                  >
                    <FileText className="h-4 w-4" />
                    View all articles
                  </Link>
                </li>
              </ul>
            ) : (
              <Link href="/blog" className={linkClass}>
                Visit our blog
              </Link>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-4">
            Our location
          </h3>
          <div className="rounded-xl overflow-hidden border border-white/10 h-56 sm:h-64 lg:h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4562893188!2d115.86185731532598!3d-31.94945798122047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5f8a2c9f7%3A0x5e9b5e4cee2f0f0!2s75B%20Brewer%20St%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              title="IT Support Perth – 75B Brewer Street, Perth"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-white/60">
              © {year} IT Support Perth. Managed IT support for small and medium businesses across Perth & WA.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span>24/7 support</span>
              <span aria-hidden>·</span>
              <span>Perth-based</span>
              <span aria-hidden>·</span>
              <span>No lock-in contracts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
