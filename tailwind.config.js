/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumblue: "#4040f2",
        greenyellow: "#dcff48",
        mediumslateblue: "#6666ff",
      },
      spacing: {},
      fontFamily: {
        // Satoshi Light
        "satoshi-light": ["Satoshi", "sans-serif"],
        "satoshi-light-italic": ["Satoshi", "sans-serif"],
        
        // Satoshi Regular
        "satoshi-regular": ["Satoshi", "sans-serif"],
        "satoshi-italic": ["Satoshi", "sans-serif"],
        
        // Satoshi Medium
        "satoshi-medium": ["Satoshi", "sans-serif"],
        "satoshi-medium-italic": ["Satoshi", "sans-serif"],
        
        // Satoshi Bold
        "satoshi-bold": ["Satoshi", "sans-serif"],
        "satoshi-bold-italic": ["Satoshi", "sans-serif"],
        
        // Satoshi Black
        "satoshi-black": ["Satoshi", "sans-serif"],
        "satoshi-black-italic": ["Satoshi", "sans-serif"],
        
        // Satoshi Variable
        "satoshi-variable": ["Satoshi", "sans-serif"],
        "satoshi-variable-italic": ["Satoshi", "sans-serif"]
      },
      
      borderRadius: {
        "81xl": "100px",
        "45xl": "64px",
        "29xl": "48px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      lg: "18px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1920px",
      },
      mq1440: {
        raw: "screen and (max-width: 1440px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};