import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

export default function ITSupportAndConsultingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[300px] mb-12">
        <Image
          src="/images/photo-of-people-doing-handshakes-3183197.png"
          alt="IT Support & Consulting"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">IT Support & Consulting</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 hidden md:block">
          <h2 className="text-2xl font-bold mb-4">Solutions</h2>
          <hr className="border-t-2 border-blue-600 mb-4" />
          <ul className="space-y-2">
            <li>
              <Link href="/solutions/it-support-and-consulting" className="text-blue-600 font-bold hover:text-blue-800">
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
          <p className="mb-4">
            If you're a small or medium-sized business you probably don't want to employ your own IT people. You can outsource your IT department to Computer Mechanics, using as many of our resources as you need, and vary it over time without the cost of full-time employees or expensive consultants.
          </p>
          <p className="mb-4">
            We'll handle your servers and network infrastructure, your workstations and mobile devices; it's essentially end-to-end.
          </p>
          <p className="mb-4">
            We're immersed in IT and have a network of contacts to draw on if you have obscure software or systems. In short, we're a flexible, elite team and a cost-efficient IT solution.
          </p>
          <p className="mb-4">
            What does this look like on a day-to-day basis? Usually it's <Link href="/services/managed-it-services" className="text-blue-600 hover:text-blue-800">Managed IT</Link> that includes a customised plan for your business. It takes into account your short-term needs and your long-term goals. It includes the ability to call us and ask advice on any problems without worrying about incurring additional costs. It includes on-going support - that means we monitor your network performance, fix problems before they become downtime and suggest changes when they are economically sensible.
          </p>
          <p className="mb-4">
            And of course, you'll have peace of mind around security and back-up practices.
          </p>
          <p className="mb-8">
            All the above is customised to your actual needs; not a package deal.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our services include:</h2>
          <ul className="space-y-2 mb-8">
            {[
              "Monitoring, automation and technical support around all your IT systems",
              "Network and infrastructure planning across Windows, Linux and Mac",
              "Project planning and execution, eg expansion, consolidation, cloud migration",
              "Assistance developing an IT strategy and with specific policies",
              "Security audits, improvements and suggestions",
              "Business continuity - backup and disaster recovery",
              "Assistance re cost-saving decisions on software licensing and hardware purchases"
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="mr-2 text-blue-600" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
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
          <Link href="/contact-us">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Talk with us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}