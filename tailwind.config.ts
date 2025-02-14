

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... rest of your config
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll var(--duration) linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse var(--duration) linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  // ... rest of your config
};


