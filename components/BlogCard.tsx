import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-black/10 hover:border-black/30"
    >
      {post.coverImage && (
        <div className="relative aspect-[16/9] bg-black/5">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <p className="mb-2 text-xs text-black/60">
          {new Date(post.date).toLocaleDateString("en-NG", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <h3 className="mb-2 text-lg font-bold leading-snug group-hover:underline">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm text-black/70">{post.excerpt}</p>
        <span className="mt-3 inline-block text-sm font-semibold">
          Read more
        </span>
      </div>
    </Link>
  );
}
