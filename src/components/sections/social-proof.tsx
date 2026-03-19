import Image from "next/image";
import { proofCards } from "@/config/funnel";

export function SocialProofSection() {
  return (
    <section className="section-slash relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,49,49,0.16),rgba(18,6,6,0.92)_40%,rgba(0,0,0,0.92))] px-5 py-10 shadow-card sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,49,49,0.24),transparent_30%)]" />
      <div className="absolute inset-0 texture-overlay opacity-[0.06]" />
      <div className="relative space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-ember-300">Proof</p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[0.04em] text-white sm:text-5xl">
            Built For Visible Results
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
          {proofCards.map((card, index) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-[30px] border border-ember-500/20 bg-gradient-to-br from-[#2a0c0c]/94 via-[#120b0b]/92 to-[#050505]/98 p-4 transition duration-300 hover:-translate-y-1 hover:border-ember-500/60 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,49,49,0.24),transparent_42%)] opacity-90" />
              <div className="relative space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#5b1414,#1d0a0a)] p-2">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={`/images/transformations/${card.title.toLowerCase()}-before.jpg`}
                        alt={`${card.title} before transformation`}
                        fill
                        sizes="(max-width: 768px) 40vw, 220px"
                        className={card.title === "Hernan" ? "object-cover object-[center_24%]" : "object-cover object-top"}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(115,12,12,0.16),rgba(14,14,14,0.36))]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,49,49,0.14),transparent_42%)]" />
                      <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Before</span>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#9a1f1f,#1d0a0a)] p-2">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-ember-500/30">
                      <Image
                        src={`/images/transformations/${card.title.toLowerCase()}-after.jpg`}
                        alt={`${card.title} after transformation`}
                        fill
                        sizes="(max-width: 768px) 40vw, 220px"
                        className={
                          card.title === "Garrett"
                            ? "object-cover object-[center_35%]"
                            : card.title === "Hernan"
                              ? "object-cover object-[center_28%]"
                              : "object-cover object-top"
                        }
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(145,21,21,0.14),rgba(13,13,13,0.34))]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,49,49,0.18),transparent_42%)]" />
                      <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">After</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="max-w-[72%]">
                    <h3 className="font-display text-[2.2rem] uppercase tracking-[0.04em] text-white">
                      {card.title}
                    </h3>
                    <p className="text-base leading-6 text-white/72">{card.caption}</p>
                  </div>
                  <div className="rounded-full border border-ember-500/40 bg-ember-500/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-ember-300">
                    {card.stats}
                  </div>
                </div>
                <div className="text-xs uppercase tracking-[0.35em] text-white/35">Transformation {index + 1}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
