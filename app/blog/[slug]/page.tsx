import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      {post.coverImage && (
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl bg-black/5">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
      <p className="mb-2 text-sm text-black/60">
        {new Date(post.date).toLocaleDateString("en-NG", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <h1 className="mb-8 text-3xl font-extrabold md:text-4xl">
        {post.title}
      </h1>
      <div
        className="prose prose-neutral max-w-none prose-a:text-ink prose-a:underline"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
