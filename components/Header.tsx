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


const navItems = [
  { name: "Home", href: "/" },
  { name: "News/Blog", href: "/news" },
  { name: "Magazines", href: "/magazines" },
  {
    name: "eBay Store",
    href: "http://stores.ebay.com.au/C-Red-Tuning",
    external: true,
  },
  { name: "About Us", href: "/about-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const AllLinks = () => {
    return (
      <>
        <Link
          href="/"
          className="font-medium transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="font-medium text-left transition-colors hover:text-foreground/80 text-foreground/60">
            <Link href="/services-and-solutions">Services & Solutions</Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/ai-enhanced-it-support" className="w-full">
                AI-Enhanced IT Support
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/managed-it-services-provider" className="w-full">
              Managed IT Services Provider
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/it-consulting" className="w-full">
                IT Consulting
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/cloud-services" className="w-full">
                Cloud Services
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/on-premises-server-management" className="w-full">
                On-Premises Server Management
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/backup-and-disaster-recovery-solutions" className="w-full">
                Backup & Disaster Recovery Solutions
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/it-security-solutions" className="w-full">
                IT Security Solutions
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/email-protection-service" className="w-full">
                Email Protection Services
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services-and-solutions/firewall-service" className="w-full">
                Firewall Services
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="/reviews"
          className="font-medium transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Reviews
        </Link>
        <Link
          href="/about-us"
          className="font-medium transition-colors hover:text-foreground/80 text-foreground/60"
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="font-medium transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Contact Us
        </Link>
        <ModeToggle />
      </>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col items-center justify-center px-5 md:px-0">
      <div className="container flex h-auto py-2 md:h-25 items-center justify-between">
        <div className="flex flex-row items-center space-x-2 md:space-x-4">
          <Link href="/" className="flex items-center space-x-2 md:space-x-6 pr-2 md:pr-4">
            <ITSupportPerthLogo
              width={60}
              height={80}
              className="w-[60px] h-[80px] md:w-[90px] md:h-[125px]"
              fill="#fff"
              alt="IT Support Perth"
            />
            <ITSupportPerthText
              width={140}
              height={70}
              className="w-[110px] h-[70px] md:w-[200px] md:h-[100px]"
              fill="#000"
              alt="IT Support Perth"
            />
          </Link>
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="tel:0893251196"
              className="text-xs md:text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              (08) 9325 1196
            </a>
            <a
              href="https://www.facebook.com/computermechanicsperth/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <AllLinks />
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[350px] pr-0">
            <nav className="flex flex-col gap-4">
              <AllLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
