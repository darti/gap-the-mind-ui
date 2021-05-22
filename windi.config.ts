// tailwind.config.ts
import { defineConfig, transform } from "windicss/helpers"
import formsPlugin from "windicss/plugin/forms"
import typography from "windicss/plugin/typography"

export default defineConfig({
  attributify: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nord0: "#2E3440",
        nord1: "#3B4252",
        nord2: "#434C5E",
        nord3: "#4C566A",
        nord4: "#D8DEE9",
        nord5: "#E5E9F0",
        nord6: "#ECEFF4",
        nord7: "#8FBCBB",
        nord8: "#88C0D0",
        nord9: "#81A1C1",
        nord10: "#5E81AC",
        nord11: "#BF616A",
        nord12: "#D08770",
        nord13: "#EBCB8B",
        nord14: "#A3BE8C",
        nord15: "#B48EAD",
      },
    },
  },
  plugins: [
    formsPlugin,
    typography,
    transform("tailwind-nord"),
    transform("tailwindcss-elevation")(["responsive"]),
    transform("tailwindcss-blend-mode"),
  ],
})
