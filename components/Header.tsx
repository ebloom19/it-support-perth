import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Facebook } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from '@/components/mode-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <a
              href="tel:0893251196"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              (08) 9325 1196
            </a>
            <a
              href="https://www.facebook.com/computermechanicsperth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <Image
              width={250}
              height={350}
              src="/images/logo.png"
              alt="IT Support Perth"
            />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="font-medium text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="font-medium text-gray-600 hover:text-gray-900">
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
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="font-medium text-gray-600 hover:text-gray-900">
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
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="font-medium text-gray-600 hover:text-gray-900"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="font-medium text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="font-medium text-gray-600 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
