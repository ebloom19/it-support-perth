import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-gray-900">IT Support Perth</h4>
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
            <h4 className="font-bold mb-4 text-gray-900">Quick Links</h4>
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
            <h4 className="font-bold mb-4 text-gray-900">Our Services</h4>
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
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Our Location</h4>
            <img
              src="/images/map.png"
              alt="IT Support Perth Location"
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>
            &copy; 2024 IT Support Perth - Managed IT Support for Small and
            Medium Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
