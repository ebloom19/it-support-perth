import { Metadata } from "next";
import { EnhancedBlogPage } from "@/components/EnhancedBlogPage";
import { StructuredData } from "@/components/StructuredData";
import { getNormalizedPosts } from "@/lib/seobot.server";

const title = "IT Support Blog | Perth Business Technology News & Tips";
const description =
  "Stay informed with the latest IT news, cybersecurity updates, and expert tech tips for Perth businesses. Learn about managed IT services, cloud solutions, and digital transformation strategies.";
const url = "https://www.itsupportperth.net.au/blog";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "website",
    title,
    description,
    url,
  },
  twitter: {
    title,
    description,
  },
};

export const fetchCache = "force-no-store";

export default async function BlogPage() {
  const allPosts = (await getNormalizedPosts()).filter(post => post.published);

  return (
    <>
      <StructuredData 
        type="webpage" 
        serviceData={{
          name: "IT Support Blog Perth",
          description: "Expert IT tips, cybersecurity updates, and technology solutions for Perth businesses",
          url: "https://itsupportperth.com.au/blog"
        }}
      />
      <EnhancedBlogPage allPosts={allPosts} />
    </>
  );
}
