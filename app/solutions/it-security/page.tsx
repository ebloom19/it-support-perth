import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle } from 'lucide-react';

export default function ITSecurityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[300px] mb-12">
        <Image
          src="/images/people-looking-over-laptop-screen.png"
          alt="IT Security"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">IT Security</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 hidden md:block">
          <h2 className="text-2xl font-bold mb-4">Solutions</h2>
          <hr className="border-t-2 border-blue-600 mb-4" />
          <ul className="space-y-2">
            <li>
              <Link
                href="/solutions/it-support-and-consulting"
                className="hover:text-blue-800"
              >
                &#8250; IT Support & Consulting
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/cloud-solutions"
                className="hover:text-blue-800"
              >
                &#8250; Cloud Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/backup-and-disaster-recovery"
                className="hover:text-blue-800"
              >
                &#8250; Backup and Disaster Recovery
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/it-security"
                className="text-blue-600 font-bold hover:text-blue-800"
              >
                &#8250; IT Security
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/voip-phone-systems"
                className="hover:text-blue-800"
              >
                &#8250; VoIP Phone Systems
              </Link>
            </li>
          </ul>
          <hr className="border-t-2 border-blue-600 mt-4" />
        </div>

        <div className="md:col-span-3">
          <p className="mb-4">
            Nobody likes investing in security; unfortunately it's necessary.
            The threat of business disruption is very real. 60% of small
            businesses close within six months of a data breach. But even a
            minor system compromise will damage your reputation with suppliers
            and customers.
          </p>
          <p className="mb-4">
            Small to medium-sized businesses are a common target for hackers,
            precisely because their security systems are less than enterprise
            grade. Don't make the mistake of thinking you're too small a target;
            we've had to rescue many businesses from ransomware and denial of
            service attacks. 43% of all attacks affect small business.
          </p>
          <p className="mb-4">
            We'll ensure you're not leaking any data that attracts Internet
            predators. We can audit your permissions and access controls to
            tighten up your business practices and identify suspicious
            behaviour. It's not just about the network and it's not just about
            the Internet. It's about your business processes and your business
            culture. For example, if you're sharing passwords we'll recommend
            changes to work habits and introduce you to the latest security
            software.
          </p>
          <p className="mb-4">
            Your employees need remote access, but this can create significant
            vulnerabilities. Let's get that under control too.
          </p>
          <p className="mb-4">
            Having the spam filtering right on your email is often overlooked as
            a security issue. Email is a major attack vector so you need it
            locked down - but you also want to make sure your clients' emails
            are not disappearing into the spam folder. That can damage business
            relationships.
          </p>
          <p className="mb-4">
            A word about access control. It's common in small and medium-sized
            businesses that swathes of sensitive files and folders are
            accessible by everyone in the company. That's not good practice. A
            disaffected employee could destroy your business by sharing
            sensitive documents. You should limit access precisely. We can help
            plan and automate those permissions if you wish.
          </p>
          <p className="mb-8">
            In summary, best-in-class protection from the full range of cyber
            threats. We can deliver it through{' '}
            <Link
              href="/services/managed-it-services"
              className="text-blue-600 hover:text-blue-800"
            >
              Managed IT
            </Link>{' '}
            or parts of it through{' '}
            <Link
              href="/services/ad-hoc-it-support"
              className="text-blue-600 hover:text-blue-800"
            >
              Ad-hoc IT
            </Link>{' '}
            on a project basis.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Our cybersecurity services include:
          </h2>
          <ul className="space-y-2 mb-8">
            {[
              'A full network security solution',
              'Protection against malware, viruses, ransomware, and other threats',
              'Intrusion detection and proactive preventative actions',
              'Audit of current security practices',
              'Latest spam filtering systems for your email',
              'Web content filtering',
              'Mobility Management Systems',
              'Data protection and data control',
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="mr-2 text-blue-600" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative h-[300px] mt-12">
        <Image
          src="/images/business-businessmen-classroom-communication-267507.png"
          alt="Business communication"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Let Computer Mechanics solve your IT issues today!
          </h2>
          <Link href="/contact-us">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Talk with us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
