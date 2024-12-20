import type { Config } from "tailwindcss";

const characterColors = [
  "ironclad",
  "silent",
  "defect",
  "watcher",
  "colorless",
];

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ironclad: "#e6340e",
        silent: "#2ECC71",
        defect: "#33A8FF",
        watcher: "#9B59B6",
        colorless: "#828282",
      },
    },
  },
  safelist: characterColors.map((color) => `bg-${color}`),
  plugins: [],
} satisfies Config;
