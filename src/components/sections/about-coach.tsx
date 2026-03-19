import Image from "next/image";
import { aboutCoach } from "@/config/funnel";

export function AboutCoachSection() {
  return (
    <section className="section-slash relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,49,49,0.18),rgba(16,7,7,0.94)_42%,rgba(255,255,255,0.03))] px-5 py-10 shadow-card sm:px-8">
      <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,49,49,0.22),transparent_26%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-ember-300">{aboutCoach.eyebrow}</p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[0.04em] text-white sm:text-5xl">
            {aboutCoach.headline}
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-white/72">{aboutCoach.description}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {aboutCoach.pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.label}
                  className="rounded-[20px] border border-white/10 bg-black/30 p-4"
                >
                  <Icon className="mb-3 h-5 w-5 text-ember-400" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/82">
                    {pillar.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[34px] bg-[radial-gradient(circle,rgba(255,49,49,0.32),transparent_55%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-ember-500/20 bg-[linear-gradient(180deg,#261111,#090909)] p-3 shadow-glow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10 bg-black">
              <Image
                src="/images/coach/caden-coach.jpg"
                alt="Coach Caden"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center scale-[1.02]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(120,16,16,0.14),rgba(0,0,0,0.46))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,49,49,0.14),transparent_40%)]" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/10 bg-black/55 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-ember-300">Coach Caden</p>
              <p className="mt-2 font-display text-3xl uppercase tracking-[0.05em] text-white">
                Raise The Standard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
