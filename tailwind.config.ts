import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      fontSize: {
        base: "1.4rem",
        sm: "1.6rem",
        md: "1.8rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      colors: {
        "foreground-grey": "rgb(var(--foreground-grey))",
        "dark-blue": "rgb(var(--dark-blue))",
        "light-grey": "rgb(var(--light-grey))",
        "text-light": "rgb(var(--text-light))",
        "text-dark": "rgb(var(--text-dark))",
        green: "rgb(var(--green))",
        pink: "rgb(var(--pink))",
        "light-pink": "rgb(var(--light-pink))",
        brown: "rgb(var(--brown))",
        "dark-green": "rgb(var(--dark-green))",
        purple: "rgb(var(--purple))",
        card: "rgb(var(--card))",
      },
    },
  },
  plugins: [],
};
export default config;
