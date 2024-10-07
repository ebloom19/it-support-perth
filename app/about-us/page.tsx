import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[300px] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Computer Mechanics is a highly-regarded IT support business based in Perth, Western Australia. Since 1997, we've been providing valuable computer advice, outsourced management, and troubleshooting for small organizations. We're resourceful, reliable, proactive, and cost-effective.
          </p>
          <p className="mb-4">
            Our journey began as a small repairs company doing desktop computer repairs for home users. We quickly evolved to helping small and medium businesses with their broader IT needs. The co-founder, Garry Bloom, is still active and hands-on in the business.
          </p>
          <p className="mb-8">
            Over the years, we have supported hundreds of small and medium-sized businesses with troubleshooting, advice, maintenance, and technology upgrades. We keep abreast of state-of-the-art technologies and can assist with systems administration, networking, cloud computing, online file storage, mail, and website hosting.
          </p>

          <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
          <ul className="list-disc list-inside mb-8">
            <li>IT Support & Consulting</li>
            <li>Cloud Solutions</li>
            <li>Backup and Disaster Recovery</li>
            <li>IT Security</li>
            <li>VoIP Phone Systems</li>
          </ul>

          <Link href="/contact-us">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get in Touch
            </Button>
          </Link>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <p>75B Brewer Street, Perth, WA 6000</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <p><a href="tel:0894638600">08 9463 8600</a></p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <p><a href="mailto:info@itsupportperth.net">info@itsupportperth.net</a></p>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <p>Mon-Fri: 9:00 AM - 5:30 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>23+ years of experience</li>
                <li>Highly rated on Google Reviews</li>
                <li>Tailored solutions for small and medium businesses</li>
                <li>Proactive and cost-effective approach</li>
                <li>Expertise in latest technologies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 bg-gray-100 p-8 rounded-lg text-black">
        <h2 className="text-3xl bg-transparent font-bold mb-4 text-center">Our Mission</h2>
        <p className="text-center text-lg">
          To provide high-quality, affordable IT support and solutions that empower small and medium-sized businesses to thrive in the digital age.
        </p>
      </div>
    </div>
  )
}