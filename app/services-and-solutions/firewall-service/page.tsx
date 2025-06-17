import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function FirewallService() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "FortiGate leverages FortiGuard Labs machine learning to identify and block advanced threats using real-time intelligence",
      icon: "🤖",
      color: "text-[#3c91e6]"
    },
    {
      title: "Secure Remote Access",
      description: "Reliable VPN solutions for secure remote work from anywhere with encrypted connections and multi-factor authentication",
      icon: "🔐",
      color: "text-[#01042b]"
    },
    {
      title: "Network Visibility & Control",
      description: "Complete network visibility for monitoring traffic, enforcing policies, and maintaining security compliance",
      icon: "👁️",
      color: "text-[#3c91e6]"
    },
    {
      title: "Scalable Architecture",
      description: "Solutions that scale effortlessly with your business growth, from small offices to enterprise networks",
      icon: "📈",
      color: "text-[#01042b]"
    },
    {
      title: "Real-Time Monitoring",
      description: "24/7 continuous monitoring with instant threat detection and automated response capabilities",
      icon: "⚡",
      color: "text-[#3c91e6]"
    },
    {
      title: "Policy Management",
      description: "Comprehensive security policy implementation with access control, compliance monitoring, and enforcement",
      icon: "📋",
      color: "text-[#01042b]"
    }
  ];

  const benefits = [
    {
      title: "Enterprise-Grade Protection",
      description: "Advanced security features typically reserved for large enterprises, made accessible for businesses of all sizes",
      icon: "🛡️"
    },
    {
      title: "Expert Implementation",
      description: "Years of experience deploying FortiGate solutions with proven methodologies and best practices",
      icon: "🎯"
    },
    {
      title: "24/7 Support Coverage",
      description: "Round-the-clock support from our certified security experts with rapid response times",
      icon: "🌐"
    },
    {
      title: "Cost-Effective Security",
      description: "Reduce cybersecurity risks while maintaining budget control with our managed firewall services",
      icon: "💰"
    },
    {
      title: "Proactive Maintenance",
      description: "Regular updates, patches, and optimizations to keep your firewall running at peak performance",
      icon: "🔧"
    },
    {
      title: "Customized Configuration",
      description: "Tailored firewall policies and rules designed specifically for your business requirements",
      icon: "⚙️"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current network security posture and identification of vulnerabilities"
    },
    {
      step: 2,
      title: "Solution Design",
      description: "Custom FortiGate firewall configuration tailored to your business needs and security requirements"
    },
    {
      step: 3,
      title: "Professional Deployment",
      description: "Expert installation and configuration of FortiGate firewall with minimal disruption to operations"
    },
    {
      step: 4,
      title: "Monitoring & Management",
      description: "24/7 monitoring with real-time threat detection, alerts, and proactive security management"
    },
    {
      step: 5,
      title: "Ongoing Optimization",
      description: "Regular policy updates, performance tuning, and security enhancements to maintain optimal protection"
    }
  ];

  const stats = [
    {
      number: "43%",
      label: "SMB Cyberattacks",
      description: "Of all cyberattacks target small-medium businesses"
    },
    {
      number: "$200k",
      label: "Average Ransomware Cost",
      description: "Per incident for small businesses"
    },
    {
      number: "99.9%",
      label: "Threat Detection Rate",
      description: "With FortiGate AI-powered security"
    }
  ];

  return (
    <ServicePageTemplate
      title="Firewall Services (FortiGate)"
      subtitle="Enterprise-Grade Network Protection for Your Business"
      heroDescription="Protect your business with industry-leading FortiGate firewall solutions. Advanced AI-powered threat detection, secure remote access, and comprehensive network security for businesses of all sizes."
      heroImage="/images/firewall-vectors.webp"
      heroImageAlt="Firewall Services"
      introText="Your network is the backbone of your business. Our FortiGate Firewall Services provide comprehensive protection against advanced threats, ensuring your operations remain secure and efficient while enabling safe remote work and business growth."
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      stats={stats}
      primaryCTA="Get Firewall Protection"
      secondaryCTA="Schedule Security Assessment"
    />
  );
}
