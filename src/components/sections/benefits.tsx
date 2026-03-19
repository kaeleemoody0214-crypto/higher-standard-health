import { benefits } from "@/config/funnel";

export function BenefitsSection() {
  return (
    <section className="section-slash relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#150707]/95 via-black/90 to-[#170808]/95 px-5 py-10 shadow-card sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,49,49,0.2),transparent_32%)]" />
      <div className="relative space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-ember-300">What You Get</p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[0.04em] text-white sm:text-5xl">
            Coaching That Actually Moves You Forward
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group rounded-[24px] border border-white/10 bg-white/[0.05] p-5 transition duration-300 hover:-translate-y-1 hover:border-ember-500/50 hover:shadow-glow"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-ember-500/30 bg-ember-500/10 p-3 text-ember-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-white">{benefit.title}</h3>
                <p className="mt-2 text-base leading-7 text-white/68">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
