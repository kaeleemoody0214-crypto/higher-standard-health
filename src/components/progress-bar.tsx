"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/55">
        <span>Custom Plan Builder</span>
        <span>
          {currentStep + 1}/{totalSteps}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-ember-700 via-ember-500 to-ember-300 shadow-[0_0_30px_rgba(255,49,49,0.55)]"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
