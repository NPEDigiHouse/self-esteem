/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      light: "#FFFFFF",
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      "primary-text": {
        50: "#657387",
        100: "#5b697d",
        200: "#515f73",
        300: "#475569",
        400: "#3d4b5f",
        500: "#334155",
        600: "#29374b",
        700: "#1f2d41",
        800: "#152337",
        900: "#0b192d"
      },
      "secondary-text": {
        50: "#c6d5ea",
        100: "#bccbe0",
        200: "#b2c1d6",
        300: "#a8b7cc",
        400: "#9eadc2",
        500: "#94a3b8",
        600: "#8a99ae",
        700: "#808fa4",
        800: "#76859a",
        900: "#6c7b90"
      },
      error: {
        DEFAULT: "#FF2C56",
        50: "#ff5e88",
        100: "#ff547e",
        200: "#ff4a74",
        300: "#ff406a",
        400: "#ff3660",
        500: "#ff2c56",
        600: "#f5224c",
        700: "#eb1842",
        800: "#e10e38",
        900: "#d7042e"
      },
      green: {
        DEFAULT: "#4af087",
        50: "#4af087",
        100: "#4af087",
        200: "#4af087",
        300: "#4af087",
        400: "#4af087",
        500: "#4af087",
        600: "#4af087",
        700: "#4af087",
        800: "#4af087",
        900: "#4af087"
      },
      primaryBlue: {
        DEFAULT: "#1C82AD",
        50: "#918cff",
        100: "#8782ff",
        200: "#7d78ff",
        300: "#736eff",
        400: "#6964ff",
        500: "#5f5af7",
        600: "#5550ed",
        700: "#4b46e3",
        800: "#413cd9",
        900: "#3732cf"
      },
      primaryDarkBlue: {
        DEFAULT: "#00337C",
        50: "#918cff",
        100: "#8782ff",
        200: "#7d78ff",
        300: "#736eff",
        400: "#6964ff",
        500: "#5f5af7",
        600: "#5550ed",
        700: "#4b46e3",
        800: "#413cd9",
        900: "#3732cf"
      },
      primaryDarkerBlue: {
        DEFAULT: "#13005A",
        50: "#918cff",
        100: "#8782ff",
        200: "#7d78ff",
        300: "#736eff",
        400: "#6964ff",
        500: "#5f5af7",
        600: "#5550ed",
        700: "#4b46e3",
        800: "#413cd9",
        900: "#3732cf"
      },
      primaryGreen: {
        DEFAULT: "#03C988",
        50: "#918cff",
        100: "#8782ff",
        200: "#7d78ff",
        300: "#736eff",
        400: "#6964ff",
        500: "#5f5af7",
        600: "#5550ed",
        700: "#4b46e3",
        800: "#413cd9",
        900: "#3732cf"
      },
      step2: {
        DEFAULT: "#009dab",
        50: "#918cff",
        100: "#8782ff",
        200: "#7d78ff",
        300: "#736eff",
        400: "#6964ff",
        500: "#5f5af7",
        600: "#5550ed",
        700: "#4b46e3",
        800: "#413cd9",
        900: "#3732cf"
      },
      step3: {
        DEFAULT: "#006aab",
        50: "#918cff",
        100: "#8782ff",
        200: "#7d78ff",
        300: "#736eff",
        400: "#6964ff",
        500: "#5f5af7",
        600: "#5550ed",
        700: "#4b46e3",
        800: "#413cd9",
        900: "#3732cf"
      },
      secondary: {
        DEFAULT: "#DEDDF1",
        50: "#ffffff",
        100: "#ffffff",
        200: "#fcfbff",
        300: "#f2f1ff",
        400: "#e8e7fb",
        500: "#deddf1",
        600: "#d4d3e7",
        700: "#cac9dd",
        800: "#c0bfd3",
        900: "#b6b5c9"
      },
      "pastel-blue-light": {
        DEFAULT: "#DAF5FF",
        50: "#DAF5FF",
        100: "#DAF5FF",
        200: "#DAF5FF",
        300: "#DAF5FF",
        400: "#DAF5FF",
        500: "#DAF5FF",
        600: "#DAF5FF",
        700: "#DAF5FF",
        800: "#DAF5FF",
        900: "#DAF5FF"
      },
      "pastel-blue-normal": {
        DEFAULT: "#B9E9FC",
        50: "#B9E9FC",
        100: "#B9E9FC",
        200: "#B9E9FC",
        300: "#B9E9FC",
        400: "#B9E9FC",
        500: "#B9E9FC",
        600: "#B9E9FC",
        700: "#B9E9FC",
        800: "#B9E9FC",
        900: "#B9E9FC"
      },
      "pastel-blue-darker": {
        DEFAULT: "#B0DAFF",
        50: "#B0DAFF",
        100: "#B0DAFF",
        200: "#B0DAFF",
        300: "#B0DAFF",
        400: "#B0DAFF",
        500: "#B0DAFF",
        600: "#B0DAFF",
        700: "#B0DAFF",
        800: "#B0DAFF",
        900: "#B0DAFF"
      },
      "pastel-blue-black": {
        DEFAULT: "#266e7d",
        50: "#266e7d",
        100: "#266e7d",
        200: "#266e7d",
        300: "#266e7d",
        400: "#266e7d",
        500: "#266e7d",
        600: "#266e7d",
        700: "#266e7d",
        800: "#266e7d",
        900: "#266e7d"
      },
      "pastel-primary-text": {
        DEFAULT: "#2f4858",
        50: "#2f4858",
        100: "#2f4858",
        200: "#2f4858",
        300: "#2f4858",
        400: "#2f4858",
        500: "#2f4858",
        600: "#2f4858",
        700: "#2f4858",
        800: "#2f4858",
        900: "#2f4858"
      },
      "pastel-yellow": {
        DEFAULT: "#FEFF86",
        50: "#FEFF86",
        100: "#FEFF86",
        200: "#FEFF86",
        300: "#FEFF86",
        400: "#FEFF86",
        500: "#FEFF86",
        600: "#FEFF86",
        700: "#FEFF86",
        800: "#FEFF86",
        900: "#FEFF86"
      },
      "sc-cp": {
        DEFAULT: "#B6076A",
        50: "#B6076A",
        100: "#DA216B",
        200: "#DA216B",
        300: "#F7B52F",
        400: "#F7B52F",
        500: "#FFDB57",
        600: "#9C42B8",
        700: "#9C42B8",
        800: "#603991",
        900: "#603991"
      },
      "answer-gradient": {
        DEFAULT: "#f7b52f",
        50: "#f7b52f",
        100: "#f7b52f",
        200: "#cb895d",
        300: "#cb895d",
        400: "#9c5f7a",
        500: "#9c5f7a",
        600: "#603991",
        700: "#603991",
        800: "#603991",
        900: "#603991"
      },
      
    },
    fontFamily: {
      'roboto': [
        'roboto', 'sans-serif'
      ],
      'roboto-bold': [
        'roboto-bold', 'sans-serif'
      ],
      'roboto-light': [
        'roboto-light', 'sans-serif'
      ],
      'roboto-semibold': [
        'roboto-semibold', 'sans-serif'
      ],
      'alkatra': [
        'alkatra', 'sans-serif'
      ],
      'alkatra-semibold': [
        'alkatra-semibold', 'sans-serif'
      ],
      'alkatra-bold': ['alkatra-bold', 'sans-serif']
    },
    fontSize: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 20,
      "2xl": 24,
      "3xl": 28,
      "10xl": 80
    },
    letterSpacing: {
      "01": "0.001em",
      "1": "0.0015em",
      "2": "0.0025em",
      "4": "0.004em"
    },
    dropShadow: {
      "1": "0px 1px 4px rgba(0, 0, 0, 0.12)",
      "navbar-menu": "drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
    },
    extend: {
      keyframes: {
        gradientAnim: {
          "0%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          }
        }
      },
      
      backgroundImage: {
        'backgroundImg': "url('../src/assets/images/background-img.png')",
        'backgroundImg1': "url('../src/assets/images/background-img1.png')",
        'backgroundImg2': "url('../src/assets/images/background-img2.png')",
        'bgColor': "url('../src/assets/images/bg.png')",
        'bg1': "url('../src/assets/images/bg1.jpg')",
        'bg2': "url('../src/assets/images/bg2.jpg')",
        'bg3': "url('../src/assets/images/bg3.jpg')",
        'test': "url('../src/assets/images/self-esteem-test.jpg')",
        'type': "url('../src/assets/images/self-esteem-result.jpg')"
      },
      animation: {
        gradient: 'gradientAnim 2s ease infinite'
      }
    }
  },
  plugins: []
}
