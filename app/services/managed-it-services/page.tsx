import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Fire, Wifi, AlertTriangle, Usb, Shield, StickyNote, Flame, Lock, Mail, ChevronsLeftRightEllipsis } from 'lucide-react'

export default function ManagedITServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Providing Perth businesses with Managed IT Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <Image
            src="/images/small-biz-tablets2.jpg"
            alt="Business tablets"
            width={300}
            height={200}
            className="float-left mr-4 mb-4 rounded"
          />
          <p className="mb-4">We can be the most use in Managed IT if we get a detailed understanding of your current setup and understand where you're heading as a business. Then we design a monthly arrangement that gives you what you need, and nothing more.</p>
          <p className="mb-4">So first, we have a discussion about what you're currently doing and what your history is.</p>
          <p className="mb-4">Then we do some discovery - we'll ask you some questions about why you're doing it that way and in the process you'll almost certainly get advice you can act on - with or without hiring us. At the end of that process we'll know enough to be able to quote you for an itemised list of services and you'll probably know whether you want an ongoing relationship with us.</p>
          <p className="mb-4">The advantage of a bespoke contract with Computer Mechanics is that you can adjust your IT service over time, rather than committing to a 'standard package'. Between the two of us we'll work out where we can add the most value - purchasing decisions, growth strategies, cost savings, software patching, network monitoring, server upgrades, security improvements, automation or help desk. Ad hoc situations like premises relocation, new VOIP phone systems or migrations to the cloud can be dealt with separately.</p>
          <p>Here is a taste of things you may want in your contract - remember that everything is optional.</p>
          
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
            <Link href="tel:0893251196" className="flex items-center">
              <Mail className="mr-2" />
              Call us on (08) 9325 1196
            </Link>
          </Button>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg text-black">
          <h4 className="text-xl font-semibold mb-4">Get an answer</h4>
          <p className="mb-4">Have a quick question you'd like answered within 30 minutes? Fill in the details below and we'll give you a call straight back.</p>
          {/* Add your contact form component here */}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ServiceFeature
            icon={Flame}
            title="Our 000 service"
            description="Pick up the phone and speak to someone whenever you have a problem. We can make the support level as broad as 'help us with any software issue' or as narrow as 'just network issues'."
          />
          <ServiceFeature
            icon={Wifi}
            title="Network maintenance"
            description="We design network maintenance with maximum automation. We'll do event logging and monitoring and alert you to any problem; in most cases, before it occurs."
          />
          <ServiceFeature
            icon={AlertTriangle}
            title="Disaster recovery process"
            description="This may include re-designing your backup processes but it will definitely include a regular recovery drill so that you know for sure that whatever happens, you're covered."
          />
          <ServiceFeature
            icon={Usb}
            title="Hardware support"
            description="We have a fully-equipped workshop facility. We can draft a Service Level Agreement (SLA) which includes a rapid turnaround service for servers, desktops, laptops and tablets, and regular maintenance programs."
          />
        </div>
        <div>
          <ServiceFeature
            icon={Shield}
            title="Cyber Security"
            description="Our service normally centres on application security and network security, but we can also advise on cloud security and device security (e.g. Internet of Things)."
          />
          <ServiceFeature
            icon={StickyNote}
            title="Policy development"
            description="Do you have a Data Breach Plan? Do you conform to the Privacy and Data Protection Act? We can help develop and implement policy."
          />
          <ServiceFeature
            icon={ChevronsLeftRightEllipsis}
            title="Website support"
            description="We can host your website, help add content, add marketing automation tools and manage update issues or software conflicts."
          />
          <ServiceFeature
            icon={Lock}
            title="Password management"
            description="For many small businesses or SMEs this is an ongoing battle. We can help with best practices internally as well as solving lost password issues."
          />
          <ServiceFeature
            icon={Mail}
            title="Email support"
            description="Spam remediation, adding accounts, managing passwords and security practices."
          />
        </div>
      </div>
      
      <div className="mt-12 bg-blue-50 border-2 border-blue-200 p-6 rounded-lg text-black">
        <h3 className="text-2xl font-bold text-center mb-4">Take one step</h3>
        <p className="text-center mb-4"><strong>You should allow 20 minutes for a kick-off conversation - we do that at no cost.</strong></p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <Link href="tel:0893251196" className="flex items-center justify-center text-white">
            <Mail className="mr-2" />
            Call us while it's top of mind: (08) 9325 1196
          </Link>
        </Button>
      </div>
    </div>
  )
}

function ServiceFeature({ icon: Icon, title, description }) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon className="mr-2 text-blue-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}