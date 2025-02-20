import { format } from "date-fns";
import Image from "next/image";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { getNormalizedPosts } from "@/lib/seobot.server";
import { getDate, getDescription, getTitle } from "@/lib/seobot.helpers";

export const BlogsSection = async () => {
  const posts = await getNormalizedPosts();

  const targetPost = posts.find(
    (post) => post.slug === "blog/ai-interview-answer-generator"
  );
  const otherPosts = posts.filter(
    (post) => post.slug !== "blog/ai-interview-answer-generator"
  );
  const displayPosts = targetPost
    ? [targetPost, ...otherPosts.slice(0, 3)]
    : posts.slice(0, 5);

  const PostHeader = ({ date, image }: { date: string; image?: string }) => {
    const formattedDate = format(new Date(date), "MMMM dd, yyyy");

    return (
      <div className="flex flex-1 w-full h-1/2 min-h-[6rem] rounded-xl relative overflow-hidden">
        {image && (
          <Image
            src={image}
            alt="Post header"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            quality={75}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 opacity-30" />
        <span className="text-sm p-4 z-10 relative">{formattedDate}</span>
      </div>
    );
  };

  return (
    <section className="relative bg-secondary px-8 py-8 md:px-28 lg:px-40 md:py-16 bg-background bg-opacity-80 overflow-hidden flex flex-row w-100">
      <BentoGrid className="max-w-7xl mx-auto mb-8">
        {displayPosts?.length > 0 ? (
          displayPosts.map((post, i) => {
            const blogUrl = post.slug.startsWith("/")
              ? post.slug
              : post.slug.startsWith("blog/")
              ? `/${post.slug}`
              : `/blog/${post.slug}`;

            return (
              <BentoGridItem
                key={post.slug}
                title={getTitle(post)}
                description={getDescription(post)}
                header={<PostHeader date={getDate(post)} image={post.image} />}
                overrideBackgroundColor="bg-background"
                className={`${
                  i === displayPosts.length - 1 ? "md:col-span-2" : ""
                } [&_.description]:line-clamp-3`}
                href={blogUrl}
              />
            );
          })
        ) : (
          <div className="col-span-full text-center">
            <p>Nothing to see here yet</p>
          </div>
        )}
      </BentoGrid>
    </section>
  );
};
