/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // DHC palette — warm cream / deep ink / clay accent
        cream: {
          DEFAULT: "#f4efe6",
          50: "#faf7f1",
          100: "#f4efe6",
          200: "#ebe3d2",
          300: "#dfd3b8",
        },
        ink: {
          DEFAULT: "#1c1b18",
          900: "#0e0d0c",
          800: "#1c1b18",
          700: "#2c2a26",
          600: "#46433d",
          500: "#6b665c",
          400: "#8d877b",
        },
        clay: {
          DEFAULT: "#b85c38",
          50: "#fbeee6",
          400: "#cc7b58",
          500: "#b85c38",
          600: "#9a4a2c",
          700: "#7c3a23",
        },
        moss: "#5d6a4a",
      },
      fontFamily: {
        // Editorial serif headlines + clean sans body + utility mono
        display: ["var(--font-fraunces)", "Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        editorial: "-0.02em",
      },
      maxWidth: {
        reading: "68ch",
        wide: "84rem",
      },
      objectPosition: {
        "top-33": "center top 33.33%",
        "top-50": "center top 50%",
      },
      backgroundPosition: {
        "center-33": "center 33.33%",
      },
      backgroundSize: {
        "size-66": "100% 66.67%",
      },
    },
    screens: {
      sm: "640px",
      md: "900px",
      lg: "1200px",
      xl: "1600px",
      "2xl": "2000px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
