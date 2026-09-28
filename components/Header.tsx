import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/blog" className="hover:opacity-70">
              Blog
            </Link>
          </nav>
          <Link
            href={siteConfig.affiliateLink} target="_blank" rel="noopener noreferrer sponsored"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink hover:opacity-90"
          >
            {siteConfig.ctaLabel}
          </Link>
        </div>
      </header>

      {/* Mobile-only sticky bottom CTA, so it never blocks the header or content */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-3 md:hidden">
        <Link
          href={siteConfig.affiliateLink} target="_blank" rel="noopener noreferrer sponsored"
          className="block w-full rounded-full bg-accent py-3 text-center font-semibold text-ink"
        >
          {siteConfig.ctaLabel}
        </Link>
      </div>
    </>
  );
}
