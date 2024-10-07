import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Hammer, PhoneCall, Clock, DollarSign, Briefcase, FileText } from 'lucide-react'

export default function ActiveITSupport() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Ad-hoc IT Support</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <Image
            src="/images/it-consulting.jpg"
            alt="IT Consulting"
            width={300}
            height={200}
            className="float-left mr-4 mb-4 rounded"
          />
          <p className="mb-4">If your maintenance is already under control and you just need some one-off support, we can do that on a competitive hourly rate. The advantage is that you only pay for the hours you actually use.</p>
          <p className="mb-4">There are two scenarios:</p>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">An efficient option is to buy a fixed number of hours and use them gradually whenever you need them. This agreement can include phone support, remote support, workshop repairs or on-site attendance.</li>
            <li>You can pay for work after it's done. This can be on a project basis or pay-as-you-go.</li>
          </ol>
          <p>As soon as we're in a position to know exactly what's involved we can quote on a fixed-price project basis.</p>
          
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
            <Link href="tel:0893251196" className="flex items-center">
              <PhoneCall className="mr-2" />
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
      
      <h2 className="text-2xl font-bold mb-4">When is ad-hoc help appropriate?</h2>
      <p className="mb-4">Ad-hoc help is appropriate for certain kinds of projects, usually short-term with tight time frames and a clear goal.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 text-blue-600" />
              Cost-effective situations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Premises relocation</li>
              <li>Introduction of new VOIP phone systems</li>
              <li>Security audits</li>
              <li>Migrating storage or services to the cloud</li>
              <li>Adoption of new workflows or technology</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2 text-blue-600" />
              Our approach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Often the difference between success and failure in these projects is the degree of collaboration so we will not be shy on the communication side of things.</p>
            <p className="mt-2">Depending on the project, it can be prudent to do a thorough risk assessment before you start. We'll help you with that.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg text-black">
        <h3 className="text-2xl font-bold text-center mb-4">Don't waste any more time</h3>
        <p className="text-center mb-4"><strong>Give us a call today and let us handle your IT so you can handle your business.</strong></p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <Link href="tel:0893251196" className="flex items-center justify-center text-white">
            <PhoneCall className="mr-2" />
            Call us on (08) 9325 1196
          </Link>
        </Button>
      </div>
    </div>
  )
}