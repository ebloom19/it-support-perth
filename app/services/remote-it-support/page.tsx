import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react'

export default function RemoteITSupport() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Remote IT Support</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <p className="mb-4">Our focus is to provide the best service and support to customers. We do this by providing in workshop, on site and remote support. But why Remote support? With Remote support we can provide a service almost identical to an on site visit at a fraction of the cost and in a fraction of the time. No sitting around waiting for the technician to arrive.</p>
          
          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
            We service small and medium businesses up to and beyond 100 users. Remote support lets us monitor and offer support for users without a travel time. We are working on a problem remotely within minutes, instead of hours.
          </blockquote>
          
          <p className="mb-4">We remotely manage user terminals, Windows and Linux based servers and BYO style devices (tablets, phones etc.) all from our Perth workshop.</p>
          
          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="text-center">
              <Phone size={48} className="mx-auto text-blue-500 mb-2" />
            </div>
            <div className="text-center">
              <Mail size={48} className="mx-auto text-blue-500 mb-2" />
            </div>
            <div className="text-center">
              <MessageSquare size={48} className="mx-auto text-blue-500 mb-2" />
            </div>
          </div>
          
          <p className="mb-4">Backed by the leading remote support software available our service is fast and easy to get started. We can organise remote work via a quick phone call, an email or you can even drop in for a quick chat and discuss a time and date when you want work to be done.</p>
          <p className="mb-4">No hidden charges for starting a connection or hidden fees for the work done. We offer a great rate for non-contract work and include the remote work in our service contracts.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Our Expertise</h3>
          <p className="mb-4">Over the last 20 years we have built up a vast amount of knowledge and experience working on all kinds of computers, laptops, tablets, phones and anything else you can think of. We have done work for private home users, small and medium businesses, government and even schools.</p>
          <p className="mb-4">We offer our services to a wide range of services from Virus Cleanup to installing and setting up printers/software. We can help sort out your problems, safely, remotely and quickly.</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg text-black">
          <h4 className="text-xl font-semibold mb-4">Get an answer</h4>
          <p className="mb-4">Have a quick question you'd like answered within 30 minutes? Fill in the details below and we'll give you a call straight back.</p>
          {/* Add your contact form component here */}
        </div>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Key features</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">We provide a large number of services via our Remote Support system. Below is a quick list for you to glance over.</p>
          <ul className="space-y-2">
            {[
              "100% Secure, Safe and Under your control",
              "Prices given up front. No hidden fees or additional software purchases",
              "Anti-Virus friendly. No need to turn off security",
              "See everything we are doing. No hiding screens or blocking out windows",
              "Hardware installation and set up remotely"
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="mr-2 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg text-black">
        <h3 className="text-2xl font-bold text-center mb-4">Need Remote IT Support?</h3>
        <p className="text-center mb-4"><strong>Contact us today to get started with our efficient and cost-effective remote IT support services.</strong></p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <Link href="tel:0893251196" className="flex items-center justify-center text-white">
            <Phone className="mr-2" />
            Call us on (08) 9325 1196
          </Link>
        </Button>
      </div>
    </div>
  )
}