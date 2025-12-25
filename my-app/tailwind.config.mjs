/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './my-app/app/**/*.{js,ts,jsx,tsx}',
    './my-app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        royal: '#4169E1', // RoyalBlue
        cabin: {
          bg: "#020617",      // deep rainy night
          panel: "#0f172a",   // cards / content blocks
          text: "#e5e7eb",    // main text
          muted: "#9ca3af",   // secondary text
          moss: "#4b7f52",    // forest green
          pine: "#365f3b",    // darker green
          rain: "#5b7c99",    // rain blue
          glow: "#c9a66b",    // warm cabin light
          red: "#ef4444",     // accent red
        },
      },
    },
  },
  plugins: [],
}
