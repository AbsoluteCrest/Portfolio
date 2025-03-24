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
      },
      fontFamily: {
        commissioner: ['commissioner', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        heartless: ['Heartless', 'serif'],
        beefour: ['BeeFour','serif'],
        reacleblack: ['ReacleBlack', 'serif'],
        sfpro: ['SfPro', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delay': 'fadeUp 1.6s ease-out forwards',
        'fade-up-more-delay': 'fadeUp 2.4s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
