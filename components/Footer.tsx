import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary p-8 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-foreground">IT Support Perth</h4>
            <p>75B Brewer Street</p>
            <p>Perth, 6000</p>
            <p>
              Phone:{' '}
              <a href="tel:0894638600" className="hover:text-gray-900">
                08 9463 8600
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:info@itsupportperth.net.au"
                className="hover:text-gray-900"
              >
                info@itsupportperth.net.au
              </a>
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-gray-900">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-gray-900">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/managed-it-services"
                  className="hover:text-gray-900"
                >
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ad-hoc-it-support"
                  className="hover:text-gray-900"
                >
                  Adhoc IT Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/remote-it-support"
                  className="hover:text-gray-900"
                >
                  Remote IT Support
                </Link>
              </li>
              <li>
                <Link href="/services-and-solutions/it-security-solutions#free-security-assessment" className="hover:text-gray-900">
                  Free Security Assessment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Our Location</h4>
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4562893188!2d115.86185731532598!3d-31.94945798122047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5f8a2c9f7%3A0x5e9b5e4cee2f0f0!2s75B%20Brewer%20St%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
          </div>
        </div>
        <div className="mt-8 text-center text-foreground">
          <p>
            &copy; 2024 IT Support Perth - Managed IT Support for Small and
            Medium Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
