import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { StructuredData } from '@/components/StructuredData';
import { Database, TriangleAlert } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

const url = `${siteConfig.url}/services-and-solutions/backup-and-disaster-recovery-solutions`;
export const metadata: Metadata = {
  title: 'Backup & Disaster Recovery Solutions Perth | Cloud Backup',
  description: 'Automated cloud backup, ransomware protection and rapid recovery for Perth businesses. Business continuity and disaster recovery.',
  alternates: { canonical: url },
  openGraph: { title: 'Backup & Disaster Recovery Perth', description: 'Cloud backup and disaster recovery for Perth businesses.', url },
};

export default function BackupAndDisasterRecovery() {
  const features = [
    {
      title: "Automated Cloud Backup",
      description: "Continuous, automated backups to secure cloud storage with military-grade encryption. Your data is protected 24/7 without manual intervention.",
      icon: "☁️",
      color: "text-[#3c91e6]"
    },
    {
      title: "Ransomware Protection",
      description: "Immutable backup storage that prevents ransomware from corrupting your data. Air-gapped backups ensure recovery even from sophisticated attacks.",
      icon: "🛡️",
      color: "text-foreground"
    },
    {
      title: "Rapid Recovery Solutions",
      description: "Get back online fast with instant recovery options. Restore entire systems, individual files, or specific applications in minutes, not hours.",
      icon: "🔄",
      color: "text-[#3c91e6]"
    },
    {
      title: "Business Continuity Planning",
      description: "Comprehensive disaster recovery plans tailored to your business operations. Documented procedures ensure swift response during emergencies.",
      icon: "✅",
      color: "text-foreground"
    },
    {
      title: "Hybrid Backup Strategy",
      description: "Combine local and cloud backup for optimal protection and recovery speed. Local copies for quick restore, cloud copies for disaster recovery.",
      icon: "💾",
      color: "text-[#3c91e6]"
    },
    {
      title: "24/7 Monitoring & Testing",
      description: "Continuous monitoring of backup health with regular recovery testing. Proactive alerts ensure your backups are always ready when needed.",
      icon: "⏰",
      color: "text-foreground"
    },
    {
      title: "Version Control & Retention",
      description: "Multiple backup versions with flexible retention policies. Recover from any point in time with granular restore capabilities.",
      icon: "📋",
      color: "text-[#3c91e6]"
    },
    {
      title: "Offsite Storage Solutions",
      description: "Geographic redundancy with multiple secure data centers. Protect against local disasters with distributed backup infrastructure.",
      icon: "🏢",
      color: "text-foreground"
    },
    {
      title: "Recovery Testing & Validation",
      description: "Regular disaster recovery drills and backup validation to ensure your data can be restored when you need it most.",
      icon: "🧪",
      color: "text-[#3c91e6]"
    }
  ];

  const benefits = [
    {
      title: "99.99% Data Recovery Rate",
      description: "Industry-leading recovery success rate with multiple backup layers and redundancy across geographic locations.",
      icon: "📊"
    },
    {
      title: "Sub-15 Minute RTO",
      description: "Achieve Recovery Time Objectives under 15 minutes for critical systems using instant recovery technology and virtualization.",
      icon: "⚡"
    },
    {
      title: "Compliance Ready",
      description: "Meet Australian data protection and retention requirements with automated compliance reporting and audit trails.",
      icon: "📋"
    },
    {
      title: "Cost Predictability",
      description: "Fixed monthly pricing with no hidden costs. Dramatically lower than the cost of data loss or extended downtime.",
      icon: "💰"
    },
    {
      title: "Local Perth Expertise",
      description: "Perth-based disaster recovery specialists who understand local business challenges and regulatory requirements.",
      icon: "🏢"
    },
    {
      title: "Proactive Risk Management",
      description: "Regular vulnerability assessments and backup validation to identify and address potential recovery issues before they occur.",
      icon: "🔮"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Business Impact Analysis",
      description: "Comprehensive assessment of your critical systems, data dependencies, and recovery requirements to design optimal protection strategy."
    },
    {
      step: 2,
      title: "Backup Architecture Design",
      description: "Custom backup and recovery solution design based on your RTO/RPO requirements, budget, and compliance needs."
    },
    {
      step: 3,
      title: "Implementation & Testing",
      description: "Professional deployment of backup systems with comprehensive testing to ensure reliable recovery capabilities."
    },
    {
      step: 4,
      title: "Documentation & Training",
      description: "Complete disaster recovery documentation and staff training to ensure your team knows how to respond during emergencies."
    },
    {
      step: 5,
      title: "Ongoing Management",
      description: "Continuous monitoring, regular testing, and proactive maintenance to ensure your backup and recovery systems remain effective."
    }
  ];

  const stats = [
    {
      number: "94%",
      label: "Business Failure Rate",
      description: "After major data loss without backup"
    },
    {
      number: "$200k",
      label: "Average Ransomware Cost",
      description: "Impact on small businesses"
    },
    {
      number: "15 min",
      label: "Recovery Time",
      description: "Average system restoration"
    }
  ];

  const dataLossSection = (
    <section className="py-20 bg-gradient-to-b from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-800 dark:text-red-400">
            The Reality of Data Loss
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't become another statistic - protect your business before disaster strikes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <TriangleAlert className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-800 dark:text-red-400">Common Causes</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-background rounded-lg shadow-sm">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <div className="font-semibold">Hardware Failure</div>
                    <div className="text-sm text-muted-foreground">40% of all data loss incidents</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-background rounded-lg shadow-sm">
                  <span className="text-2xl">🦠</span>
                  <div>
                    <div className="font-semibold">Ransomware Attacks</div>
                    <div className="text-sm text-muted-foreground">Growing threat to all businesses</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-background rounded-lg shadow-sm">
                  <span className="text-2xl">👤</span>
                  <div>
                    <div className="font-semibold">Human Error</div>
                    <div className="text-sm text-muted-foreground">Accidental deletion or corruption</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-800 dark:text-red-400">Business Impact</h3>
              </div>
              <div className="bg-red-100 dark:bg-red-900/20 rounded-lg p-4 mb-4">
                <p className="text-xl font-bold text-red-800 dark:text-red-400 mb-2">
                  93% of companies that lose data for 10+ days file for bankruptcy within a year
                </p>
                <p className="text-red-700 dark:text-red-300">
                  The cost of prevention is always less than the cost of recovery
                </p>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div>• Lost productivity and revenue</div>
                <div>• Customer trust and reputation damage</div>
                <div>• Compliance violations and fines</div>
                <div>• Emergency recovery costs</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <StructuredData 
        type="service" 
        serviceData={{
          name: "Backup & Disaster Recovery",
          description: "Enterprise-grade backup and disaster recovery solutions for Perth businesses. Comprehensive data protection with rapid recovery capabilities.",
          url: "https://itsupportperth.com.au/services-and-solutions/backup-and-disaster-recovery-solutions"
        }}
      />
      <ServicePageTemplate
      title="Backup & Disaster Recovery"
      subtitle="Comprehensive Data Protection for Perth Businesses"
      heroDescription="Don't gamble with your business data. Our enterprise-grade backup and disaster recovery solutions ensure your business survives any crisis - from ransomware attacks to natural disasters."
      heroImage="/images/cloud-backup-download-network.webp"
      heroImageAlt="Cloud backup and data recovery network illustration"
      introText="Data loss can destroy a business in minutes, but recovery doesn't have to take days. Our proactive backup and disaster recovery solutions provide the peace of mind that comes with knowing your business can survive and thrive through any crisis."
      features={features}
      benefits={benefits}
      processSteps={processSteps}
      stats={stats}
      primaryCTA="Protect Your Data Now"
      secondaryCTA="Get Recovery Assessment"
      additionalSections={dataLossSection}
      />
    </>
  );
}
