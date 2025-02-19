'use client';

import Link from 'next/link';
import { CustomBlogOrSeoBot, getTitle } from '@/lib/seobot.helpers';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services and Solutions', path: '/services-and-solutions' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact Us', path: '/contact-us' },
];

const servicesAndSolutions = [
  { 
    name: 'Managed IT Services', 
    path: '/services-and-solutions/managed-it-services-provider' 
  },
  { 
    name: 'IT Security', 
    path: '/services-and-solutions/firewall-service' 
  },
  { 
    name: 'Cloud Services', 
    path: '/services-and-solutions/cloud-services' 
  },
  { 
    name: 'AI-Enhanced Support', 
    path: '/services-and-solutions/ai-enhanced-it-support' 
  },
  { 
    name: 'On-Premises Servers', 
    path: '/services-and-solutions/on-premises-server-management' 
  },
  { 
    name: 'Email Protection', 
    path: '/services-and-solutions/email-protection-service' 
  },
  { 
    name: 'Backup & Recovery', 
    path: '/services-and-solutions/backup-and-disaster-recovery-solutions' 
  },
  { 
    name: 'Remote IT Support', 
    path: '/services-and-solutions/remote-support' 
  },
  { 
    name: 'IT Consulting', 
    path: '/services-and-solutions/it-consulting' 
  }
];

export default function Footer({ posts }: { posts: CustomBlogOrSeoBot[] }) {
  const displayPosts = posts.slice(0, 4);

  return (
    <footer className="bg-secondary p-8 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-foreground gap-6">
          {/* Contact Information */}
          <div className="flex flex-col gap-2 min-w-[200px]">
            <h6 className="text-lg md:text-xl font-semibold mb-2">
              IT Support Perth
            </h6>
            <p>75B Brewer Street</p>
            <p>Perth, 6000</p>
            <p>
              Phone:{' '}
              <a href="tel:0894638600" className="hover:text-gray-900">
                08 9463 8600
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:info@itsupportperth.net.au"
                className="hover:text-gray-900"
              >
                info@itsupportperth.net.au
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h6 className="text-lg md:text-xl font-semibold mb-2">
              Quick Links
            </h6>
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-sm md:text-base hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <Link href="/services-and-solutions">
              <h6 className="text-lg md:text-xl font-semibold mb-2">
                Our Services & Solutions
              </h6>
            </Link>
            {servicesAndSolutions.map((service, index) => (
              <Link
                key={index}
                href={service.path}
                className="text-sm md:text-base hover:underline"
              >
                {service.name}
              </Link>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="flex flex-col gap-2">
            <Link href="/blog">
              <h6 className="text-lg md:text-xl font-semibold mb-2 hover:underline">
                Blog
              </h6>
            </Link>
            {displayPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slugAsParams}`}
                className="text-sm md:text-base hover:underline"
              >
                {getTitle(post)}
              </Link>
            ))}
          </div>

          {/* Map */}
          <div className="flex flex-col gap-2 min-w-[200px]">
            <h6 className="text-lg md:text-xl font-semibold mb-2">
              Our Location
            </h6>
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4562893188!2d115.86185731532598!3d-31.94945798122047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5f8a2c9f7%3A0x5e9b5e4cee2f0f0!2s75B%20Brewer%20St%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                title="IT Support Perth Location"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <hr className="my-6 border-foreground/20" />
        
        <div className="text-center text-foreground">
          <p>
            © 2024 IT Support Perth - Managed IT Support for Small and
            Medium Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
