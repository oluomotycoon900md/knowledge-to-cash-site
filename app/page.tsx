import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

// The guide the hero button opens. Change this if you rename or replace it.
const PILLAR_SLUG = "what-to-sell-online-as-a-student-in-nigeria";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-2xl px-4 pb-10 pt-14 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Don&apos;t know what to sell online? Get a clear answer in under 10
          minutes.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-black/70">
          Stop guessing. Turn what you already know into a product people will
          pay for, with a personalized plan, a launch roadmap and 30 days of
          content, built for Nigerians who are ready to start earning from
          their knowledge.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href={`/blog/${PILLAR_SLUG}`}
            className="rounded-full bg-ink px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Read the starter guide
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
              No posts yet. Add a markdown file to content/blog/.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-ink p-8 text-white md:flex-row md:p-10">
          <div>
            <h2 className="text-xl font-bold">
              The tool that turns what you know into a sellable product
            </h2>
            <p className="mt-2 text-white/70">
              My honest, full review: what you get, who it&apos;s for and what
              it costs.
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
