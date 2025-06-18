import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { StructuredData } from '@/components/StructuredData';

export default function ManagedITServicesProvider() {
  const features = [
    {
      title: "24/7 Monitoring & Maintenance",
      description: "Proactive support ensures your systems are always up-to-date and running efficiently. By catching issues early, we help you avoid costly downtime.",
      icon: "⏰",
      color: "text-[#3c91e6]"
    },
    {
      title: "Advanced Security Protection", 
      description: "Protect your sensitive business information from ransomware, phishing, and other cyber threats with robust security measures.",
      icon: "🛡️",
      color: "text-[#01042b]"
    },
    {
      title: "Remote Access Solutions",
      description: "Enable secure and efficient remote work, ensuring your team can stay productive from anywhere with enterprise-grade VPN and security.",
      icon: "☁️",
      color: "text-[#3c91e6]"
    },
    {
      title: "Scalable Infrastructure",
      description: "Whether you're a team of five or fifty, our solutions grow with your business, adapting to your evolving needs without disruption.",
      icon: "📈",
      color: "text-[#01042b]"
    },
    {
      title: "Help Desk Support",
      description: "Access to experienced IT professionals when you need them most. Real people providing real solutions to your technology challenges.",
      icon: "👥",
      color: "text-[#3c91e6]"
    },
    {
      title: "System Optimization",
      description: "Regular performance tuning and optimization to ensure your systems run at peak efficiency, maximizing productivity and minimizing costs.",
      icon: "⚙️",
      color: "text-[#01042b]"
    },
    {
      title: "Email & Communication",
      description: "Microsoft 365 setup and management, Exchange email hosting, and Teams collaboration tools to keep your business connected.",
      icon: "📧",
      color: "text-[#3c91e6]"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implementation, and management of your network infrastructure including WiFi, firewalls, and switches for optimal performance.",
      icon: "🌐",
      color: "text-[#01042b]"
    },
    {
      title: "Software Management",
      description: "License management, software deployment, and updates across your organization. Keep your applications current and compliant.",
      icon: "💻",
      color: "text-[#3c91e6]"
    }
  ];

  const benefits = [
    {
      title: "Transparent Pricing",
      description: "No hidden fees—just straightforward, affordable solutions with predictable monthly costs that fit your budget.",
      icon: "💰"
    },
    {
      title: "Local Perth Expertise",
      description: "We understand the unique challenges of small and medium businesses in Perth and Western Australia, providing tailored solutions.",
      icon: "🏢"
    },
    {
      title: "Real Human Support",
      description: "When you call us, you'll speak with a real person who knows your business and its needs—not a call center overseas.",
      icon: "🤝"
    },
    {
      title: "Proactive Approach",
      description: "We prevent problems before they impact your business, saving you time, money, and frustration with proactive monitoring.",
      icon: "🔮"
    },
    {
      title: "No Lock-in Contracts",
      description: "Flexible month-to-month agreements that grow with your business. Change or cancel with just one month's notice.",
      icon: "🔓"
    },
    {
      title: "Proven Track Record",
      description: "Over 20 years of experience supporting Perth businesses with 250+ satisfied customers and 4.9-star reviews.",
      icon: "⭐"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "We conduct a comprehensive evaluation of your current IT infrastructure, identifying areas for improvement and potential risks."
    },
    {
      step: 2,
      title: "Customized Strategy",
      description: "Based on your business needs and budget, we develop a tailored managed IT plan that aligns with your goals and growth plans."
    },
    {
      step: 3,
      title: "Implementation",
      description: "Our team carefully implements the solution with minimal disruption to your operations, ensuring smooth transition and setup."
    },
    {
      step: 4,
      title: "Ongoing Monitoring",
      description: "24/7 proactive monitoring begins immediately, with regular maintenance, updates, and optimization to keep your systems running smoothly."
    },
    {
      step: 5,
      title: "Continuous Improvement",
      description: "Regular reviews and updates ensure your IT infrastructure evolves with your business needs and latest technology trends."
    }
  ];

  const stats = [
    {
      number: "30%",
      label: "Reduction in IT Issues",
      description: "Average decrease in security incidents"
    },
    {
      number: "20%",
      label: "Cost Savings",
      description: "Typical reduction in IT expenses"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable system availability"
    }
  ];

  return (
    <>
      <StructuredData 
        type="service" 
        serviceData={{
          name: "Managed IT Services Provider",
          description: "24/7 proactive IT support and monitoring services for Perth businesses. Comprehensive IT management that prevents problems before they occur.",
          url: "https://itsupportperth.com.au/services-and-solutions/managed-it-services-provider"
        }}
      />
      <ServicePageTemplate
      title="Managed IT Services Provider"
      subtitle="Your IT Partner for Seamless Operations"
      heroDescription="Keeping your IT systems running smoothly is critical for the success of your business, but it shouldn't be your responsibility. Our Managed IT Services ensure your technology is reliable, secure, and optimized, so you can focus on growing your business."
      heroImage="/images/group-graphic-designers-interacting-with-each-other.webp"
      heroImageAlt="Professional team collaborating on IT solutions"
      introText="Transform your business with comprehensive IT management that prevents problems before they occur. Our proactive approach ensures your technology supports your success, not hinders it."
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      stats={stats}
      primaryCTA="Get Your Free IT Assessment"
      secondaryCTA="View Our Services"
      />
    </>
  );
}
