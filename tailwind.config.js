/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "neon-yellow": "#FAED25",
        "deep-purple": "#1a0b2e",
        "glass-black": "rgba(0, 0, 0, 0.7)",
        "glass-white": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        helv: ["var(--font-helv)"], // Keeping legacy just in case
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(250, 237, 37, 0.5)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 30px rgba(250, 237, 37, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
