import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F4F0EA",
          card: "#FAF8F5",
          sunken: "#EAE4DC",
          border: "#DED8CE",
        },
        ink: {
          DEFAULT: "#161618",
          navy: "#1A2333",
          muted: "#5C5B57",
          subtle: "#8A8882",
        },
        charcoal: {
          DEFAULT: "#161618",
          card: "#212125",
          step: "#25252A",
        },
        drag: {
          red: "#F87171",
          deep: "#DC2626",
          wash: "#FEF2F2",
          darkWash: "#1F1B1E",
        },
        flow: {
          blue: "#93C5FD",
          deep: "#2563EB",
          wash: "#EFF6FF",
          darkWash: "#181E27",
          emerald: "#059669",
        },
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
