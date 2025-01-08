import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Server, Hammer, Wifi } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[300px] mb-12">
        <Image
          src="/images/photo-of-people-doing-handshakes-3183197.png"
          alt="People shaking hands"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Services</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 hidden md:block">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <hr className="border-t-2 border-blue-600 mb-4" />
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/managed-it-services"
                className="hover:text-blue-800"
              >
                &#8250; Managed IT Support
              </Link>
            </li>
            <li>
              <Link
                href="/services/ad-hoc-it-support"
                className="hover:text-blue-800"
              >
                &#8250; Adhoc IT Support
              </Link>
            </li>
            <li>
              <Link
                href="/services/remote-it-support"
                className="hover:text-blue-800"
              >
                &#8250; Remote Support
              </Link>
            </li>
          </ul>
          <hr className="border-t-2 border-blue-600 mt-4" />
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Managed IT"
              icon={Server}
              href="/services/managed-it-services"
            />
            <ServiceCard
              title="Adhoc IT"
              icon={Hammer}
              href="/services/ad-hoc-it-support"
            />
            <ServiceCard
              title="Remote Support"
              icon={Wifi}
              href="/services/remote-it-support"
            />
          </div>
        </div>
      </div>

      <div className="relative h-[300px] mt-12">
        <Image
          src="/images/business-businessmen-classroom-communication-267507.png"
          alt="Business communication"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Let Computer Mechanics solve your IT issues today!
          </h2>
          <Link
            href="/contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Talk with us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, icon: Icon, href }: { icon: any, title: string, href: string }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <Link href={href}>
        <CardHeader>
          <div className="w-full h-48 flex items-center justify-center">
            <Icon size={100} className="text-blue-600" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardContent>
      </Link>
    </Card>
  );
}
