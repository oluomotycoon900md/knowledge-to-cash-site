import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const pillarSlug = posts[0]?.slug ?? "";

  return (
    <>
      <section className="mx-auto max-w-2xl px-4 pb-10 pt-14 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Don&apos;t know what to sell online? Start here for free.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-black/70">
          No job. No capital. Just packaging what you already know into
          something people pay for — built for Nigerian students, NYSC
          members and 9-5 earners.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href={pillarSlug ? `/blog/${pillarSlug}` : "/blog"}
            className="rounded-full bg-ink px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Start here - free guide
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-6 text-xl font-bold">Latest from the blog</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
          {posts.length === 0 && (
            <p className="text-black/60">
              No posts yet — add a markdown file to content/blog/.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-ink p-8 text-white md:flex-row md:p-10">
          <div>
            <h2 className="text-xl font-bold">
              The tool I use to turn a skill into a sellable product
            </h2>
            <p className="mt-2 text-white/70">
              My honest, full review — what it does, who it&apos;s for, and
              how to get started.
            </p>
          </div>
          <Link
            href="/review"
            className="shrink-0 rounded-full bg-accent px-6 py-3 font-semibold text-ink hover:opacity-90"
          >
            Read the review
          </Link>
        </div>
      </section>
    </>
  );
}
