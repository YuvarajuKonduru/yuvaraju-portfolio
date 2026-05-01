import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          2: "#111118",
          3: "#16161f",
          card: "#1a1a24",
        },
        accent: {
          DEFAULT: "#6C63FF",
          2: "#00D4AA",
          3: "#FF6B6B",
          glow: "rgba(108,99,255,0.15)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          2: "rgba(255,255,255,0.12)",
        },
        text: {
          DEFAULT: "#f0eee8",
          muted: "#8a8898",
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
