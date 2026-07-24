import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#05070B",
          panel: "rgba(20, 24, 34, 0.52)"
        },
        accent: {
          cyan: "#7AB6FF",
          cyanSoft: "rgba(122, 182, 255, 0.22)",
          violet: "#8D7BFF"
        },
        text: {
          primary: "#F5F7FA",
          muted: "#99A3B2"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(122,182,255,0.25), 0 0 24px rgba(141,123,255,0.24)",
        panel: "0 12px 42px rgba(0,0,0,0.45)",
        insetSoft: "inset 0 1px 0 rgba(255,255,255,0.08)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 30% 20%, rgba(122,182,255,0.2), transparent 42%), radial-gradient(circle at 70% 70%, rgba(141,123,255,0.16), transparent 48%)"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        floatSlow: "floatSlow 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
