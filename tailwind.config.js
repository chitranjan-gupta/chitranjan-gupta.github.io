/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // All colors now reference CSS variables so themes work automatically
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-card': 'var(--bg-card)',
        'border-base': 'var(--border)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
      },
      backgroundImage: {
        'gradient-accent': 'var(--gradient)',
        'gradient-text': 'var(--gradient-text)',
      },
      keyframes: {
        orbFloat: {
          'from': { transform: 'scale(1) translate(0,0)' },
          'to': { transform: 'scale(1.15) translate(20px,-20px)' },
        },
        fadeSlideUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseBadge: {
          '0%,100%': { boxShadow: '0 0 0 0 var(--accent-2-pulse)' },
          '50%': { boxShadow: '0 0 0 6px transparent' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scrollBounce: {
          '0%,100%': { opacity: '0.2', transform: 'rotate(45deg) translateY(-4px)' },
          '50%': { opacity: '1', transform: 'rotate(45deg) translateY(4px)' },
        },
        avatarPulse: {
          'from': { transform: 'scale(0.95)', opacity: '0.7' },
          'to': { transform: 'scale(1.05)', opacity: '1' },
        },
      },
      animation: {
        'orb-float': 'orbFloat 8s ease-in-out infinite alternate',
        'fade-slide-up': 'fadeSlideUp 0.8s ease both',
        'fade-slide-up-delayed': 'fadeSlideUp 0.8s 0.2s ease both',
        'pulse-badge': 'pulseBadge 2s ease infinite',
        'blink': 'blink 1s step-end infinite',
        'scroll-bounce': 'scrollBounce 1.4s ease-in-out infinite',
        'avatar-pulse': 'avatarPulse 4s ease-in-out infinite alternate',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
