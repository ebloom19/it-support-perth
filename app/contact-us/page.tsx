import { EnhancedContactPage } from '@/components/EnhancedContactPage';
import { StructuredData } from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact IT Support Perth | Free Consultation & Emergency Support',
  description: 'Get expert IT help right now! Same-day response, free consultation, 24/7 emergency support. Call (08) 9325 1196 or get your free quote online.',
  keywords: 'IT support Perth contact, emergency IT support, free IT consultation Perth, Perth IT services contact',
  openGraph: {
    title: 'Contact IT Support Perth | Free Consultation & Emergency Support',
    description: 'Get expert IT help right now! Same-day response, free consultation, 24/7 emergency support.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: 'https://www.itsupportperth.net.au/contact-us',
  }
};

export default function ContactUsPage() {
  return (
    <>
      <StructuredData type="contactPage" />
      <EnhancedContactPage />
    </>
  );
}