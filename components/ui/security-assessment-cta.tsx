"use client";

import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

interface SecurityAssessmentCTAProps {
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export function SecurityAssessmentCTA({ variant = "default", className = "" }: SecurityAssessmentCTAProps) {
  const handleSecurityAssessmentClick = () => {
    // Scroll to the persistent survey if it exists
    const surveyContainer = document.getElementById('persistent-survey-container');
    if (surveyContainer) {
      surveyContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add a subtle highlight animation
      surveyContainer.style.animation = 'pulse 0.5s ease-in-out';
      setTimeout(() => {
        surveyContainer.style.animation = '';
      }, 500);
    }
  };

  return (
    <Button 
      variant={variant} 
      onClick={handleSecurityAssessmentClick}
      className={`flex items-center gap-2 ${className}`}
    >
      <Shield className="w-4 h-4" />
      Take Free Security Assessment
    </Button>
  );
} 