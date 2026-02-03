import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, ChevronRight, ChevronLeft } from 'lucide-react'

const reviews = [
  {
    name: "Matt Clark",
    rating: 5,
    text: "Handy location in Northbridge. The guys at IT Support Perth were prompt at fixing my laptop on the same day, and went the extra mile to reset my laptop password. Very helpful and reasonably priced. Would highly recommend!"
  },
  {
    name: "Jake Murray",
    rating: 4,
    text: "Good for general repairs, not really for niche stuff. Clear and responsive service, would recommend for fixing your laptop or PC if you're not sure on how to yourself."
  },
  {
    name: "Kieran L",
    rating: 5,
    text: "Quick, friendly and professional. PC wasn't turning on due to a faulty PSU. The issue was diagnosed and the part replaced promptly and efficiently. Thanks!"
  },
  {
    name: "Michael Hollick",
    rating: 5,
    text: "Good source of information, knowledgeable staff that are friendly and easy to deal with."
  },
  {
    name: "David Gray",
    rating: 5,
    text: "Many thanks Brett for your good advice relating to a dead hard drive, and prompt service."
  },
  {
    name: "Justin Scotchbrook",
    rating: 5,
    text: "Fantastic. Fixed the problem and I had my laptop back the next day"
  },
  {
    name: "Sean Keenan",
    rating: 5,
    text: "A no-frills shop without a fancy storefront, but the guys inside know their stuff and get the job done. Turned out a part they put into my computer had a very small manufacturing fault -- they promptly re-ordered a now one and replaced it without fuss or delay."
  },
  {
    name: "Ryan Dosselli",
    rating: 5,
    text: "Amazing efficiency, the issue on my laptop was identified almost immediately and fixed as fast as you could expect. I also got clear explanations of what was going on and what needed to be done. I would recommend IT Support Perth!"
  }
]

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Customer Reviews</h1>
      
      <div className="mb-8 text-center">
        <p className="mb-4 text-foreground">Our customers say nice things about us and we are highly rated for IT support on Google Reviews. If you're a small or medium-sized business in Perth needing Managed IT support, network management, ad-hoc support or computer repairs, please call us up and kick the tyres.</p>
        <div className="flex justify-center items-center mb-4">
          <span className="text-3xl font-bold mr-2 text-foreground">4.6</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-yellow-400" fill={star <= 4 ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="ml-2 text-muted-foreground">67 reviews</span>
        </div>
        <p className="mb-4 text-foreground">Don't trust hand-picked reviews on a website? All these reviews are available on our Google Business Page.</p>
        <Link href="https://www.google.com/search?q=computer+mechanics+perth+reviews" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            View Reviews on Google
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{review.name}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400" fill={star <= review.rating ? "currentColor" : "none"} />
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" disabled>
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button variant="outline">
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}