"use client";

import { FormEvent, useEffect, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { OptionCard } from "@/components/option-card";
import { ProgressBar } from "@/components/progress-bar";
import { StepShell } from "@/components/step-shell";
import { abVariants, defaultAnswers, funnelContent, quizSteps, type QuizAnswers } from "@/config/funnel";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "success" | "error";

const initialUtm = {
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  utmTerm: ""
};

export function QuizFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(defaultAnswers);
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [utmParams, setUtmParams] = useState(initialUtm);

  const activeStep = quizSteps[Math.min(currentStep, quizSteps.length - 1)];
  const variant = abVariants.performance;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      utmContent: params.get("utm_content") ?? "",
      utmTerm: params.get("utm_term") ?? ""
    });
  }, []);

  const canAdvance = useMemo(() => {
    if (activeStep.type === "contact") {
      return (
        answers.fullName.trim().length >= 2 &&
        /\S+@\S+\.\S+/.test(answers.email.trim()) &&
        answers.phone.trim().length >= 7 &&
        answers.occupation.trim().length >= 2 &&
        answers.age.trim().length >= 1
      );
    }

    return Boolean(answers[activeStep.field!]);
  }, [activeStep, answers]);

  const updateAnswer = (field: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setErrorMessage("");
  };

  const handleOptionSelect = (value: string) => {
    if (!activeStep.field) return;

    updateAnswer(activeStep.field, value);
    setCurrentStep((prev) => Math.min(prev + 1, quizSteps.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    setErrorMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("idle");
    setErrorMessage("");

    startTransition(async () => {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...answers,
          ...utmParams,
          website: honeypot
        })
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setSubmitState("error");
        setErrorMessage(data?.error ?? "We couldn't send your request. Try again in a moment.");
        return;
      }

      setSubmitState("success");
      setCurrentStep(quizSteps.length);
    });
  };

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 texture-overlay opacity-[0.08]" />
      <div className="pointer-events-none absolute left-[-8rem] top-20 -z-10 h-72 w-72 rounded-full bg-ember-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-6rem] top-40 -z-10 h-80 w-80 rounded-full bg-ember-900/30 blur-[140px]" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mb-8">
          <div className="relative space-y-5 overflow-hidden rounded-[36px] border border-ember-500/20 bg-[linear-gradient(135deg,rgba(255,49,49,0.24),rgba(70,12,12,0.18)_28%,rgba(255,255,255,0.03)_42%,rgba(0,0,0,0.2))] p-6 shadow-card sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(135deg,transparent,rgba(255,49,49,0.18))]" />
            <div className="pointer-events-none absolute left-[-4rem] top-[-3rem] h-32 w-32 rounded-full bg-ember-500/20 blur-3xl" />
            <div className="relative z-10">
              <BrandMark />
            </div>
            <div className="relative space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-ember-300">
                {variant.heroKicker}
              </p>
              <h1 className="max-w-3xl font-display text-[3.8rem] uppercase leading-[0.85] tracking-[0.03em] text-white sm:text-[5.5rem] lg:text-[7rem]">
                Raise The Standard. Transform The Body.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                {variant.transformationLine} Qualify your fit, see if the coaching is right for you,
                and book your next move in minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              <span className="rounded-full border border-ember-500/20 bg-ember-500/10 px-3 py-2 text-white/80">Fat Loss</span>
              <span className="rounded-full border border-ember-500/20 bg-ember-500/10 px-3 py-2 text-white/80">Strength</span>
              <span className="rounded-full border border-ember-500/20 bg-ember-500/10 px-3 py-2 text-white/80">Confidence</span>
              <span className="rounded-full border border-ember-500/20 bg-ember-500/10 px-3 py-2 text-white/80">Accountability</span>
            </div>
          </div>
        </div>

        <div id="quiz" className="mx-auto w-full max-w-4xl space-y-5">
          <div className="rounded-[28px] border border-ember-500/20 bg-[linear-gradient(135deg,rgba(255,49,49,0.14),rgba(255,255,255,0.03))] px-6 py-5 text-center shadow-card">
            <p className="font-display text-3xl uppercase leading-[0.95] tracking-[0.04em] text-white sm:text-4xl">
              Fill Out These Questions To See If We’re A Good Fit To Work Together.
            </p>
          </div>
          <ProgressBar currentStep={Math.min(currentStep, quizSteps.length - 1)} totalSteps={quizSteps.length} />

          {currentStep < quizSteps.length ? (
            <div
              key={`step-${currentStep}`}
            >
              <StepShell
                eyebrow={`Step ${currentStep + 1}`}
                headline={activeStep.headline}
                subheadline={activeStep.subheadline}
              >
                {activeStep.type === "options" ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {activeStep.options?.map((option) => (
                      <OptionCard
                        key={option.value}
                        label={option.label}
                        detail={option.detail}
                        selected={answers[activeStep.field!] === option.value}
                        onClick={() => handleOptionSelect(option.value)}
                      />
                    ))}
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="hidden">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        name="website"
                        value={honeypot}
                        onChange={(event) => setHoneypot(event.target.value)}
                        autoComplete="off"
                        tabIndex={-1}
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="space-y-2">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">Full Name</span>
                        <input
                          value={answers.fullName}
                          onChange={(event) => updateAnswer("fullName", event.target.value)}
                          className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-ember-500 focus:shadow-glow"
                          placeholder="Your full name"
                          autoComplete="name"
                          required
                        />
                      </label>
                      <label className="space-y-2">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">Email</span>
                        <input
                          type="email"
                          value={answers.email}
                          onChange={(event) => updateAnswer("email", event.target.value)}
                          className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-ember-500 focus:shadow-glow"
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                        />
                      </label>
                      <label className="space-y-2">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">Phone Number</span>
                        <input
                          type="tel"
                          value={answers.phone}
                          onChange={(event) => updateAnswer("phone", event.target.value)}
                          className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-ember-500 focus:shadow-glow"
                          placeholder="Best number for follow-up"
                          autoComplete="tel"
                          required
                        />
                      </label>
                      <label className="space-y-2">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">Occupation</span>
                        <input
                          value={answers.occupation}
                          onChange={(event) => updateAnswer("occupation", event.target.value)}
                          className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-ember-500 focus:shadow-glow"
                          placeholder="What do you do?"
                          autoComplete="organization-title"
                          required
                        />
                      </label>
                    </div>
                    <label className="space-y-2">
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">Age</span>
                      <input
                        inputMode="numeric"
                        value={answers.age}
                        onChange={(event) =>
                          updateAnswer("age", event.target.value.replace(/[^0-9]/g, "").slice(0, 3))
                        }
                        className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-ember-500 focus:shadow-glow"
                        placeholder="Your age"
                        required
                      />
                    </label>
                    {errorMessage ? <p className="text-sm text-ember-300">{errorMessage}</p> : null}
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-ember-500/40 px-5 py-3 text-sm font-black uppercase tracking-[0.24em] text-white transition hover:border-ember-400 hover:bg-ember-500/10"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!canAdvance || isPending}
                        className={cn(
                          "inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-6 py-3 text-sm font-black uppercase tracking-[0.24em] text-white shadow-glow transition",
                          "hover:bg-ember-400 disabled:cursor-not-allowed disabled:opacity-50"
                        )}
                      >
                        {isPending ? (
                          <>
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                            Sending
                          </>
                        ) : (
                          <>
                            See If I&apos;m A Fit
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
                {activeStep.type === "options" && currentStep > 0 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/55 transition hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous Step
                  </button>
                ) : null}
              </StepShell>
            </div>
          ) : (
            <div
              key="final-step"
            >
              <StepShell
                eyebrow="Qualified"
                headline="You’re One Step Away From Your Transformation"
                subheadline="Based on your answers, you’re a great fit for Higher Standard Health coaching. Book your call with Caden to get started."
              >
                <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-5">
                    <div className="rounded-[24px] border border-ember-500/30 bg-ember-500/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ember-300">
                        Submission Locked
                      </p>
                      <p className="mt-2 text-lg text-white/80">
                        Your answers have been sent and your coaching-fit request is in.
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <SummaryItem label="Goal" value={answers.goal} />
                      <SummaryItem label="Experience" value={answers.experience} />
                      <SummaryItem label="Struggle" value={answers.struggle} />
                      <SummaryItem label="Commitment" value={answers.commitment} />
                      <SummaryItem label="Investment" value={answers.budget} />
                    </div>
                    <Link
                      href={funnelContent.calendlyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-full bg-ember-500 px-6 py-4 text-sm font-black uppercase tracking-[0.24em] text-white shadow-glow transition hover:bg-ember-400"
                    >
                      {funnelContent.ctaLabel}
                    </Link>
                    <p className="text-sm text-white/55">Call opens in a new tab so you don’t lose your place.</p>
                  </div>

                  <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/50">
                    <iframe
                      title="Calendly booking"
                      src={funnelContent.calendlyUrl}
                      className="min-h-[720px] w-full"
                    />
                  </div>
                </div>
              </StepShell>
            </div>
          )}
          {submitState === "error" ? <p className="text-sm text-ember-300">{errorMessage}</p> : null}
        </div>
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">{label}</p>
      <p className="mt-2 text-base font-bold uppercase tracking-[0.08em] text-white">
        {value.replaceAll("-", " ")}
      </p>
    </div>
  );
}
