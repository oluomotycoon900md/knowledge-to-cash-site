import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, no-hype guides on turning your skill into a sellable product in Nigeria.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="mb-8 text-3xl font-extrabold">Blog</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-black/60">
          No posts yet — add a markdown file to content/blog/.
        </p>
      )}
    </section>
  );
}
