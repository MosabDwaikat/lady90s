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
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "outlined", color: "secondary" },
              style: {
                "&.MuiTextField-root": {
                  "& .MuiInputLabel-root": {
                    color: "#f5f5f5"
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#f5f5f5"
                    },
                    "&:hover fieldset": {
                      borderColor: "#f5f5f5"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ffffff"
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "#ffffff"
                    }
                  },
                  "&.Mui-focused .MuiInputLabel-root": {
                    color: "#ffffff"
                  }
                }
              }
            }
          ]
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
    primary: {
      main: "#343434"
    },
    secondary: {
      main: "#ffffff"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1536
    }
  }
});

export default theme;
