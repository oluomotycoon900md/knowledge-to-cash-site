# Knowledge To Cash — site

A fast, mobile-first affiliate content site: Next.js (App Router) + TypeScript + Tailwind CSS. Built to run from Termux + Acode on Android, same workflow as Foundry.

## Structure

- `app/page.tsx` — homepage (hero + latest posts + tool strip)
- `app/blog/` — blog index, and `[slug]/page.tsx` for individual posts
- `app/review/` — the money page (the only page with direct affiliate links)
- `content/blog/*.md` — every blog post, as plain markdown files
- `lib/config.ts` — site name, description, and your Selar affiliate link, in one place
- `lib/posts.ts` — reads and parses the markdown files; you shouldn't need to touch this

## Adding a new blog post (no code required)

1. In Acode (or any editor), create a new file inside `content/blog/`, e.g. `content/blog/my-new-post.md`.
2. Start it with frontmatter, then write the post in markdown below it:

   ```
   ---
   title: "Your post title"
   date: "2026-10-01"
   excerpt: "One or two sentences shown on the blog cards."
   ---

   Your post content goes here, in normal markdown — ## for headings,
   - for lists, [link text](/review) for links.
   ```

3. Save. The post appears automatically on the homepage and `/blog` — no other file needs to change.
4. Optional: add `coverImage: "/images/your-image.jpg"` to the frontmatter and drop the image in `public/images/`.

## Updating your affiliate link, site name or CTA text

Everything lives in one file: `lib/config.ts`. Change `affiliateLink`, `name`, `description`, `url` or `ctaLabel` there and it updates across the whole site.

## Running it in Termux

```
npm install
npm run dev
```

Then open `http://localhost:3000` in your phone's browser.

## Building for production

```
npm run build
```

## Deploying (same flow as Foundry)

1. `git init`, commit, and push to a new GitHub repo.
2. Import the repo on Vercel — it detects Next.js automatically and deploys.
3. Set your real domain in `lib/config.ts` (`url`) so the sitemap and SEO tags are correct.

## Performance choices already made for you

- System fonts only — nothing to download.
- No client-side JavaScript on the homepage, blog, or review page — everything renders on the server.
- Images go through `next/image`, which serves WebP automatically and lazy-loads by default.
- Tailwind ships only the CSS you actually use, after `next build`.
- The FAQ on `/review` is a plain `<details>` accordion — no JavaScript required.

## SEO already wired up

- Every page sets its own title/description through Next's Metadata API (H1 on every page, H2 for sections).
- `/review` includes an FAQPage JSON-LD schema, generated from the same FAQ list shown on the page.
- `app/sitemap.ts` and `app/robots.ts` auto-generate `/sitemap.xml` and `/robots.txt` from your real posts.

## Before you launch

- [ ] Replace `affiliateLink` and `url` in `lib/config.ts`
- [ ] Replace the "Real results" placeholder on `/review` with your own testimonials or screenshots
- [ ] Replace the "Bonus" placeholder on `/review` with your actual bonus
- [ ] Swap in your own blog posts, or edit the 3 samples in `content/blog/`
