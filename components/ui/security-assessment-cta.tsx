"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import formbricks from "@formbricks/js";

interface SecurityAssessmentCTAProps {
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export function SecurityAssessmentCTA({ variant = "default", className = "" }: SecurityAssessmentCTAProps) {
  return (
    <Button variant={variant} onClick={() => formbricks.track("security_assesment")} asChild className={`flex items-center gap-2 ${className}`}>
      <Button>
        <Shield className="w-4 h-4" />
        Take Free Security Assessment
      </Button>
    </Button>
  );
} 