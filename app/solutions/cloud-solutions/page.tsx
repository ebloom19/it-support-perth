import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cloud, CheckCircle } from 'lucide-react'

export default function CloudSolutionsPage() {
  return (
    <div>
      <div className="relative h-[300px] mb-12">
        <Image
          src="/images/server-rack-for-cloud-based-services.webp"
          alt="Cloud Solutions"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Cloud Solutions</h1>
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
                <Link href="/solutions/cloud-solutions" className="text-blue-600 font-bold hover:text-blue-800">
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
              Here's your chance to switch to a stable cloud platform that scales brilliantly and seamlessly.
            </p>
            <p className="mb-4">
              There are many reasons for making the change to a cloud-based storage approach but let's run through the main ones:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>You want all your devices to sync ups seamlessly.</li>
              <li>You want improved collaboration across all people in the company - maybe even with contractors, suppliers and customers.</li>
              <li>You'd like software that updates in the background and a radical simplification of software licences.</li>
              <li>You want to simplify back-ups and have them in the cloud instead of stored on your premises.</li>
              <li>You only want to pay for the storage you use.</li>
              <li>Maybe you're looking to save money on server infrastructure.</li>
              <li>And you'd probably like to lower your overall IT support costs.</li>
            </ul>
            <p className="mb-4">
              All of these are valid reasons.
            </p>
            <p className="mb-4">
              The process starts with a simple analysis of your current sharing and storage arrangements, and business practices. We'll develop a proposal to safely migrate your data to the cloud and then we'll implement that solution. Going forward, we'll adjust as you grow or your requirements alter.
            </p>
            <p className="mb-4">
              We have considerable experience with Microsoft's Office 365 and OneDrive, which we consider an excellent small business solution, but we also have significant experience with VMWare virtualisation and we support other cloud platforms like Azure and Amazon Web Services (AWS).
            </p>
            <p className="mb-4">
              We can put your data center in the cloud, create Linux or Windows machines in a flash, and virtualize your desktops. Why would you do that? Because separating your operating systems, your data and your apps from the devices they run on greatly improves your security. It can also lower your IT support costs.
            </p>
            <p className="mb-8">
              Cloud migration is usually delivered on a project basis.
            </p>

            <h2 className="text-2xl font-bold mb-4">Summary of our cloud services:</h2>
            <ul className="space-y-2 mb-8">
              {[
                "Migration plans for cloud adoption",
                "Cloud platform recommendations",
                "VMWare and Hyper-V virtualization",
                "Office 365 and OneDrive",
                "Amazon Web Services (AWS)",
                "Server and desktop virtualization",
                "On-going monitoring and recommendations"
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