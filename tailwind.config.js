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
        bg: "var(--color-bg)",
      },
      fontFamily: {
        helv: ["var(--font-helv)"],
      },
      width: {
        mobile: "375px",
      },
      fontSize: {
        h2: "40px",
        h3: "30px",
        h4: "20px",
        p: "18px",
      },
    },
  },
  plugins: [],
};
