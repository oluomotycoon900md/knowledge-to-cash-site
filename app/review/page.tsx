import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Monetize Your Knowledge Tool: an honest review",
  description:
    "An honest look at the tool that helps Nigerians turn a skill into a sellable product — what it does, who it's for, and how to get it.",
};

const faqs = [
  {
    q: "Do I need money to start?",
    a: "No. The tool is built for people with 0 to 150k a month who want to start with what they already know, not with capital.",
  },
  {
    q: "I don't think I have a \u201csellable\u201d skill — will this still work for me?",
    a: "Most people already have something sellable — a skill, a hobby, work experience. The tool walks you through finding it and packaging it, step by step.",
  },
  {
    q: "How much time does it take per week?",
    a: "Most users spend a few hours a week following the step-by-step content plan — it's built to fit around school, NYSC or a 9-5.",
  },
  {
    q: "Is this only for tech people or content creators?",
    a: "No. Tailors, hairdressers, makeup artists, tutors and small business owners can all use it to package what they already do into a product.",
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
        You know tailoring, makeup, teaching or another skill — but have no
        idea what to actually sell online, or how to package it. Here&apos;s
        the tool I use to fix that, and my honest take on it.
      </p>

      <div className="mb-10">
        <CtaButton label="Get the tool" />
      </div>

      <h2 className="mb-3 mt-10 text-xl font-bold">What the tool does</h2>
      <p className="text-black/80">
        It&apos;s a step-by-step digital framework that turns what you already
        know into a sellable product — telling you exactly what to sell, how
        to package it, and what content to post to sell it, without needing
        capital or a job offer first.
      </p>

      <h2 className="mb-3 mt-10 text-xl font-bold">Who it&apos;s for</h2>
      <ul className="list-disc space-y-1 pl-5 text-black/80">
        <li>Students and NYSC members with little to no capital</li>
        <li>9-5 earners (₦0–₦150k a month) looking for a second income</li>
        <li>
          Tailors, hairdressers, makeup artists and tutors who have a skill
          but no idea how to package it
        </li>
        <li>Aspiring content creators who want to sell, not just post</li>
      </ul>

      <h2 className="mb-3 mt-10 text-xl font-bold">Real results</h2>
      <p className="text-black/80">
        Add real screenshots or quotes from people who&apos;ve used the tool
        here — specific numbers and results build far more trust than general
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

      <div className="my-10">
        <CtaButton label="Get instant access" />
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
