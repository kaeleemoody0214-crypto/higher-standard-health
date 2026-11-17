"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { abVariants, funnelContent } from "@/config/funnel";

export function QuizFlow() {
  const variant = abVariants.performance;

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 texture-overlay opacity-[0.08]" />
      <div className="pointer-events-none absolute left-[-8rem] top-20 -z-10 h-72 w-72 rounded-full bg-ember-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-6rem] top-40 -z-10 h-80 w-80 rounded-full bg-ember-900/30 blur-[140px]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div id="book" className="relative space-y-5 overflow-hidden rounded-[36px] border border-ember-500/20 bg-[linear-gradient(135deg,rgba(255,49,49,0.24),rgba(70,12,12,0.18)_28%,rgba(255,255,255,0.03)_42%,rgba(0,0,0,0.2))] p-6 shadow-card sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(135deg,transparent,rgba(255,49,49,0.18))]" />
          <div className="pointer-events-none absolute left-[-4rem] top-[-3rem] h-32 w-32 rounded-full bg-ember-500/20 blur-3xl" />
          <div className="relative z-10">
            <BrandMark />
          </div>
          <div className="relative space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-ember-300">
              {variant.heroKicker}
            </p>
            <h1 className="max-w-3xl font-display text-[3rem] uppercase leading-[0.88] tracking-[0.03em] text-white sm:text-[5.5rem] lg:text-[7rem]">
              Raise The Standard. Transform The Body.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              {variant.transformationLine} Book a call with Caden to see if the coaching is right for you.
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
            <span className="rounded-full border border-ember-500/20 bg-ember-500/10 px-3 py-2 text-white/80">Fat Loss</span>
            <span className="rounded-full border border-ember-500/20 bg-ember-500/10 px-3 py-2 text-white/80">Strength</span>
            <span className="rounded-full border border-ember-500/20 bg-ember-500/10 px-3 py-2 text-white/80">Confidence</span>
            <span className="rounded-full border border-ember-500/20 bg-ember-500/10 px-3 py-2 text-white/80">Accountability</span>
          </div>
          <div className="relative pt-2">
            <Link
              href={funnelContent.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember-500 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white shadow-glow transition hover:bg-ember-400 sm:w-auto"
            >
              {funnelContent.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
