import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  Coffee,
  Shield,
  Brain,
  Users,
  Heart,
  Wrench,
  Zap,
  CheckCircle 
} from 'lucide-react'

export default function AboutUsPage() {
  const values = [
    {
      icon: Brain,
      title: "Tech Made Simple",
      description: "We make tech simple - no jargon, just clear solutions",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We're always one step ahead with the latest innovations",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "We treat your business like our own",
    },
    {
      icon: Users,
      title: "Human Connection",
      description: "We're real people who genuinely care about your success",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "We believe in building relationships, not just fixing computers",
    }
  ];

  const team = [
    {
      name: "Garry",
      role: "Senior IT Manager and Computer Repair Specialist",
      description: "Garry brings a wealth of experience with 25 years in IT management and support, spanning both internal and external service provider roles. His expertise covers a broad spectrum of the IT field, demonstrating a seasoned career that includes managing complex IT environments and providing top-tier support.",
      image: "/images/team/garry.webp"
    },
    {
      name: "Brett",
      role: "Senior IT Manager and Computer Repair Specialist",
      description: "Brett has been with Computer Mechanics for over 15 years. He has exemplified IT excellence through his comprehensive industry knowledge and ability to rapidly diagnose issues. His dedication and skills have not only enhanced our service quality but have also played a crucial role in building trust and reliability among our valued customers.",
      image: "/images/team/brett.webp"
    },
    {
      name: "Amir",
      role: "Lead Computer Repair Technician",
      description: "Amir brings over a decade of expertise to the IT industry, specializing in a broad array of technologies including server management, networking, cloud solutions, virtualisation, and troubleshooting computer systems.",
      image: "/images/team/amir.webp"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/images/about-us-hero.webp"
          alt="About IT Support Perth"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Where Tech Meets Trust</h1>
          <p className="text-lg md:text-xl">
            Making technology work for Perth businesses since 1997
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              What started as a humble computer repair shop has grown into something truly special. 
              Our founder, Garry Bloom, began with a vision of making technology accessible and reliable 
              for local businesses.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, he channels his decades of experience into mentoring our talented team, ensuring 
              every staff member delivers the same level of excellence and personal care that built 
              our reputation. It's this blend of seasoned expertise and fresh innovation that keeps 
              us at the forefront of IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why People Love Working With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <value.icon className="w-8 h-8 text-primary" />
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Talented Team</h2>
            <p className="text-lg text-muted-foreground">
              Our team, brimming with enthusiasm and commitment, combines a wide array of capabilities 
              and proficiency, all aimed at delivering top-notch IT solutions. From tech-savvy innovators 
              to detail-oriented troubleshooters, we work in unison to go beyond our clients' expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl mb-2">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

            <Card>
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Ready to make technology work for you? Let's chat over a coffee and discover 
                  how we can help your business thrive in the digital world.
                </p>
                <Link href="/contact-us">
                  <Button size="lg" className="w-full">
                    <Coffee className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}