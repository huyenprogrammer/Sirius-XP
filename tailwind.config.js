/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lora: "'Lora', serif",
      },
      height: {
        "content-destop": "calc(100vh - 60px)",
        "content-mobile": "calc(100vh - 100px)",
        "task-destop": "calc(100vh - 260px)",
        "task-mobile": "calc(100vh - 290px)",
      },
      backgroundImage: {
        "blue-theme": "linear-gradient(to bottom right, #2C545F, #59C0DF)",
      },
    },
  },
  plugins: [],
};
