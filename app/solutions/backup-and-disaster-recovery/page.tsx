import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Flame, CheckCircle } from 'lucide-react'

export default function BackupAndDisasterRecoveryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[300px] mb-12">
        <Image
          src="/images/young-person-laptop-failure.png"
          alt="Backup and Disaster Recovery"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Backup and Disaster Recovery</h1>
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
              <Link href="/solutions/backup-and-disaster-recovery" className="text-blue-600 font-bold hover:text-blue-800">
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
            Also known as business continuity.
          </p>
          <p className="mb-4">
            The stats are shocking. 55% of businesses have had five or more outages in the past three years and half of these are avoidable. Companies with frequent outages have 15 times higher costs than those that don't. The average ransomware attack causes 16 days of downtime.
          </p>
          <p className="mb-4">
            A Disaster Recovery Plan (DRP) lets a business return its systems to normality after a disaster. It restores access to hardware, software and data. You'll need policies and procedures, and we can help you put that together. For small business they need not be complex.
          </p>
          <p className="mb-4">
            Common causes of failure include device failure (all hard disks die eventually, sometimes suddenly), accidental deletion of data (very common), human error, virus attacks and power outages - something of a specialty in Western Australia. All these need to be considered.
          </p>
          <p className="mb-4">
            The plan should consider backup practices for all devices, including phones and laptops. If the boss is storing work files locally on a home computer that needs attention too.
          </p>
          <p className="mb-4">
            Naturally, we'll schedule data restoration periodically to ensure that backups are working.
          </p>
          <p className="mb-4">
            Small business is a relatively high user of cloud systems and these offer excellent backup solutions. We are expert in Microsoft Office 365 and OneDrive backup. We also do on-premise backup with hard drives.
          </p>
          <p className="mb-4">
            Let us set up a system for you that is well thought-through, tested and if needed gets you back to full operation in minutes.
          </p>
          <p className="mb-8">
            We also recommend an Incident Response Plan, in case of a data breach or cyber attack. Which authorities do you need to notify? Which stakeholders? The Australian Cyber Security Centre? In what circumstances should you issue a press release? We can help you with this planning.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our services:</h2>
          <p className="mb-4 text-sm">(usually delivered through <Link href="/services/managed-it-services" className="text-blue-600 hover:text-blue-800">Managed IT</Link>)</p>
          <ul className="space-y-2 mb-8">
            {[
              "A DRP that covers servers, systems, applications and data at the office and in the cloud.",
              "A DRP that specifies each step in the recovery process",
              "State of the art backup technology",
              "Office 365 cloud infrastructure and OneDrive backup",
              "Local storage and backup",
              "Reporting that verifies backups",
              "Incident Response Plans",
              "Ransomware prevention"
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="mr-2 text-blue-600" />
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