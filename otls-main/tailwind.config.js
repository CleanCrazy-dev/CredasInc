module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@credasinc/ctip-ui/components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: ".7rem",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      colors: {
        primary: "#007b78",
        "primary-foreground": "white",
        "primary-100": "#007b78",
        "primary-500": "#c8dddd",
        green: "#007b78",
        "primary-on-dark": "#009d99",
        "body-color": "#495057",
        tertiary: "#fdbc11",
        "gray-light": "#dee2e6",
        gray: {
          DEFAULT: "#495057",
          400: "#ced4da",
          600: "#6c757d",
          700: "#737373",
        },
        yellow: "#fdbc11",
        cyan: {
          500: "#00d1cc",
        },
        gray: {
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
      },
      fontSize: {
        "base-sm": ".9375rem",
        "2.5xl": ["1.75rem", "2.3125rem"],
        "4.5xl": ["2.625rem", "3.125rem"],
        "base-sm": ".9375rem",
      },
      boxShadow: {
        unselected: "0 0 0 1px #ced4da90",
        selected: "0 0 0 4px #00d1cc",
      },
    },
  },
  plugins: [],
};
