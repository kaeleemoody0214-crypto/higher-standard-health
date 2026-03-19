"use client";

import Link from "next/link";
import { funnelContent } from "@/config/funnel";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/80 p-3 backdrop-blur lg:hidden">
      <Link
        href="#quiz"
        className="flex items-center justify-center rounded-full bg-ember-500 px-5 py-3 text-sm font-black uppercase tracking-[0.24em] text-white shadow-glow transition hover:bg-ember-400"
      >
        {funnelContent.ctaLabel}
      </Link>
    </div>
  );
}
