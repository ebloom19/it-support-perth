import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, CheckCircle } from 'lucide-react'

export default function VoIPPhoneSystemsPage() {
  return (
    <div>
      <div className="relative h-[300px] mb-12">
        <Image
          src="/images/landing.webp"
          alt="VoIP Phone Systems"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">VoIP Phone Systems</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
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
                <Link href="/solutions/voip-phone-systems" className="text-blue-600 font-bold hover:text-blue-800">
                  &#8250; VoIP Phone Systems
                </Link>
              </li>
            </ul>
            <hr className="border-t-2 border-blue-600 mt-4" />
          </div>

          <div className="md:col-span-3">
            <p className="mb-4">
              Get your phone system talking to your computer systems. That's the reason VoIP has become so popular; it lets you connect your voice calls with SMS messaging, your contacts database and gives you advanced conferencing capabilities. Video meetings, conference calls and webinars become part of your normal workflow, instead of something requiring IT support.
            </p>
            <p className="mb-4">
              You can have unrestricted video and audio meetings with screen sharing. No time wasted setting up conferences, just pick up the phone.
            </p>
            <p className="mb-4">
              Our systems include IVR (Interactive Voice Response) functionality. You have the option of an automated system that screens callers and gathers information before routing them to the correct person or department. Properly done this saves interruptions to key staff and reduces waiting times for customers. It's important to your business that the IVR is well-designed. For example, how many menus will the caller need to hear before they speak to a live person? Will they be able to skip-ahead? Will they be able to select options from a mobile phone screen? We strongly recommend you don't try and design the system on your own.
            </p>
            <p className="mb-4">
              IVR alone offers increased productivity and significant cost savings. Other VoIP features like call recording, SMS integration and voicemail-to-email can improve your workflow.
            </p>
            <p className="mb-4">
              As a digital IP system, VoIP syncs with any mobile or Internet-based device. It's ideal for a distributed workforce.
            </p>
            <p className="mb-4">
              You'll be able to keep your existing phone numbers and we'll configure the system to your business set-up. We then install the phones, train your staff in using the system (critical), and manage the system on an on-going basis. That means (1) being available to answer questions from any of your staff and onboarding new employees if necessary and (2) reviewing periodically how well the system is working for callers.
            </p>
            <p className="mb-8">
              VoIP installations are usually delivered on a project basis though ongoing support would often be via <Link href="/services/managed-it-services" className="text-blue-600 hover:text-blue-800">Managed IT</Link>.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our services in VoIP:</h2>
            <ul className="space-y-2 mb-8">
              {[
                "Custom-designed, feature-rich phone systems",
                "Installation and on-going support",
                "Multi-level IVR menu design",
                "Increased mobility with iOS and Android apps",
                "Video and audio conferencing",
                "Call switching between devices"
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-2 text-blue-600" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative h-[300px] mt-12">
        <Image
          src="/images/business-businessmen-classroom-communication.webp"
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