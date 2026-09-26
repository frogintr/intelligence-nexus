/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nexus: {
          dark: "#0b0d11",
          card: "#12161f",
          border: "#1e2638",
          muted: "#8892b0",
          accent: "#c5a059", // Editorial gold
          accentLight: "#e5c378",
          emerald: "#10b981",
          crimson: "#ef4444",
          cyan: "#38bdf8",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        'framed': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glow-gold': '0 0 25px -5px rgba(197, 160, 89, 0.25)',
      }
    },
  },
  plugins: [],
}
