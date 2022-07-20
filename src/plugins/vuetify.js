// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import {createVuetify} from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "theme1",
    variations: {
      colors: ["primary", "secondary"],
      lighten: 1,
      darken: 2,
    },
    themes: {
      theme1: {
        colors: {
          surface: "#FFFFFF",
          primary: "#2A3E72",
          secondary: "#0DCCC2",
          secondary2: "#3AA0B5",
          heading: "#2A3E72",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      theme2: {
        colors: {
          surface: "#000000",
          primary: "#2A3E72",
          secondary: "#03DAC6",
          secondary2: "#3AA0B5",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
});
