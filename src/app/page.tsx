import { AboutCoachSection } from "@/components/sections/about-coach";
import { BenefitsSection } from "@/components/sections/benefits";
import { HealthFoundationSection } from "@/components/sections/health-foundation";
import { SocialProofSection } from "@/components/sections/social-proof";
import { QuizFlow } from "@/components/quiz-flow";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";

export default function HomePage() {
  return (
    <main className="relative">
      <QuizFlow />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-28 sm:px-6 lg:px-8">
        <SocialProofSection />
        <BenefitsSection />
        <HealthFoundationSection />
        <AboutCoachSection />
      </div>
      <StickyMobileCta />
    </main>
  );
}
