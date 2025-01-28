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
      <Link href="https://forms.itsupportperth.net.au/s/v0alkpvqw3av83v8wcxghd54">
        <Shield className="w-4 h-4" />
        Take Free Security Assessment
      </Link>
    </Button>
  );
} 