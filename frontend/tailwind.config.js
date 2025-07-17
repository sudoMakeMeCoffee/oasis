/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#80EF80',
        secondary: '#BADBA2',
        accent: '#42D674',
        background: '#E3F0A3',
      },
      spacing: {
        // 👇 Custom paddings, margins, gaps, etc.
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
      },
      fontSize: {
        'sm': ['0.875rem', '1.25rem'],
        'md': ['1rem', '1.5rem'],
        'lg': ['1.125rem', '1.75rem'],
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
      },
      height: {
        'sm': '2rem',
        'md': '2.5rem',
        'lg': '3rem',
      },
      width: {
        'sm': '8rem',
        'md': '12rem',
        'lg': '16rem',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        // 🔹 Reusable input wrapper
        '.input-primary': {
          display: 'flex',
          alignItems: 'center',
          padding: theme('spacing.md'),
          borderRadius: theme('borderRadius.lg'),
          border: `1px solid ${theme('colors.secondary')}`,
          backgroundColor: '#fff',
        },

        // 🔹 Reusable password input with icon
        '.input-password-wrapper': {
          display: 'flex',
          alignItems: 'center',
          padding: theme('spacing.md'),
          borderRadius: theme('borderRadius.lg'),
          border: `1px solid ${theme('colors.secondary')}`,
          backgroundColor: '#fff',
          gap: theme('spacing.sm'),
        },

        // 🔹 Input field inside wrapper
        '.input-field': {
          flex: '1',
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          color: '#000',
          fontSize: theme('fontSize.md')[0],
        },

        // 🔹 Password icon
        '.input-password-wrapper svg': {
          cursor: 'pointer',
          color: theme('colors.accent'),
          width: '1.25rem',
          height: '1.25rem',
        },

        // 🔹 Primary button base
        '.btn-primary': {
          backgroundColor: theme('colors.primary'),
          color: '#fff',
          fontWeight: '600',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme('borderRadius.md'),
          transition: 'background-color 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: theme('colors.accent'),
          },
          '&:disabled': {
            backgroundColor: theme('colors.secondary'),
            cursor: 'not-allowed',
            opacity: '0.6',
          },
        },

        // 🔹 Size variants
        '.btn-sm': {
          fontSize: theme('fontSize.sm')[0],
          padding: `${theme('spacing.sm')} ${theme('spacing.md')}`,
          height: theme('height.sm'),
        },
        '.btn-md': {
          fontSize: theme('fontSize.md')[0],
          padding: `${theme('spacing.sm')} ${theme('spacing.lg')}`,
          height: theme('height.md'),
        },
        '.btn-lg': {
          fontSize: theme('fontSize.lg')[0],
          padding: `${theme('spacing.md')} ${theme('spacing.xl')}`,
          height: theme('height.lg'),
        },
      });
    },
  ],
};
