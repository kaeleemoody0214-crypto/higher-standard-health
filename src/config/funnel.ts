import {
  Bolt,
  CalendarCheck2,
  Dumbbell,
  Flame,
  Salad,
  ShieldCheck
} from "lucide-react";

export type QuizField =
  | "goal"
  | "experience"
  | "struggle"
  | "commitment"
  | "budget"
  | "fullName"
  | "email"
  | "phone"
  | "occupation"
  | "age";

export type QuizAnswers = Record<QuizField, string>;

export type Option = {
  value: string;
  label: string;
  detail?: string;
};

export type VideoConfig = {
  eyebrow: string;
  headline: string;
  description: string;
  mp4Path?: string;
  embedUrl?: string;
  posterPath?: string;
};

export type StepConfig = {
  id: Exclude<QuizField, "fullName" | "email" | "phone" | "occupation" | "age"> | "contact";
  headline: string;
  subheadline?: string;
  type: "options" | "contact";
  field?: Exclude<QuizField, "fullName" | "email" | "phone" | "occupation" | "age">;
  options?: Option[];
};

export const defaultAnswers: QuizAnswers = {
  goal: "",
  experience: "",
  struggle: "",
  commitment: "",
  budget: "",
  fullName: "",
  email: "",
  phone: "",
  occupation: "",
  age: ""
};

export const funnelContent = {
  headline: "Set a Higher Standard for Your Health",
  subheadline: "Let’s see if we’re a strong fit to work together. Start by choosing your goal.",
  ctaLabel: "Book Your Call",
  calendlyUrl:
    "https://calendly.com/ctfit1999/30min?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAQn9YNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaf9QryPhzMC78X27favpxfdD8Ydr5zLTvcYpAsXW7J31K_GEIHWFOF34XT8cQ_aem_QZhROiibYsHyWpLP3WmOKQ&back=1&month=2026-03"
};

export const quizSteps: StepConfig[] = [
  {
    id: "goal",
    headline: funnelContent.headline,
    subheadline: funnelContent.subheadline,
    type: "options",
    field: "goal",
    options: [
      {
        value: "lose-weight-burn-fat",
        label: "Lose Weight / Burn Fat",
        detail: "Drop body fat, tighten up, and build visible momentum fast."
      },
      {
        value: "build-muscle-strength",
        label: "Build Muscle / Strength",
        detail: "Pack on size, improve performance, and train with purpose."
      },
      {
        value: "improve-confidence-lifestyle",
        label: "Improve Confidence / Lifestyle",
        detail: "Look sharper, feel stronger, and build habits that stick."
      }
    ]
  },
  {
    id: "experience",
    headline: "What’s your experience level?",
    type: "options",
    field: "experience",
    options: [
      { value: "beginner", label: "Beginner", detail: "Need structure, clarity, and a strong starting point." },
      { value: "intermediate", label: "Intermediate", detail: "You’ve trained before and want smarter progression." },
      { value: "advanced", label: "Advanced", detail: "You’re ready for a sharper, higher-performance approach." }
    ]
  },
  {
    id: "struggle",
    headline: "What’s holding you back right now?",
    type: "options",
    field: "struggle",
    options: [
      { value: "lack-of-consistency", label: "Lack of consistency" },
      { value: "not-sure-what-to-do", label: "Not sure what to do" },
      { value: "nutrition-struggles", label: "Nutrition struggles" },
      { value: "not-seeing-results", label: "Not seeing results" }
    ]
  },
  {
    id: "commitment",
    headline: "How serious are you about changing your body?",
    type: "options",
    field: "commitment",
    options: [
      { value: "just-exploring", label: "Just exploring" },
      { value: "ready-to-start-soon", label: "Ready to start soon" },
      { value: "fully-committed", label: "Fully committed" }
    ]
  },
  {
    id: "budget",
    headline:
      "Is creating real, lasting change, and achieving your goals worth spending $60-$80 a week to you?",
    type: "options",
    field: "budget",
    options: [
      { value: "yes", label: "Yes", detail: "I’m ready to invest in real coaching and real results." },
      { value: "no", label: "No", detail: "I’m not ready to commit at that level right now." }
    ]
  },
  {
    id: "contact",
    headline: "Enter your information to see if we’re a good fit.",
    subheadline: "Serious goals need the right coaching fit. Drop your details below to take the next step.",
    type: "contact"
  }
];

export const testimonials = [
  {
    quote:
      "Caden gave me structure, accountability, and a plan that finally made progress predictable.",
    name: "Jalen, 12-week client",
    metric: "Down 18 lbs"
  },
  {
    quote:
      "Every check-in was direct, honest, and effective. I stopped guessing and started progressing.",
    name: "Marcus, strength phase",
    metric: "+11 lbs lean mass"
  },
  {
    quote:
      "The coaching was intense in the best way. I felt supported, but I was held to a real standard.",
    name: "Avery, lifestyle reset",
    metric: "Confidence rebuilt"
  }
];

export const benefits = [
  {
    icon: Dumbbell,
    title: "Custom Meal Plans",
    description: "Nutrition built around your goal, routine, recovery, and performance demands."
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description: "Real coaching, real check-ins, and a system that keeps you moving."
  },
  {
    icon: Salad,
    title: "Nutrition Guidance",
    description: "Simple nutrition targets that support results without killing your lifestyle."
  },
  {
    icon: CalendarCheck2,
    title: "Sustainable Results",
    description: "Build a physique and routine you can actually maintain."
  }
];

export const proofCards = [
  {
    title: "Travis",
    stats: "12 weeks",
    caption: "Lost 32 pounds in 12 weeks while still adding muscle."
  },
  {
    title: "Hernan",
    stats: "6 weeks",
    caption: "Lost 20 pounds in 6 weeks with a focused structure and sharper execution."
  },
  {
    title: "Steven",
    stats: "Body Recomp",
    caption: "Went through a body recomp while adding lean muscle mass."
  },
  {
    title: "Garrett",
    stats: "12 weeks",
    caption: "Went through a 12 week body recomp while getting stronger and hitting PRs in powerlifting competition prep."
  }
];

export const healthFoundation = {
  eyebrow: "Inside-Out Coaching",
  headline: "Higher Standard Health Builds The Foundation Before It Forces The Result.",
  description:
    "Real transformation is not just training harder. Higher Standard Health focuses on healing clients from the inside out and creating a healthy, optimal foundation that supports your physique goals, recovery, hormones, energy, and long-term performance.",
  details:
    "A lot of people have underlying issues that keep them from reaching their full potential. Caden goes into in-depth blood work reading to identify what is holding you back, then helps build the right strategy so your body is optimized to meet your goals."
};

export const featureVideo: VideoConfig = {
  eyebrow: "See The Standard",
  headline: "Watch How Higher Standard Health Coaches Real Transformation.",
  description:
    "A closer look at the coaching style, discipline, and standard behind the results.",
  mp4Path: "/videos/hsh-feature.mp4",
  posterPath: "/videos/hsh-feature-cover.jpg"
};

export const aboutCoach = {
  eyebrow: "Meet Your Coach",
  headline: "Caden Brings High Standards, Clear Direction, And No Guesswork.",
  description:
    "Higher Standard Health is built for people who want more than motivation. Caden combines disciplined coaching, straightforward accountability, and a custom strategy that helps clients look better, feel stronger, and perform with confidence.",
  pillars: [
    { icon: Flame, label: "Results-first coaching" },
    { icon: Bolt, label: "Direct accountability" },
    { icon: ShieldCheck, label: "Long-term habit building" }
  ]
};

export const abVariants = {
  control: {
    heroKicker: "Online Fitness Coaching",
    transformationLine: "Precision coaching for real body transformation."
  },
  performance: {
    heroKicker: "Elite Online Transformation Coaching",
    transformationLine: "High-accountability coaching built to make results obvious."
  }
};
