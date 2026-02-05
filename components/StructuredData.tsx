'use client';

import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

const baseUrl = siteConfig.url;

interface StructuredDataProps {
  type?: 'organization' | 'service' | 'webpage' | 'contactPage';
  serviceData?: {
    name: string;
    description: string;
    url: string;
  };
}

export function StructuredData({ type = 'organization', serviceData }: StructuredDataProps) {
  const pathname = usePathname();

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "IT Support Perth",
    "alternateName": "Computer Mechanics",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "description": "Professional IT support services for Perth businesses. Managed IT services, cybersecurity, cloud solutions, and 24/7 technical support.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Perth",
      "addressRegion": "WA",
      "postalCode": "6000",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-8-9325-1196",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "AU-WA"
    },
    "sameAs": [
      "https://www.facebook.com/computermechanicsperth/"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-31.9505",
        "longitude": "115.8605"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed IT Services",
            "description": "24/7 proactive IT monitoring and support for Perth businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Solutions",
            "description": "Comprehensive IT security and threat protection services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Services",
            "description": "Microsoft 365 and Azure cloud migration and management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backup & Disaster Recovery",
            "description": "Data protection and business continuity solutions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    "name": "IT Support Perth",
    "description": "Professional IT support and managed services for Perth businesses",
    "url": baseUrl,
    "telephone": "+61-8-9325-1196",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Perth",
      "addressRegion": "Western Australia",
      "postalCode": "6000",
      "addressCountry": "Australia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-31.9505",
      "longitude": "115.8605"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "serviceArea": {
      "@type": "City",
      "name": "Perth",
      "sameAs": "https://en.wikipedia.org/wiki/Perth"
    }
  };

  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": "IT Support Perth",
    "description": "Expert IT support, managed services, cybersecurity and cloud solutions for Perth businesses. 24/7 support, 20+ years experience.",
    "url": baseUrl,
    "publisher": { "@id": `${baseUrl}/#organization` },
    "inLanguage": "en-AU",
    "potentialAction": {
      "@type": "SearchAction",
      "target": { "@type": "EntryPoint", "urlTemplate": `${baseUrl}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string"
    }
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": serviceData?.name || "IT Support Perth",
    "description": serviceData?.description || "Professional IT support services for Perth businesses",
    "url": `${baseUrl}${pathname}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "IT Support Perth",
      "url": baseUrl
    },
    "about": {
      "@type": "Organization",
      "name": "IT Support Perth"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "IT Support Perth"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  };

  // Add breadcrumb items based on pathname
  if (pathname !== '/') {
    const pathSegments = pathname.split('/').filter(Boolean);
    pathSegments.forEach((segment, index) => {
      const name = segment.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`
      });
    });
  }

  const contactPageData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact IT Support Perth",
    "description": "Get in touch with Perth's leading IT support team for immediate assistance",
    "url": `${baseUrl}/contact-us`,
    "mainEntity": {
      "@type": "Organization",
      "name": "IT Support Perth",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-8-9325-1196",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  };

  const servicePageData = serviceData ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "url": serviceData.url,
    "provider": {
      "@type": "Organization",
      "name": "IT Support Perth",
      "url": baseUrl
    },
    "areaServed": {
      "@type": "City",
      "name": "Perth",
      "sameAs": "https://en.wikipedia.org/wiki/Perth"
    },
    "serviceType": "IT Support",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceData.name,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceData.name,
            "description": serviceData.description
          }
        }
      ]
    }
  } : null;

  let jsonLd: any[] = [];

  switch (type) {
    case 'organization':
      jsonLd = [organizationData, localBusinessData, webSiteData, webPageData, breadcrumbData];
      break;
    case 'service':
      jsonLd = [organizationData, webPageData, breadcrumbData];
      if (servicePageData) jsonLd.push(servicePageData);
      break;
    case 'contactPage':
      jsonLd = [organizationData, contactPageData, breadcrumbData];
      break;
    case 'webpage':
      jsonLd = [webPageData, breadcrumbData];
      break;
    default:
      jsonLd = [organizationData];
  }

  return (
    <>
      {jsonLd.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}