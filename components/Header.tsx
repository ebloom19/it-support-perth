"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Facebook, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from '@/components/mode-toggle';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'News/Blog', href: '/news' },
  { name: 'Magazines', href: '/magazines' },
  { name: 'eBay Store', href: 'http://stores.ebay.com.au/C-Red-Tuning', external: true },
  { name: 'About Us', href: '/about-us' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)


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
            <Link href="/services">Services</Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href="/services/managed-it-services"
                className="w-full"
              >
                Managed IT Services
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/services/ad-hoc-it-support"
                className="w-full"
              >
                Adhoc IT Support
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/services/remote-it-support"
                className="w-full"
              >
                Remote IT Support
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="font-medium text-left transition-colors hover:text-foreground/80 text-foreground/60">
            <Link href="/solutions">Solutions</Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href="/solutions/it-support-and-consulting"
                className="w-full"
              >
                IT Support & Consulting
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/solutions/cloud-solutions"
                className="w-full"
              >
                Cloud Solutions
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/solutions/backup-and-disaster-recovery"
                className="w-full"
              >
                Backup and Disaster Recovery
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/solutions/it-security" className="w-full">
                IT Security
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/solutions/voip-phone-systems"
                className="w-full"
              >
                VoIP Phone Systems
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
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col items-center justify-center">
      <div className="container flex h-25 items-center justify-between">
        <div className="flex flex-row items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 pl-2 pt-3">
          <Image
              width={180}
              height={250}
              src="/images/logo.png"
              alt="IT Support Perth"
            />
            {/* <span className="hidden font-bold sm:inline-block">C-Red Tuning</span> */}
          </Link>
          <a
              href="tel:0893251196"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              (08) 9325 1196
            </a>
            <a
              href="https://www.facebook.com/computermechanicsperth/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              <Facebook className="w-5 h-5 mr-3" />
            </a>
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
              <Menu className="h-5 w-5 mr-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0 w-1/3">
            <nav className="flex flex-col gap-4">
              <AllLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
