"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type OptionCardProps = {
  label: string;
  detail?: string;
  selected?: boolean;
  onClick: () => void;
};

export function OptionCard({ label, detail, selected, onClick }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 text-left shadow-card transition duration-300",
        "panel-sheen hover:-translate-y-1 hover:border-ember-500/60 hover:bg-ember-500/10 hover:shadow-glow",
        selected && "border-ember-500 bg-ember-500/12 shadow-glow"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-400/90 to-transparent" />
      <div className="relative flex h-full min-h-32 flex-col justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-display text-3xl uppercase leading-none tracking-[0.06em] text-white sm:text-[2.2rem]">
            {label}
          </h3>
          {detail ? <p className="max-w-sm text-base leading-6 text-white/68">{detail}</p> : null}
        </div>
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
          <span>Choose Goal</span>
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-ember-400" />
        </div>
      </div>
    </button>
  );
}
