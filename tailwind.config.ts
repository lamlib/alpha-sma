import type { Config } from "tailwindcss";

export default {
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
        lamlibColor1: '#432E54', // ?? 
        lamlibColor2: '#4B4376', // Navy
        lamlibColor3: '#AE445A', // Maroon
        lamlibColor4: '#E8BCB9', // Peach
      },
    },
  },
  plugins: [],
} satisfies Config;
