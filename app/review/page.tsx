import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Monetize Your Knowledge Tool: an honest review",
  description:
    "An honest review of the Monetize Your Knowledge Tool: what you get, who it's for, and what it costs (₦10,000, paid once).",
};

const faqs = [
  {
    q: "How much does it cost?",
    a: "₦10,000, paid once. There is no subscription, and your payment covers 2 personalized plans, so you can use it twice.",
  },
  {
    q: "I don't think I have a \u201csellable\u201d skill. Will this still work for me?",
    a: "Yes. You tell the tool about your skills, background and what you enjoy doing, and it builds your #1 monetizable idea from what you already have.",
  },
  {
    q: "How long does it take?",
    a: "Your personalized plan is ready in under 10 minutes. The 7-day launch sprint then breaks your launch into daily tasks, each with a time estimate, so you can plan around school, NYSC or work.",
  },
  {
    q: "Is this only for tech people or content creators?",
    a: "No. Anyone with a skill, a trade or real knowledge to package can use it, from students and tutors to stylists, freelancers and small business owners.",
  },
  {
    q: "Is payment secure?",
    a: "Payments are processed securely through Paystack.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={siteConfig.affiliateLink}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-block rounded-full bg-accent px-6 py-3 font-semibold text-ink hover:opacity-90"
    >
      {label}
    </a>
  );
}

export default function ReviewPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="mb-6 text-3xl font-extrabold md:text-4xl">
        Monetize Your Knowledge Tool: an honest review
      </h1>
      <p className="mb-8 text-black/70">
        You have skills, knowledge or experience that people would pay for, but
        you&apos;re stuck on the question everyone asks first: what do I
        actually sell? Here&apos;s the tool built to answer it, and my honest
        take on it.
      </p>

      <div className="mb-10">
        <CtaButton label="Get the tool" />
      </div>

      <h2 className="mb-3 mt-10 text-xl font-bold">What you get</h2>
      <p className="mb-3 text-black/80">
        You answer a few questions, and in under 10 minutes the tool builds a
        personalized plan around you:
      </p>
      <ul className="list-disc space-y-1 pl-5 text-black/80">
        <li>Your #1 monetizable idea, specific to you</li>
        <li>A full launch roadmap, ready to execute</li>
        <li>A 30-day content calendar, mapped out and ready to post</li>
        <li>A product description written for your page</li>
        <li>A 7-day launch sprint with daily tasks</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-bold">How it works</h2>
      <ol className="list-decimal space-y-2 pl-5 text-black/80">
        <li>
          <strong>Get access.</strong> Create your account and tell the tool
          about your skills, background and what you enjoy doing.
        </li>
        <li>
          <strong>Get your plan.</strong> Your personalized plan is generated,
          with your idea, roadmap, content and copy.
        </li>
        <li>
          <strong>Launch.</strong> Follow the 7-day sprint, post your content
          and go live.
        </li>
      </ol>

      <h2 className="mb-3 mt-10 text-xl font-bold">Who it&apos;s for</h2>
      <ul className="list-disc space-y-1 pl-5 text-black/80">
        <li>
          Students and fresh graduates, including NYSC members, who want to
          start earning early
        </li>
        <li>
          Working professionals who want a second source of income beyond a
          salary
        </li>
        <li>
          Skilled people and small business owners who have something valuable
          to offer but haven&apos;t packaged it into a product yet
        </li>
        <li>
          Anyone building an audience who wants to move from posting to
          actually selling
        </li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-bold">Real results</h2>
      <p className="text-black/80">
        Add real screenshots or quotes from people who&apos;ve used the tool
        here. Specific numbers and results build far more trust than general
        claims.{" "}
        <span className="text-black/40">
          (Replace this paragraph with your own verified testimonials.)
        </span>
      </p>

      <h2 className="mb-3 mt-10 text-xl font-bold">Bonus when you get it here</h2>
      <p className="text-black/80">
        20 ready-to-use content hooks, plus direct WhatsApp support while you
        set up your first product.{" "}
        <span className="text-black/40">
          (Replace this with your actual bonus.)
        </span>
      </p>

      <h2 className="mb-3 mt-10 text-xl font-bold">What it costs</h2>
      <p className="text-black/80">
        ₦10,000, paid once, with no subscription. Your payment covers 2
        personalized plans, so you can use it twice. Payment is processed
        securely through Paystack.
      </p>

      <div className="my-10">
        <CtaButton label="Get your plan" />
      </div>

      <h2 className="mb-4 mt-10 text-xl font-bold">FAQ</h2>
      <div className="divide-y divide-black/10 border-y border-black/10">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
              {f.q}
              <span className="ml-4 text-black/40 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 text-black/70">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-10">
        <CtaButton label="Get the tool now" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </article>
  );
}
