import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { StructuredData } from '@/components/StructuredData';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

const url = `${siteConfig.url}/services-and-solutions/on-premises-server-management`;
export const metadata: Metadata = {
  title: 'On-Premises Server Management Perth | IT Support Perth',
  description: 'Ensure your Perth business servers run at peak efficiency. We provide comprehensive on-site infrastructure management, 24/7 support, and guaranteed uptime.',
  alternates: { canonical: url },
  openGraph: { title: 'On-Premises Server Management Perth | IT Support Perth', description: 'Ensure your Perth business servers run at peak efficiency. We provide comprehensive on-site infrastructure management, 24/7 support, and guaranteed uptime.', url, siteName: 'IT Support Perth', type: 'website' },
};

export default function OnPremisesServerManagement() {
  const features = [
    {
      title: "Proactive Server Monitoring",
      description: "24/7 server monitoring to detect and resolve issues before they affect operations with real-time alerts and performance tracking",
      icon: "🔍",
      color: "text-[#3c91e6]"
    },
    {
      title: "Regular Maintenance & Updates",
      description: "Scheduled maintenance to prevent downtime and optimize performance through updates, patching, and system optimization",
      icon: "🔧",
      color: "text-foreground"
    },
    {
      title: "Data Management Solutions",
      description: "Comprehensive data backup and recovery solutions with storage management and disaster recovery planning",
      icon: "💾",
      color: "text-[#3c91e6]"
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and improvement of server performance through resource optimization and capacity planning",
      icon: "📊",
      color: "text-foreground"
    },
    {
      title: "Security & Compliance",
      description: "Implement security patches, compliance monitoring, and access control to meet industry regulations",
      icon: "🛡️",
      color: "text-[#3c91e6]"
    },
    {
      title: "24/7 Support Services",
      description: "Round-the-clock technical support with remote assistance and on-site support when needed",
      icon: "🌐",
      color: "text-foreground"
    }
  ];

  const benefits = [
    {
      title: "Maximum Data Control",
      description: "Keep sensitive data within your physical infrastructure with complete control over access and security",
      icon: "🔒"
    },
    {
      title: "Industry Compliance",
      description: "Meet strict data protection regulations for healthcare, legal, and finance industries",
      icon: "📋"
    },
    {
      title: "Customizable Configuration",
      description: "Complete control over server configurations to meet your unique business demands and requirements",
      icon: "⚙️"
    },
    {
      title: "Reliable Performance",
      description: "Reduced reliance on external factors for resource-intensive applications with optimized local performance",
      icon: "⚡"
    },
    {
      title: "Network Optimization",
      description: "Optimized local network speeds and reduced latency for better user experience",
      icon: "🌐"
    },
    {
      title: "Direct Resource Management",
      description: "Direct control over hardware resources and allocation for optimal performance and scalability",
      icon: "🖥️"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Infrastructure Assessment",
      description: "Comprehensive evaluation of your current server infrastructure, identifying optimization opportunities and potential risks"
    },
    {
      step: 2,
      title: "Custom Management Plan",
      description: "Development of a tailored management strategy that aligns with your business requirements and compliance needs"
    },
    {
      step: 3,
      title: "Implementation & Setup",
      description: "Professional deployment of monitoring tools, security measures, and automated maintenance processes"
    },
    {
      step: 4,
      title: "Ongoing Monitoring",
      description: "24/7 proactive monitoring with real-time alerts and regular performance reports to ensure optimal operation"
    },
    {
      step: 5,
      title: "Continuous Optimization",
      description: "Regular reviews and improvements to maintain peak performance and adapt to changing business needs"
    }
  ];

  const stats = [
    {
      number: "99.9%",
      label: "Server Uptime",
      description: "Guaranteed uptime with proactive monitoring"
    },
    {
      number: "24/7",
      label: "Support Coverage",
      description: "Round-the-clock expert assistance"
    },
    {
      number: "15+ Years",
      label: "Server Management Experience",
      description: "Proven expertise in enterprise infrastructure"
    }
  ];

  return (
    <>
      <StructuredData 
        type="service" 
        serviceData={{
          name: "On-Premises Server Management",
          description: "Expert management of your on-site infrastructure. Maximize control, security, and performance with comprehensive server management services including 24/7 monitoring, maintenance, data management, and security compliance.",
          url
        }}
      />
      <ServicePageTemplate
        title="On-Premises Server Management"
        subtitle="Expert Management of Your On-Site Infrastructure"
        heroDescription="Maximize control, security, and performance with our comprehensive on-premises server management services. Perfect for businesses requiring strict compliance and data sovereignty."
        heroImage="/images/young-it-service-man-repairing-computer.webp"
        heroImageAlt="IT service technician repairing computer"
        introText="On-premises servers remain vital for businesses requiring maximum control, security, and performance. Our management services ensure your infrastructure runs at peak efficiency while meeting compliance requirements and providing the reliability your business depends on."
        features={features}
        benefits={benefits}
        processSteps={processSteps}
        stats={stats}
        primaryCTA="Get Server Management Quote"
        secondaryCTA="Schedule Assessment"
      />
    </>
  );
}
