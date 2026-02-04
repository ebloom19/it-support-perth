"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import ITSupportPerthLogo from "@/svgs/1.1.svg";
import ITSupportPerthText from "@/svgs/it-support-perth-text.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const AllLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => {
    return (
      <>
        <Link
          href="/"
          className="font-medium transition-colors text-foreground/80 hover:text-foreground/60 dark:text-white dark:hover:text-foreground/80"
          onClick={onLinkClick}
        >
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="font-medium text-left transition-colors text-foreground/80 hover:text-foreground/60 dark:text-white dark:hover:text-foreground/80">
            <Link href="/services-and-solutions">Our Services</Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72">
            {/* Core Services - Prominent */}
            <div className="px-2 py-1">
              <div className="text-xs font-semibold text-[#3c91e6] uppercase tracking-wide mb-2">Core Services</div>
            </div>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/managed-it-services-provider" className="w-full" onClick={onLinkClick}>
                <div>
                  <div className="font-semibold text-foreground">Managed IT Services</div>
                  <div className="text-xs text-muted-foreground">24/7 proactive support & monitoring</div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/it-security-solutions" className="w-full" onClick={onLinkClick}>
                <div>
                  <div className="font-semibold text-foreground">IT Security Solutions</div>
                  <div className="text-xs text-muted-foreground">Comprehensive cybersecurity protection</div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/cloud-services" className="w-full" onClick={onLinkClick}>
                <div>
                  <div className="font-semibold text-foreground">Cloud Services & Migration</div>
                  <div className="text-xs text-muted-foreground">Scalable Microsoft 365 & Azure solutions</div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/backup-and-disaster-recovery-solutions" className="w-full" onClick={onLinkClick}>
                <div>
                  <div className="font-semibold text-foreground">Backup & Disaster Recovery</div>
                  <div className="text-xs text-muted-foreground">Business continuity & data protection</div>
                </div>
              </Link>
            </DropdownMenuItem>
            
            {/* Divider */}
            <div className="border-t border-border my-2"></div>
            
            {/* Additional Services - Less Prominent */}
            <div className="px-2 py-1">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Additional Services</div>
            </div>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/it-consulting" className="w-full" onClick={onLinkClick}>
                <div>
                  <div className="font-medium text-muted-foreground">IT Consulting</div>
                  <div className="text-xs text-muted-foreground/70">Strategic technology guidance</div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/on-premises-server-management" className="w-full" onClick={onLinkClick}>
                <div>
                  <div className="font-medium text-muted-foreground">Server Management</div>
                  <div className="text-xs text-muted-foreground/70">On-premises infrastructure support</div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/firewall-service" className="w-full" onClick={onLinkClick}>
                <div>
                  <div className="font-medium text-muted-foreground">Firewall Services</div>
                  <div className="text-xs text-muted-foreground/70">Network security & protection</div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/email-protection-service" className="w-full" onClick={onLinkClick}>
                <div>
                  <div className="font-medium text-muted-foreground">Email Protection</div>
                  <div className="text-xs text-muted-foreground/70">Anti-spam & email security</div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/ai-enhanced-it-support" className="w-full" onClick={onLinkClick}>
                <div>
                  <div className="font-medium text-muted-foreground">AI-Enhanced Support</div>
                  <div className="text-xs text-muted-foreground/70">Smart automation & monitoring</div>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="/reviews"
          className="font-medium transition-colors text-foreground/80 hover:text-foreground/60 dark:text-white dark:hover:text-foreground/80"
          onClick={onLinkClick}
        >
          Reviews
        </Link>
        <Link
          href="/about-us"
          className="font-medium transition-colors text-foreground/80 hover:text-foreground/60 dark:text-white dark:hover:text-foreground/80"
          onClick={onLinkClick}
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="font-medium transition-colors text-foreground/80 hover:text-foreground/60 dark:text-white dark:hover:text-foreground/80"
          onClick={onLinkClick}
        >
          Contact Us
        </Link>
        <ModeToggle />
      </>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col items-center justify-center py-0 my-0 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="max-w-7xl mx-auto flex h-auto py-2 sm:py-3 md:h-16 lg:h-24 items-center justify-between gap-2 sm:gap-3 min-w-0 overflow-hidden">
          <div className="flex flex-row items-center min-w-0 flex-1 gap-2 sm:gap-3 md:gap-4 overflow-hidden">
            <Link href="/" title="IT Support Perth" className="flex items-center gap-2 sm:gap-3 md:gap-4 pr-2 sm:pr-3 md:pr-4 shrink-0 min-w-0 overflow-hidden">
              <ITSupportPerthLogo
                width={60}
                height={80}
                className="w-[40px] h-[52px] sm:w-[48px] sm:h-[64px] md:w-[54px] md:h-[72px] lg:w-[58px] lg:h-[78px] shrink-0"
                fill="#fff"
                alt="IT Support Perth"
              />
              <ITSupportPerthText
                width={140}
                height={70}
                className="w-[70px] h-[44px] sm:w-[95px] sm:h-[52px] md:w-[115px] md:h-[58px] lg:w-[130px] lg:h-[65px] text-foreground shrink-0 min-w-0 max-w-[50vw] md:max-w-none"
                fill="currentColor"
                alt="IT Support Perth"
              />
            </Link>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
              <a
                href="tel:0893251196"
                className="text-xs sm:text-sm md:text-base font-medium transition-colors text-foreground/80 hover:text-foreground/60 dark:text-white dark:hover:text-foreground/80 whitespace-nowrap truncate max-w-[120px] sm:max-w-[140px] md:max-w-none"
              >
                (08) 9325 1196
              </a>
              <Link
                href="https://www.facebook.com/computermechanicsperth/"
                title="IT Support Perth Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-foreground/80 hover:text-foreground/60 dark:text-white dark:hover:text-foreground/80 shrink-0"
              >
                <Facebook className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm xl:text-base font-normal shrink-0">
            <AllLinks />
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 sm:px-3 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden shrink-0"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] max-w-[340px] sm:w-[350px] md:max-w-[380px] pr-0">
              <nav className="flex flex-col gap-4">
                <AllLinks onLinkClick={() => setIsOpen(false)} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
