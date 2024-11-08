/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      keyframes: {
        push: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(2rem)" },
        },
        pull: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-4rem)" },
        },
      },
      animation: {
        push: "push linear 700ms ",
        pull: "pull linear 700ms ",
      },
    },
  },
  plugins: [],
};
