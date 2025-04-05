import type { Config } from "tailwindcss";

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
        'primary-blue': '#0080ff',
        'primary-green': '#00ff82',
      },
      fontFamily: {
        univia: ['UniviaPro', 'sans-serif'],
        neulis: ['Neulis Alt', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
