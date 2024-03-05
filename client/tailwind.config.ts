import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#304ffe",
        "primary-text": "#434a54",
        "primary-success": "#00bf4f",
        "primary-info": "#00aeff",
        "primary-warning": "#ff8f00",
        "primary-danger": "#ea4335",
      },
    },
  },
  plugins: [],
};
export default config;
