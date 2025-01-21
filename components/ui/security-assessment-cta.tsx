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
    <Button variant={variant} asChild className={`flex items-center gap-2 ${className}`}>
      <Link href="https://formbricks-production-8051.up.railway.app/s/cm5w8vrn6000gpc01abgpettm">
        <Shield className="w-4 h-4" />
        Take Free Security Assessment
      </Link>
    </Button>
  );
} 