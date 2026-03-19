import { ReactNode } from "react";

type StepShellProps = {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  children: ReactNode;
};

export function StepShell({ eyebrow, headline, subheadline, children }: StepShellProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5 shadow-card backdrop-blur md:p-8">
      <div className="pointer-events-none absolute inset-0 texture-overlay opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500 to-transparent" />
      <div className="relative z-10 space-y-8">
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-ember-500/30 bg-ember-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-ember-300">
            {eyebrow}
          </span>
          <div className="space-y-3">
            <h2 className="max-w-3xl font-display text-[2.8rem] uppercase leading-[0.9] tracking-[0.04em] text-white sm:text-[4rem]">
              {headline}
            </h2>
            {subheadline ? (
              <p className="max-w-2xl text-lg leading-7 text-white/68 sm:text-xl">{subheadline}</p>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
