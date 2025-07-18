/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // --- Colors ---
      colors: {
        primary: "#80EF80",
        secondary: "#BADBA2",
        accent: "#42D674",
        background: "#E3F0A3",
      },

      // --- Spacing (padding, margin, gaps, etc.) ---
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },

      // --- Font sizes & line heights ---
      fontSize: {
        sm: ["0.875rem", "1.25rem"],
        md: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
      },

      // --- Border radius ---
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },

      // --- Heights for buttons/inputs ---
      height: {
        sm: "2rem",
        md: "2.5rem",
        lg: "3rem",
      },

      // --- Widths for buttons/inputs ---
      width: {
        sm: "8rem",
        md: "12rem",
        lg: "16rem",
      },

      // --- Max widths for layout containers ---
      maxWidth: {
        "7xl": "1280px",
        "8xl": "1440px",
      },

      // --- Box shadows ---
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
      },

      // --- Transition timing and easing ---
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },

      // --- Fonts (add your font family if any) ---
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        // --- Wrapper for responsive page container ---
        ".wrapper": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.md"),
          paddingRight: theme("spacing.md"),
          [`@screen sm`]: {
            paddingLeft: theme("spacing.lg"),
            paddingRight: theme("spacing.lg"),
          },
          [`@screen lg`]: {
            paddingLeft: theme("spacing.xl"),
            paddingRight: theme("spacing.xl"),
            maxWidth: theme("maxWidth.7xl"),
          },
        },

        // --- Input wrapper styling ---
        ".input-primary": {
          display: "flex",
          alignItems: "center",
          padding: theme("spacing.md"),
          borderRadius: theme("borderRadius.lg"),
          border: `1px solid #aaa`,
          backgroundColor: "#fff",
        },

        // --- Input field styling ---
        ".input-field": {
          flex: "1",
          border: "1px solid #aaa",
          outline: "none",
          backgroundColor: "transparent",
          color: "#000",
          fontSize: theme("fontSize.md")[0],
          borderRadius: theme("borderRadius.md"),
          transition: "background-color 0.2s ease-in-out",
          "&:focus": {
            border: "1px solid #000",
          },
        },

        // --- Primary button base ---
        ".btn-primary": {
          backgroundColor: theme("colors.primary"),
          color: "#fff",
          fontWeight: "600",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: theme("borderRadius.md"),
          transition: "background-color 0.2s ease-in-out",
          boxShadow: theme("boxShadow.sm"),
          "&:hover": {
            backgroundColor: theme("colors.accent"),
            boxShadow: theme("boxShadow.md"),
          },
          "&:disabled": {
            backgroundColor: theme("colors.secondary"),
            cursor: "not-allowed",
            opacity: "0.6",
            boxShadow: "none",
          },
        },

        ".btn-secondary": {
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: "200",
          border: "1px solid #aaa",
          display: "inline-flex",
          alignItems: "center", 
          justifyContent: "center",
          borderRadius: theme("borderRadius.md"),
          transition: "background-color 0.2s ease-in-out",
          boxShadow: theme("boxShadow.sm"),
          "&:hover": {
            boxShadow: theme("boxShadow.md"),
          },
          "&:disabled": {
            backgroundColor: theme("colors.secondary"),
            cursor: "not-allowed",
            opacity: "0.6",
            boxShadow: "none",
          },
        },

        // --- Button size variants ---
        ".btn-sm": {
          fontSize: theme("fontSize.sm")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.md")}`,
          height: theme("height.sm"),
        },
        ".btn-md": {
          fontSize: theme("fontSize.md")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.lg")}`,
          height: theme("height.md"),
        },
        ".btn-lg": {
          fontSize: theme("fontSize.lg")[0],
          padding: `${theme("spacing.md")} ${theme("spacing.xl")}`,
          height: theme("height.lg"),
        },

        // --- Input size variants ---
        ".input-sm": {
          fontSize: theme("fontSize.sm")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.md")}`,
          height: theme("height.sm"),
        },
        ".input-md": {
          fontSize: theme("fontSize.md")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.lg")}`,
          height: theme("height.md"),
        },
        ".input-lg": {
          fontSize: theme("fontSize.lg")[0],
          padding: `${theme("spacing.md")} ${theme("spacing.xl")}`,
          height: theme("height.lg"),
        },
      });
    },
  ],
};
