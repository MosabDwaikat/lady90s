import { createTheme } from "@mui/material/styles";

const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
sans-serif`;

const codeFontFamily = `source-code-pro, Menlo, Monaco, Consolas, "Courier New",
monospace`;

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          fontFamily: fontFamily,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          direction: "rtl"
        },
        code: {
          fontFamily: codeFontFamily
        }
      }
    }
  },
  typography: {
    fontFamily,
    h1: { fontSize: "2.5rem" },
    h2: { fontSize: "2rem" },
    h3: { fontSize: "1.75rem" },
    h4: { fontSize: "1.5rem" },
    h5: { fontSize: "1.25rem" },
    h6: { fontSize: "1rem" }
  },
  palette: {
    // primary: {
    //   main: "#4CAF50"
    // },
    // secondary: {
    //   main: "#f44336"
    // }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

export default theme;
