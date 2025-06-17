import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ITSecuritySolutions() {
  const features = [
    {
      title: "Endpoint Protection",
      description: "Advanced antivirus and malware detection across all devices. Real-time scanning, behavioral analysis, and automatic threat removal to keep your endpoints secure.",
      icon: "🔒",
      color: "text-[#3c91e6]"
    },
    {
      title: "Microsoft Purview & DLP",
      description: "Protect sensitive data and prevent leaks with comprehensive data loss prevention. Automated compliance monitoring and policy enforcement.",
      icon: "📄",
      color: "text-[#01042b]"
    },
    {
      title: "FortiGate Firewall Protection",
      description: "Enterprise-grade network security with next-generation firewalls. Advanced threat protection, intrusion prevention, and web filtering.",
      icon: "🛡️",
      color: "text-[#3c91e6]"
    },
    {
      title: "Secure Remote Access",
      description: "Multi-factor authentication and VPN solutions for safe remote work. Zero-trust security model ensuring secure access from anywhere.",
      icon: "📡",
      color: "text-[#01042b]"
    },
    {
      title: "24/7 Threat Monitoring",
      description: "Continuous monitoring of your systems for potential risks. AI-powered threat detection with immediate response to security incidents.",
      icon: "👁️",
      color: "text-[#3c91e6]"
    },
    {
      title: "Backup & Recovery Security",
      description: "Secure, encrypted backups with immutable storage options. Ransomware-resistant recovery solutions to protect against data loss.",
      icon: "💾",
      color: "text-[#01042b]"
    },
    {
      title: "Email Security & Anti-Phishing",
      description: "Advanced email filtering, anti-spam protection, and phishing detection to protect your business communications from threats.",
      icon: "📧",
      color: "text-[#3c91e6]"
    },
    {
      title: "Vulnerability Management",
      description: "Regular security assessments, patch management, and vulnerability scanning to identify and fix security weaknesses proactively.",
      icon: "🔍",
      color: "text-[#01042b]"
    },
    {
      title: "Compliance & Reporting",
      description: "Meet Australian regulatory requirements with automated compliance monitoring, audit trails, and detailed security reporting.",
      icon: "📊",
      color: "text-[#3c91e6]"
    }
  ];

  const benefits = [
    {
      title: "Proven Cybersecurity Expertise",
      description: "Our team is equipped to handle the latest threats with tailored strategies and 20+ years of experience protecting Perth businesses.",
      icon: "🛡️"
    },
    {
      title: "Proactive Threat Prevention",
      description: "Prevent attacks before they happen with 24/7 monitoring, regular security updates, and predictive threat intelligence.",
      icon: "🔮"
    },
    {
      title: "Compliance & Standards",
      description: "Meet industry standards and regulatory requirements with automated compliance monitoring and detailed security reporting.",
      icon: "📋"
    },
    {
      title: "Tailored Security Solutions",
      description: "From small businesses to larger enterprises, our security strategies adapt to your specific requirements and risk profile.",
      icon: "🎯"
    },
    {
      title: "Rapid Incident Response",
      description: "Immediate response to security incidents with forensic analysis, containment, and recovery to minimize business impact.",
      icon: "⚡"
    },
    {
      title: "Staff Security Training",
      description: "Comprehensive cybersecurity awareness training for your team to prevent social engineering and phishing attacks.",
      icon: "🎓"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture, identifying vulnerabilities and compliance gaps across all systems."
    },
    {
      step: 2,
      title: "Risk Analysis & Planning",
      description: "Detailed risk assessment with prioritized security recommendations and a customized security roadmap for your business."
    },
    {
      step: 3,
      title: "Security Implementation",
      description: "Professional deployment of security solutions with minimal business disruption, including testing and validation."
    },
    {
      step: 4,
      title: "Monitoring & Maintenance",
      description: "Continuous 24/7 security monitoring, regular updates, and proactive threat hunting to maintain optimal protection."
    },
    {
      step: 5,
      title: "Incident Response & Recovery",
      description: "Rapid response protocols for security incidents with forensic analysis, containment, and business continuity planning."
    }
  ];

  const stats = [
    {
      number: "87,400",
      label: "Annual Cyber Crimes",
      description: "Reported in Australia (ASD 2024)"
    },
    {
      number: "6 Min",
      label: "Attack Frequency",
      description: "One cybercrime every 6 minutes"
    },
    {
      number: "99.5%",
      label: "Threat Detection",
      description: "Success rate with our monitoring"
    }
  ];

  const threatLandscapeSection = (
    <section className="py-20 bg-gradient-to-b from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-800 dark:text-red-400">
            The Growing Cyber Threat Landscape
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Understanding the current threat environment is crucial for protecting your business
          </p>
        </div>

        <Card className="max-w-5xl mx-auto border-red-200 dark:border-red-800">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold text-red-800 dark:text-red-400">Australian Cyber Threat Report 2024</h3>
                </div>
                <p className="text-lg mb-4 text-muted-foreground">
                  According to the Australian Signals Directorate (ASD):
                </p>
                <div className="bg-red-100 dark:bg-red-900/20 rounded-lg p-4 mb-4">
                  <p className="text-xl font-bold text-red-800 dark:text-red-400 mb-2">
                    Over 87,400 cybercrime reports submitted
                  </p>
                  <p className="text-red-700 dark:text-red-300">
                    Averaging one attack every six minutes in Australia
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Top Cyber Threats:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-background rounded-lg shadow-sm">
                    <span className="text-2xl">🔐</span>
                    <div>
                      <div className="font-semibold">Identity Fraud</div>
                      <div className="text-sm text-muted-foreground">Theft of personal and business credentials</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-background rounded-lg shadow-sm">
                    <span className="text-2xl">🛒</span>
                    <div>
                      <div className="font-semibold">Online Shopping Fraud</div>
                      <div className="text-sm text-muted-foreground">E-commerce and payment fraud</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-background rounded-lg shadow-sm">
                    <span className="text-2xl">🏦</span>
                    <div>
                      <div className="font-semibold">Banking Fraud</div>
                      <div className="text-sm text-muted-foreground">Financial transaction targeting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  return (
    <ServicePageTemplate
      title="IT Security Solutions"
      subtitle="Comprehensive Cybersecurity for Perth Businesses"
      heroDescription="As cyber threats grow more sophisticated, businesses must take proactive steps to protect their data, systems, and customers. Our IT Security Solutions provide enterprise-grade protection with local expertise you can trust."
      heroImage="/images/hands-working-digital-device-network-graphic-overlay.webp"
      heroImageAlt="Cybersecurity professional monitoring network security"
      introText="Protect your business from the growing threat of cybercrime with comprehensive security solutions designed for Australian businesses. Our multi-layered approach combines cutting-edge technology with proactive monitoring to keep your data and systems secure."
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      stats={stats}
      primaryCTA="Get Free Security Assessment"
      secondaryCTA="Learn About Our Solutions"
      additionalSections={threatLandscapeSection}
    />
  );
}
