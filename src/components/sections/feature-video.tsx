import { PlayCircle } from "lucide-react";
import { featureVideo } from "@/config/funnel";

export function FeatureVideoSection() {
  const { eyebrow, headline, description, mp4Path, embedUrl, posterPath } = featureVideo;

  return (
    <section className="section-slash relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,49,49,0.2),rgba(17,6,6,0.92)_42%,rgba(0,0,0,0.96))] px-4 py-6 shadow-card sm:px-6 sm:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,49,49,0.24),transparent_30%)]" />
      <div className="relative space-y-5">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-ember-300">{eyebrow}</p>
          <h2 className="font-display text-3xl uppercase leading-none tracking-[0.04em] text-white sm:text-4xl">
            {headline}
          </h2>
          <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg">{description}</p>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/45 shadow-glow">
          {embedUrl ? (
            <iframe
              title="Higher Standard Health Video"
              src={embedUrl}
              className="aspect-video w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : mp4Path ? (
            <video
              className="aspect-video w-full bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster={posterPath}
            >
              <source src={mp4Path} type="video/mp4" />
            </video>
          ) : (
            <div className="flex aspect-video items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,49,49,0.16),transparent_38%),linear-gradient(180deg,#140808,#050505)]">
              <PlayCircle className="h-12 w-12 text-ember-400" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
