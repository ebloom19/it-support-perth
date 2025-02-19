import { Metadata } from "next";
import { SearchPosts } from "@/components/SearchPosts";
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
  const allPosts = await getNormalizedPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black lg:text-5xl">
          Perth IT Support Insights & News
        </h1>
        <p className="text-xl text-muted-foreground mt-2">
          Expert IT tips, cybersecurity updates, and technology solutions for
          Perth businesses. Stay informed with our latest insights on managed
          services, cloud computing, and digital transformation strategies.
        </p>
      </div>
      <div className="mb-8 w-3/4 m-auto">
        <SearchPosts allPosts={allPosts} />
      </div>
    </div>
  );
}
