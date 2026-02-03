import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { StructuredData } from '@/components/StructuredData';

export default function CloudServices() {
  const features = [
    {
      title: "Microsoft 365 Migration",
      description: "Complete transition to Microsoft 365 with Teams, Exchange, SharePoint, and OneDrive. Seamless email migration and full training for your team.",
      icon: "☁️",
      color: "text-[#3c91e6]"
    },
    {
      title: "Azure Cloud Infrastructure", 
      description: "Enterprise-grade virtual machines, storage, and networking solutions. Scalable infrastructure that grows with your business needs.",
      icon: "🖥️",
      color: "text-foreground"
    },
    {
      title: "Hybrid Cloud Solutions",
      description: "Combine on-premises and cloud resources for optimal performance. Keep sensitive data local while leveraging cloud scalability.",
      icon: "🌍",
      color: "text-[#3c91e6]"
    },
    {
      title: "Cloud Security & Compliance",
      description: "Multi-layered security with enterprise-grade encryption, backup solutions, and compliance management for Australian regulations.",
      icon: "🛡️",
      color: "text-foreground"
    },
    {
      title: "Remote Work Enablement",
      description: "Secure access to files and applications from anywhere. VPN setup, multi-factor authentication, and collaboration tools.",
      icon: "💻",
      color: "text-[#3c91e6]"
    },
    {
      title: "Cost Optimization",
      description: "Reduce IT costs with pay-as-you-use pricing. No upfront hardware investments, predictable monthly expenses, and automatic scaling.",
      icon: "💰",
      color: "text-foreground"
    },
    {
      title: "Data Analytics & BI",
      description: "Power BI integration, data warehousing, and business intelligence solutions to turn your data into actionable insights.",
      icon: "📊",
      color: "text-[#3c91e6]"
    },
    {
      title: "Cloud Storage Solutions",
      description: "Secure file sharing, synchronization, and collaboration with SharePoint Online, OneDrive, and Azure File Storage.",
      icon: "📁",
      color: "text-foreground"
    },
    {
      title: "Application Hosting",
      description: "Host your business applications in the cloud with high availability, automatic scaling, and global reach for optimal performance.",
      icon: "🌐",
      color: "text-[#3c91e6]"
    }
  ];

  const benefits = [
    {
      title: "99.9% Uptime Guarantee",
      description: "Enterprise-grade reliability with automatic failover and redundancy across multiple data centers for maximum availability.",
      icon: "⚡"
    },
    {
      title: "Scalable & Flexible",
      description: "Instantly scale resources up or down based on demand. Add new users, storage, or applications without hardware constraints.",
      icon: "📈"
    },
    {
      title: "Enhanced Collaboration",
      description: "Real-time document sharing, video conferencing, and team communication tools that keep your workforce connected.",
      icon: "🤝"
    },
    {
      title: "Automatic Updates",
      description: "Always stay current with the latest features and security patches. No maintenance windows or manual updates required.",
      icon: "🔄"
    },
    {
      title: "Disaster Recovery",
      description: "Built-in backup and recovery solutions protect your data. Geographic redundancy ensures business continuity.",
      icon: "🛡️"
    },
    {
      title: "Local Perth Support",
      description: "Expert guidance from our Perth-based team who understand Australian business requirements and compliance needs.",
      icon: "🏢"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Cloud Readiness Assessment",
      description: "Comprehensive evaluation of your current infrastructure, applications, and data to determine the optimal cloud migration strategy."
    },
    {
      step: 2,
      title: "Migration Planning",
      description: "Detailed roadmap with timelines, resource requirements, and risk mitigation strategies tailored to your business operations."
    },
    {
      step: 3,
      title: "Phased Implementation",
      description: "Gradual migration with minimal business disruption. Testing and validation at each phase to ensure smooth transition."
    },
    {
      step: 4,
      title: "Training & Support",
      description: "Comprehensive user training and documentation. Ongoing support to maximize adoption and productivity gains."
    },
    {
      step: 5,
      title: "Optimization & Monitoring",
      description: "Continuous monitoring and optimization of cloud resources for performance, security, and cost efficiency."
    }
  ];

  const stats = [
    {
      number: "50%",
      label: "Cost Reduction",
      description: "Average savings on IT infrastructure"
    },
    {
      number: "3x",
      label: "Faster Deployment",
      description: "Quicker setup vs on-premises"
    },
    {
      number: "99.9%",
      label: "Uptime SLA",
      description: "Enterprise reliability guarantee"
    }
  ];

  return (
    <>
      <StructuredData 
        type="service" 
        serviceData={{
          name: "Cloud Services & Migration",
          description: "Microsoft 365 migration, Azure cloud infrastructure, and hybrid cloud solutions for Perth businesses. Scalable cloud services with expert support.",
          url: "https://itsupportperth.com.au/services-and-solutions/cloud-services"
        }}
      />
      <ServicePageTemplate
      title="Cloud Services & Migration"
      subtitle="Transform Your Business with Scalable Cloud Solutions"
      heroDescription="Modernize your IT infrastructure with secure, scalable cloud solutions that reduce costs and increase productivity. Our expert team makes cloud migration simple and stress-free for Perth businesses."
      heroImage="/images/saas-concept-collage.webp"
      heroImageAlt="Cloud computing and SaaS concept illustration"
      introText="Move beyond the limitations of traditional IT infrastructure. Our cloud services provide the flexibility, security, and cost-effectiveness your business needs to thrive in today's digital landscape."
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      stats={stats}
      primaryCTA="Start Your Cloud Journey"
      secondaryCTA="Book Cloud Consultation"
      />
    </>
  );
}
