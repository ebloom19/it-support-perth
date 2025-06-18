"use client";

import { SecurityAssessmentCTA as ComprehensiveSecurityAssessmentCTA } from "@/components/SecurityAssessmentCTA";

interface SecurityAssessmentCTAProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function SecurityAssessmentCTA({ 
  variant = "default", 
  size = "default", 
  className = "",
  children
}: SecurityAssessmentCTAProps) {
  return (
    <ComprehensiveSecurityAssessmentCTA 
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </ComprehensiveSecurityAssessmentCTA>
  );
} 