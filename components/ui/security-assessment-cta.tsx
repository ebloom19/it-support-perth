import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

interface SecurityAssessmentCTAProps {
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export function SecurityAssessmentCTA({ variant = "default", className = "" }: SecurityAssessmentCTAProps) {
  return (
    <Button variant={variant} asChild className={`flex items-center gap-2 ${className}`}>
      <Link href="/services-and-solutions/it-security-solutions#free-security-assessment">
        <Shield className="w-4 h-4" />
        Take Free Security Assessment
      </Link>
    </Button>
  );
} 