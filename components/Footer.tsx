import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 pb-24 md:pb-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-black/70 md:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <nav className="flex gap-6">
          <Link href="/" className="hover:opacity-70">
            Home
          </Link>
          <Link href="/blog" className="hover:opacity-70">
            Blog
          </Link>
          <Link href="/review" className="hover:opacity-70">
            Review
          </Link>
        </nav>
      </div>
    </footer>
  );
}
