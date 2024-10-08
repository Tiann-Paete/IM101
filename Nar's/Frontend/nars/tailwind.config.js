/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        modalOpen: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        toss: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(-5deg)' },
          '50%': { transform: 'translateY(-40px) rotate(5deg)' },
          '75%': { transform: 'translateY(-20px) rotate(-5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-5px)' },
        },
      },

      animation: {
        modal: 'modalOpen 0.3s ease-out forwards',
        toss: 'toss 0.8s ease-in-out',
        fadeUp: 'fadeUp 1.5s ease-out forwards',
        lift: 'lift 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-gray-100': { backgroundColor: '#f3f4f6' },
        '.bg-gray-200': { backgroundColor: '#e5e7eb' },
      };
      addUtilities(newUtilities, ['hover']);
    },
  ],
};