import { PlayCircle } from "lucide-react";
import { featureVideo } from "@/config/funnel";

export function FeatureVideoSection() {
  const { eyebrow, headline, description, mp4Path, embedUrl, posterPath } = featureVideo;

  return (
    <section className="section-slash relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,49,49,0.2),rgba(17,6,6,0.92)_42%,rgba(0,0,0,0.96))] px-5 py-10 shadow-card sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,49,49,0.24),transparent_30%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-ember-300">{eyebrow}</p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[0.04em] text-white sm:text-5xl">
            {headline}
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-white/70">{description}</p>
          <div className="rounded-[22px] border border-ember-500/25 bg-ember-500/10 p-4 text-white/72">
            Upload your video to `/public/videos/hsh-feature.mp4` and this section will use it automatically.
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-black/45 shadow-glow">
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
              <div className="flex flex-col items-center gap-3 text-center">
                <PlayCircle className="h-12 w-12 text-ember-400" />
                <p className="font-display text-3xl uppercase tracking-[0.05em] text-white">Video Ready</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
