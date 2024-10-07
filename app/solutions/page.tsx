import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Laptop, Cloud, Flame, Shield, Phone } from 'lucide-react'

export default function SolutionsPage() {
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
          <h1 className="text-4xl font-bold text-white">Solutions</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 hidden md:block">
          <h2 className="text-2xl font-bold mb-4">Solutions</h2>
          <hr className="border-t-2 border-blue-600 mb-4" />
          <ul className="space-y-2">
            <li>
              <Link href="/solutions/it-support-and-consulting" className="hover:text-blue-800">
                &#8250; IT Support & Consulting
              </Link>
            </li>
            <li>
              <Link href="/solutions/cloud-solutions" className="hover:text-blue-800">
                &#8250; Cloud Solutions
              </Link>
            </li>
            <li>
              <Link href="/solutions/backup-and-disaster-recovery" className="hover:text-blue-800">
                &#8250; Backup and Disaster Recovery
              </Link>
            </li>
            <li>
              <Link href="/solutions/it-security" className="hover:text-blue-800">
                &#8250; IT Security
              </Link>
            </li>
            <li>
              <Link href="/solutions/voip-phone-systems" className="hover:text-blue-800">
                &#8250; VoIP Phone Systems
              </Link>
            </li>
          </ul>
          <hr className="border-t-2 border-blue-600 mt-4" />
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SolutionCard
              title="IT Support & Consulting"
              description="Expert consulting and support to keep you moving"
              icon={Laptop}
              href="/solutions/it-support-and-consulting"
            />
            <SolutionCard
              title="Cloud Solutions"
              description="Professional support and planning for moving you to the cloud"
              icon={Cloud}
              href="/solutions/cloud-solutions"
            />
            <SolutionCard
              title="Backup and Disaster Recovery"
              description="Protect your business from any disaster with secure backups and a solid recovery plan"
              icon={Flame}
              href="/solutions/backup-and-disaster-recovery"
            />
            <SolutionCard
              title="IT Security"
              description="Protect yourself from online threats with advanced email scanning and threat prediction"
              icon={Shield}
              href="/solutions/it-security"
            />
            <SolutionCard
              title="VoIP Phone Systems"
              description="Internet communication backed by trusted hardware and software with professional support"
              icon={Phone}
              href="/solutions/voip-phone-systems"
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
          <h2 className="text-3xl font-bold mb-6">Let Computer Mechanics solve your IT issues today!</h2>
          <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Talk with us
          </Link>
        </div>
      </div>
    </div>
  )
}

function SolutionCard({ title, description, icon: Icon, href }: { icon: any, title: string, description: string, href: string }) {
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
          <p className="text-center mt-2 text-gray-600">{description}</p>
        </CardContent>
      </Link>
    </Card>
  )
}