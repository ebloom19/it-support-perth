import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Shield, Phone, Cloud, Flame, Laptop } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(40vh-4rem)] bg-black">
        <Image
          src="/images/landing.webp"
          alt="Computer Mechanics"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IT Support Perth
          </h1>
          <p className="text-xl mb-8">
            23 years of straight advice, quick turnarounds and trouble-shooting
          </p>
          <Button asChild>
            <Link href="/contact-us">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Laptop className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>IT Support & Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Expert IT support and consulting services for your business
                  needs.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/solutions/it-support-and-consulting">
                    Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>IT Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Protect your business with our comprehensive IT security
                  solutions.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/solutions/it-security">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Flame className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle>Backup and Disaster Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ensure business continuity with our backup and disaster
                  recovery services.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/solutions/backup-and-disaster-recovery">
                    Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            What makes us different?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground">
            <div>
              <p className="mb-4">
                As a business, as a culture, we're all about efficient use of
                time.
              </p>
              <p className="mb-4">
                We take pride in three things: straight advice, fixing things
                fast and solving problems.
              </p>
              <p>
                Our main customers are small to medium-sized businesses who want
                outsourced IT that is a match for their circumstances rather
                than being locked-in to a 12 month package.
              </p>
            </div>
            <div>
              <p className="mb-4">
                We offer flexible Managed IT where you can change the service
                offering as you go. And you can walk away with a month's notice.
              </p>
              <p className="mb-4">
                The real value here is anticipating problems so that your
                systems become resilient with absolutely minimal downtime.
              </p>
              <p>
                Give us a call if you'd like to talk over a specific problem or
                decision. That's a pretty good way to check us out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
          <div className="flex flex-row items-center justify-center gap-5 flex-wrap">
            <Image
              src="/images/partners/HP.png"
              alt="HP"
              width={150}
              height={80}
            />
            <Image
              src="/images/partners/Dell.png"
              alt="Dell"
              width={150}
              height={80}
            />
            <Image
              src="/images/partners/M365.png"
              alt="Microsoft 365"
              width={150}
              height={80}
            />
            <Image
              src="/images/partners/webroot.png"
              alt="Webroot"
              width={150}
              height={80}
            />
            <Image
              src="/images/partners/3cx.png"
              alt="3CX"
              width={150}
              height={80}
            />
            <Image
              src="/images/partners/veeam.png"
              alt="Veeam"
              width={150}
              height={80}
            />
            <Image
              src="/images/partners/VMWARE.png"
              alt="VMware"
              width={150}
              height={80}
            />
            <Image
              src="/images/partners/linux.png"
              alt="Linux"
              width={150}
              height={80}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
