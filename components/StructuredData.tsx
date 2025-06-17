export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IT Support Perth",
    "alternateName": "Computer Mechanics",
    "description": "Leading IT Support Perth provider with 20+ years experience. Proactive managed IT services, cybersecurity, cloud solutions & disaster recovery for Perth businesses.",
    "url": "https://itsupportperth.net.au",
    "telephone": "(08) 9325 1196",
    "email": "info@itsupportperth.net.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Perth",
      "addressRegion": "Western Australia", 
      "postalCode": "",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-31.9505",
      "longitude": "115.8605"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Perth",
        "addressRegion": "Western Australia",
        "addressCountry": "AU"
      },
      {
        "@type": "State", 
        "name": "Western Australia",
        "addressCountry": "AU"
      }
    ],
    "serviceType": [
      "Managed IT Services",
      "IT Security Solutions", 
      "Cloud Services",
      "Backup and Disaster Recovery",
      "Computer Support",
      "Network Support",
      "IT Consulting"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-17:00",
    "foundingDate": "2003",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/computermechanicsperth/",
      "https://www.computermechanics.com.au/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed IT Services",
            "description": "24/7 proactive IT management and support for Perth businesses"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "IT Security Solutions",
            "description": "Comprehensive cybersecurity protection including firewalls and email security"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Cloud Services",
            "description": "Scalable cloud solutions and migration services for modern businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backup & Disaster Recovery", 
            "description": "Reliable backup solutions and business continuity planning"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}