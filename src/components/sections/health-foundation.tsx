import { Activity, Microscope, ShieldPlus } from "lucide-react";
import { healthFoundation } from "@/config/funnel";

const focusPoints = [
  {
    icon: ShieldPlus,
    title: "Fix The Foundation",
    description: "Address stress, recovery, hormones, and internal health before expecting peak output."
  },
  {
    icon: Microscope,
    title: "Read The Bloodwork",
    description: "Caden goes in depth on blood work to spot underlying issues that could be limiting progress."
  },
  {
    icon: Activity,
    title: "Optimize For Results",
    description: "Build a body that can perform, recover, and push toward your goals at a higher level."
  }
];

export function HealthFoundationSection() {
  return (
    <section className="section-slash relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,49,49,0.22),rgba(20,6,6,0.96)_45%,rgba(7,7,7,0.98))] px-5 py-10 shadow-card sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,49,49,0.22),transparent_32%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-ember-300">
            {healthFoundation.eyebrow}
          </p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[0.04em] text-white sm:text-5xl">
            {healthFoundation.headline}
          </h2>
          <p className="text-lg leading-8 text-white/74">{healthFoundation.description}</p>
          <p className="text-lg leading-8 text-white/66">{healthFoundation.details}</p>
        </div>

        <div className="grid gap-4">
          {focusPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="rounded-[24px] border border-white/10 bg-black/35 p-5 transition duration-300 hover:-translate-y-1 hover:border-ember-500/50 hover:shadow-glow"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-ember-500/30 bg-ember-500/10 p-3 text-ember-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-white">{point.title}</h3>
                <p className="mt-2 text-base leading-7 text-white/68">{point.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
