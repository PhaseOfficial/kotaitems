/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        headline: ['Manrope', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
        label: ['Work Sans', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        "on-tertiary-container": "#4f9e4f",
        "tertiary": "#001602",
        "on-primary": "#ffffff",
        "inverse-primary": "#b9c3ff",
        "on-background": "#1a1c1d",
        "on-secondary-fixed": "#291800",
        "on-error-container": "#93000a",
        "primary": "#000b3f",
        "primary-container": "#001b71",
        "surface-bright": "#f9f9fb",
        "surface-container-lowest": "#ffffff",
        "error": "#ba1a1a",
        "surface-container-high": "#e8e8ea",
        "background": "#f9f9fb",
        "tertiary-fixed": "#a3f69c",
        "error-container": "#ffdad6",
        "on-tertiary-fixed": "#002204",
        "surface-variant": "#e2e2e4",
        "surface-container-highest": "#e2e2e4",
        "secondary-container": "#fcaf2b",
        "on-error": "#ffffff",
        "surface-tint": "#4658ab",
        "tertiary-container": "#002e06",
        "outline-variant": "#c5c5d3",
        "on-surface": "#1a1c1d",
        "on-surface-variant": "#454651",
        "primary-fixed-dim": "#b9c3ff",
        "secondary-fixed-dim": "#ffb94e",
        "on-primary-fixed-variant": "#2d4092",
        "on-tertiary-fixed-variant": "#005312",
        "on-secondary": "#ffffff",
        "tertiary-fixed-dim": "#88d982",
        "on-secondary-container": "#6a4500",
        "surface-dim": "#d9dadc",
        "inverse-surface": "#2f3132",
        "on-tertiary": "#ffffff",
        "outline": "#757683",
        "on-primary-fixed": "#001256",
        "secondary-fixed": "#ffddb2",
        "surface": "#f9f9fb",
        "surface-container-low": "#f3f3f5",
        "on-secondary-fixed-variant": "#624000",
        "secondary": "#825500",
        "on-primary-container": "#7688df",
        "surface-container": "#eeeef0",
        "inverse-on-surface": "#f0f0f2",
        "navigation": '#dfe0db',
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Example custom utility
      addUtilities({
        '.custom-utility': {
          display: 'inline-block',
          padding: '0.5rem',
          backgroundColor: '#000b3f',
        },
      });
    }),
  ],
};
