import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { StructuredData } from '@/components/StructuredData';

export default function AIEnhancedITSupport() {
  const features = [
    {
      title: "Proactive Issue Detection",
      description: "AI tools monitor your systems 24/7, identifying and resolving potential issues before they escalate, preventing costly downtime",
      icon: "🔍",
      color: "text-[#3c91e6]"
    },
    {
      title: "Automated Task Management",
      description: "AI handles routine tasks like system updates, patch management, and basic troubleshooting, freeing up your team for strategic work",
      icon: "⚡",
      color: "text-foreground"
    },
    {
      title: "Intelligent Cybersecurity",
      description: "Advanced AI systems detect and neutralize malware, phishing attempts, and unauthorized access in real-time",
      icon: "🛡️",
      color: "text-[#3c91e6]"
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning algorithms predict potential hardware failures and performance issues before they impact your business",
      icon: "📊",
      color: "text-foreground"
    },
    {
      title: "Smart Help Desk",
      description: "AI-powered ticketing system that categorizes, prioritizes, and routes support requests for faster resolution times",
      icon: "🎯",
      color: "text-[#3c91e6]"
    },
    {
      title: "Workflow Automation",
      description: "Streamline business processes with intelligent automation that adapts to your specific workflows and requirements",
      icon: "🔄",
      color: "text-foreground"
    }
  ];

  const benefits = [
    {
      title: "Reduced Downtime",
      description: "Proactive monitoring and predictive analytics prevent issues before they cause system failures or business interruptions",
      icon: "⏰"
    },
    {
      title: "Cost Savings",
      description: "Automated processes reduce manual labor costs while preventing expensive system failures and security breaches",
      icon: "💰"
    },
    {
      title: "Enhanced Security",
      description: "AI-powered threat detection provides superior protection against evolving cyber threats and attack vectors",
      icon: "🔒"
    },
    {
      title: "Improved Productivity",
      description: "Free your team from routine IT tasks to focus on strategic initiatives that drive business growth",
      icon: "🚀"
    },
    {
      title: "Scalable Solutions",
      description: "AI systems scale with your business, adapting to changing needs without requiring additional human resources",
      icon: "📈"
    },
    {
      title: "Human + AI Collaboration",
      description: "Perfect blend of AI efficiency and human expertise ensures optimal support for both routine and complex issues",
      icon: "🤝"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Assessment & Planning",
      description: "Evaluate your current IT infrastructure and identify opportunities for AI enhancement and automation"
    },
    {
      step: 2,
      title: "Custom AI Implementation",
      description: "Deploy tailored AI tools and systems that integrate seamlessly with your existing technology stack"
    },
    {
      step: 3,
      title: "Training & Optimization",
      description: "Configure AI systems to learn your specific business patterns and optimize performance for your environment"
    },
    {
      step: 4,
      title: "Monitoring & Management",
      description: "24/7 AI-powered monitoring with human oversight to ensure optimal performance and rapid issue resolution"
    },
    {
      step: 5,
      title: "Continuous Improvement",
      description: "Ongoing optimization and enhancement of AI capabilities based on performance data and changing business needs"
    }
  ];

  const stats = [
    {
      number: "50%",
      label: "Downtime Reduction",
      description: "With proactive AI monitoring"
    },
    {
      number: "43%",
      label: "SMB Cyberattacks",
      description: "AI provides essential protection"
    },
    {
      number: "24/7",
      label: "AI Monitoring",
      description: "Never-sleeping system oversight"
    }
  ];

  return (
    <>
      <StructuredData 
        type="service" 
        serviceData={{
          name: "AI-Enhanced IT Support",
          description: "Revolutionize your IT with AI-powered solutions. Transform your IT operations with cutting-edge AI technology including proactive monitoring, automated processes, and intelligent threat detection.",
          url: "https://itsupportperth.com.au/services-and-solutions/ai-enhanced-it-support"
        }}
      />
      <ServicePageTemplate
        title="AI-Enhanced IT Support"
        subtitle="Revolutionize Your IT with AI-Powered Solutions"
        heroDescription="Transform your IT operations with cutting-edge AI technology. Proactive monitoring, automated processes, and intelligent threat detection combined with expert human support for the ultimate IT experience."
        heroImage="/images/person-working-html-computer.webp"
        heroImageAlt="Person working on computer"
        introText="Managing IT doesn't have to be a challenge for small and medium businesses. Our AI-Enhanced IT Support brings cutting-edge automation to your systems, saving you time, reducing costs, and improving security while maintaining the human touch when you need it most."
        features={features}
        benefits={benefits}
        processSteps={processSteps}
        stats={stats}
        primaryCTA="Start AI Transformation"
        secondaryCTA="Schedule AI Assessment"
      />
    </>
  );
}
