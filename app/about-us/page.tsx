import { EnhancedAboutPage } from '@/components/EnhancedAboutPage';
import { StructuredData } from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About IT Support Perth | 25+ Years Serving Perth Businesses',
  description: 'Meet the IT Support Perth team. Since 1997, we\'ve been Perth\'s trusted technology partner, serving 500+ businesses with expert IT solutions and personal service.',
  keywords: 'About IT Support Perth, Perth IT Company, IT Team Perth, Technology Experts, Computer Support Perth',
  openGraph: {
    title: 'About IT Support Perth | 25+ Years Serving Perth Businesses',
    description: 'Meet our experienced team and learn why Perth businesses trust us with their technology since 1997.',
    url: 'https://itsupportperth.com.au/about-us',
    siteName: 'IT Support Perth',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About IT Support Perth | 25+ Years Experience',
    description: 'Meet our experienced team and learn why Perth businesses trust us with their technology.',
  },
  alternates: {
    canonical: 'https://www.itsupportperth.net.au/about-us',
  }
};

export default function AboutUsPage() {
  return (
    <>
      <StructuredData 
        type="organization" 
        serviceData={{
          name: "About IT Support Perth",
          description: "Learn about Perth's trusted IT support team with 25+ years experience serving local businesses",
          url: "https://itsupportperth.com.au/about-us"
        }}
      />
      <EnhancedAboutPage />
    </>
  );
}