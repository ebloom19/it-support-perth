import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { StructuredData } from '@/components/StructuredData';

export default function EmailProtectionService() {
  const features = [
    {
      title: "AI-Powered Email Filtering",
      description: "Advanced machine learning algorithms identify and block spam, phishing attempts, and malicious attachments before they reach your inbox",
      icon: "🤖",
      color: "text-[#3c91e6]"
    },
    {
      title: "Email Deliverability Optimization",
      description: "Ensure your legitimate emails reach their destination with proper SPF, DKIM, and DMARC configuration",
      icon: "✅",
      color: "text-foreground"
    },
    {
      title: "Secure Email Gateway",
      description: "Multi-layered protection for incoming and outgoing email traffic with content filtering and URL defense",
      icon: "🛡️",
      color: "text-[#3c91e6]"
    },
    {
      title: "Cloud-Based Protection",
      description: "Scalable cloud-based security that provides 24/7 protection with real-time updates and zero downtime",
      icon: "☁️",
      color: "text-foreground"
    },
    {
      title: "Threat Intelligence",
      description: "Continuous monitoring and threat detection powered by global security intelligence networks",
      icon: "🔍",
      color: "text-[#3c91e6]"
    },
    {
      title: "Compliance Management",
      description: "Comprehensive email security policies and reporting to meet industry compliance requirements",
      icon: "📋",
      color: "text-foreground"
    }
  ];

  const benefits = [
    {
      title: "Advanced Threat Protection",
      description: "Protect against sophisticated email threats including zero-day attacks, business email compromise, and advanced malware",
      icon: "🛡️"
    },
    {
      title: "Seamless Integration",
      description: "Works seamlessly with Microsoft 365, Google Workspace, and other popular email platforms without disruption",
      icon: "🔗"
    },
    {
      title: "24/7 Expert Monitoring",
      description: "Round-the-clock monitoring by certified security experts with rapid incident response capabilities",
      icon: "👁️"
    },
    {
      title: "Cost-Effective Security",
      description: "Enterprise-grade email protection at affordable prices, reducing the risk of costly data breaches",
      icon: "💰"
    },
    {
      title: "Automated Management",
      description: "Automated policy enforcement and threat response minimize administrative overhead and human error",
      icon: "⚙️"
    },
    {
      title: "Business Continuity",
      description: "Ensure uninterrupted email communication with high availability and disaster recovery capabilities",
      icon: "🔄"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Email Security Assessment",
      description: "Comprehensive evaluation of your current email security posture and identification of vulnerabilities"
    },
    {
      step: 2,
      title: "Custom Configuration",
      description: "Design and configure email protection policies tailored to your business needs and compliance requirements"
    },
    {
      step: 3,
      title: "Seamless Deployment",
      description: "Professional implementation with minimal disruption to your existing email infrastructure and workflows"
    },
    {
      step: 4,
      title: "Active Monitoring",
      description: "24/7 monitoring with real-time threat detection, quarantine management, and security incident response"
    },
    {
      step: 5,
      title: "Ongoing Optimization",
      description: "Regular policy updates, threat intelligence integration, and performance optimization for maximum protection"
    }
  ];

  const stats = [
    {
      number: "90%",
      label: "Email-Based Attacks",
      description: "Of all cyberattacks begin with email"
    },
    {
      number: "99.9%",
      label: "Spam Detection Rate",
      description: "Accuracy with AI-powered filtering"
    },
    {
      number: "<1sec",
      label: "Response Time",
      description: "Average threat detection and blocking"
    }
  ];

  return (
    <>
      <StructuredData 
        type="service" 
        serviceData={{
          name: "Email Protection Services",
          description: "Secure your business communication with advanced email protection. Comprehensive defense against spam, phishing, malware, and advanced threats with AI-powered filtering and compliance management.",
          url: "https://itsupportperth.com.au/services-and-solutions/email-protection-service"
        }}
      />
      <ServicePageTemplate
        title="Email Protection Services"
        subtitle="Secure Your Business Communication with Advanced Email Protection"
        heroDescription="Protect your business from email-based threats with our comprehensive email security solutions. Advanced AI filtering, threat detection, and compliance management to keep your communications safe."
        heroImage="/images/message-online-chat-social-text-concept.webp"
        heroImageAlt="Email Protection Services"
        introText="Email is the backbone of modern business communication, but it's also the primary attack vector for cybercriminals. Our Email Protection Services provide comprehensive defense against spam, phishing, malware, and advanced threats while ensuring your legitimate emails are delivered reliably."
        features={features}
        benefits={benefits}
        processSteps={processSteps}
        stats={stats}
        primaryCTA="Secure Your Email Now"
        secondaryCTA="Get Security Assessment"
      />
    </>
  );
}
