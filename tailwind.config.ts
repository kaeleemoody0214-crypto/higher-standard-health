import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          50: "#fff2f2",
          100: "#ffe1e1",
          200: "#ffc7c7",
          300: "#ff9c9c",
          400: "#ff6464",
          500: "#ff2a2a",
          600: "#ff3131",
          700: "#e52020",
          800: "#b11717",
          900: "#6c0c0c"
        },
        graphite: "#090909",
        carbon: "#141414"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,49,49,0.28), 0 12px 40px rgba(255,49,49,0.28)",
        card: "0 24px 60px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(255,49,49,0.28), transparent 35%), linear-gradient(180deg, #120808 0%, #090909 55%, #050505 100%)",
        "panel-red":
          "linear-gradient(135deg, rgba(255,49,49,0.15), rgba(255,49,49,0.02))",
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      },
      fontFamily: {
        display: ["Teko", "Oswald", "Arial Narrow", "sans-serif"],
        body: ["Rajdhani", "Segoe UI", "sans-serif"]
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,49,49,0.2)" },
          "50%": { boxShadow: "0 0 0 12px rgba(255,49,49,0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "pulse-glow": "pulse-glow 2.8s ease-out infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
