"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

export default function ContactUsPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast()

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       toast({
  //         title: "Success",
  //         description: "Your message has been sent successfully!",
  //       })
  //       reset();
  //     } else {
  //       throw new Error('Failed to submit form');
  //     }
  //   } catch (error) {
  //     toast({
  //       title: "Error",
  //       description: "Failed to send message. Please try again.",
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  };

  return (
    <div>
      <div className="relative h-[400px] mb-12">
        <Image
          src="/images/IMAG02331-washed1.webp"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-sm text-black">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-4">
                We understand that all businesses are different. That is why we tailor each support package to the company so you get what you need, not just what an IT Support company thinks you want.
              </p>
              <p className="text-center mb-6">
                If you give us a call today we will organise one of our IT Support technicians to visit your site, assess what your requirements will be and then we can create a custom made support package for your company.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="tel:0894638600" className="flex items-center justify-center">
                  <Phone className="mr-2" />
                  (08) 9463 8600
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Your Name (required)</label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className={errors.name ? "border-red-500" : ""}
                />
                {/* {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>} */}
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Your Email (required)</label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={errors.email ? "border-red-500" : ""}
                />
                {/* {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} */}
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">Subject</label>
                <Input id="subject" {...register("subject")} />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Your Message</label>
                <Textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className={errors.message ? "border-red-500" : ""}
                />
                {/* {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>} */}
              </div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Button>
            </form>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>IT Support Perth</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p>75B Brewer Street</p>
                    <p>Perth, 6000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 flex-shrink-0" />
                  <p><a href="tel:0894638600">08 9463 8600</a></p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 flex-shrink-0" />
                  <p><a href="mailto:info@itsupportperth.net">info@itsupportperth.net</a></p>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Opening Hours:</p>
                    <p>Monday - Friday: 09:00 - 17:30</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4562893188!2d115.86185731532598!3d-31.94945798122047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5f8a2c9f7%3A0x5e9b5e4cee2f0f0!2s75B%20Brewer%20St%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="IT Support Perth Location"
                  // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
