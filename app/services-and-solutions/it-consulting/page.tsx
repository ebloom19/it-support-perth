import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { StructuredData } from '@/components/StructuredData';

export default function ITConsulting() {
  const features = [
    {
      title: "Strategic IT Planning",
      description: "Comprehensive evaluation of your current systems and development of a tailored roadmap to enhance productivity, security, and scalability for your business.",
      icon: "📋",
      color: "text-[#3c91e6]"
    },
    {
      title: "Cloud Strategy & Migration",
      description: "Expert guidance for cloud adoption, including platform selection, migration planning, and hybrid cloud solutions tailored to your business needs.",
      icon: "☁️",
      color: "text-[#01042b]"
    },
    {
      title: "Technology Assessment",
      description: "Thorough analysis of your IT infrastructure, identifying bottlenecks, security gaps, and opportunities for improvement and cost optimization.",
      icon: "🔍",
      color: "text-[#3c91e6]"
    },
    {
      title: "Digital Transformation",
      description: "Guidance through digital transformation initiatives, helping you leverage technology to improve processes and competitive advantage.",
      icon: "🚀",
      color: "text-[#01042b]"
    },
    {
      title: "Vendor Selection & Management",
      description: "Objective advice on technology vendors and solutions, ensuring you choose the right tools and partners for your business requirements.",
      icon: "⚖️",
      color: "text-[#3c91e6]"
    },
    {
      title: "IT Budget Planning",
      description: "Strategic planning for IT investments, helping you allocate resources effectively and avoid unnecessary expenses while meeting business goals.",
      icon: "💰",
      color: "text-[#01042b]"
    }
  ];

  const benefits = [
    {
      title: "Objective Expert Advice",
      description: "Unbiased recommendations from experienced IT professionals who understand Perth business challenges and regulatory requirements.",
      icon: "🎯"
    },
    {
      title: "Cost Optimization",
      description: "Avoid overspending on unnecessary tools and software by choosing solutions that truly fit your needs and budget constraints.",
      icon: "💡"
    },
    {
      title: "Future-Proof Strategy",
      description: "Stay ahead of technological advancements with systems that grow alongside your business and adapt to changing market conditions.",
      icon: "🔮"
    },
    {
      title: "Risk Mitigation",
      description: "Identify and address potential IT risks before they impact your business, including security vulnerabilities and compliance issues.",
      icon: "🛡️"
    },
    {
      title: "Plain English Communication",
      description: "We explain complex IT concepts in simple terms, empowering you to make confident, informed decisions without technical jargon.",
      icon: "🗣️"
    },
    {
      title: "Local Market Knowledge",
      description: "Deep understanding of Perth and Western Australian business environment, regulations, and technology ecosystem.",
      icon: "🏢"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Business Analysis",
      description: "Comprehensive assessment of your business objectives, current challenges, and growth plans to understand your unique requirements."
    },
    {
      step: 2,
      title: "Technology Audit",
      description: "Detailed evaluation of your existing IT infrastructure, applications, and processes to identify strengths and improvement opportunities."
    },
    {
      step: 3,
      title: "Strategic Recommendations",
      description: "Development of customized IT strategy with prioritized recommendations, timelines, and budget considerations aligned with your goals."
    },
    {
      step: 4,
      title: "Implementation Planning",
      description: "Creation of detailed implementation roadmap with phases, resource requirements, and risk mitigation strategies for smooth execution."
    },
    {
      step: 5,
      title: "Ongoing Support",
      description: "Continued guidance and support during implementation, with regular reviews and adjustments to ensure successful outcomes."
    }
  ];

  const stats = [
    {
      number: "25%",
      label: "Average Cost Savings",
      description: "Clients achieve through strategic planning"
    },
    {
      number: "90%",
      label: "Project Success Rate",
      description: "For our consulting implementations"
    },
    {
      number: "20+",
      label: "Years Experience",
      description: "Supporting Perth businesses"
    }
  ];

  return (
    <>
      <StructuredData 
        type="service" 
        serviceData={{
          name: "IT Consulting Services",
          description: "Strategic technology guidance for Perth businesses. Navigate the complex world of technology with confidence through comprehensive IT planning, cloud strategy, technology assessment, and digital transformation services.",
          url: "https://itsupportperth.com.au/services-and-solutions/it-consulting"
        }}
      />
      <ServicePageTemplate
        title="IT Consulting Services"
        subtitle="Strategic Technology Guidance for Perth Businesses"
        heroDescription="Navigate the complex world of technology with confidence. Our IT consulting services provide the strategic guidance you need to align your technology investments with your business goals and drive sustainable growth."
        heroImage="/images/close-up-smiling-person-conference-room.webp"
        heroImageAlt="IT consultant meeting with client in conference room"
        introText="Make informed technology decisions that drive your business forward. Our experienced consultants work with you to develop strategies that optimize costs, improve efficiency, and position your business for future growth."
        features={features}
        benefits={benefits}
        processSteps={processSteps}
        stats={stats}
        primaryCTA="Schedule Consultation"
        secondaryCTA="Learn More"
      />
    </>
  );
}
