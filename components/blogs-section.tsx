import { getNormalizedPosts } from "@/lib/seobot.server";
import { getDate, getDescription, getTitle } from "@/lib/seobot.helpers";
import { BlogCarousel, type BlogCarouselPost } from "@/components/BlogCarousel";

export const BlogsSection = async () => {
  const posts = await getNormalizedPosts();
  const displayPosts = posts.slice(0, 8);

  const carouselPosts: BlogCarouselPost[] = displayPosts.map((post) => ({
    slug: post.slug ?? "",
    title: getTitle(post),
    description: getDescription(post),
    date: getDate(post),
    image: post.image,
  }));

  return <BlogCarousel posts={carouselPosts} />;
};
