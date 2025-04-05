import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2176b9",
    },
    secondary: {
      main: "#150578",
    },
    background: {
      default: "#121212",
      paper: "#1f1c1c",
    },
    text: {
      primary: "#fefefe",
      secondary: "#f0f0f0",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "76px",
      "@media (max-width:991px)": {
        fontSize: "40px",
      },
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "49px",
      "@media (max-width:991px)": {
        fontSize: "40px",
      },
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: "25px",
    },
    body1: {
      fontSize: "20px",
      fontWeight: 400,
    },
    button: {
      fontSize: "16px",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "60px",
          padding: "21px 42px",
          "@media (max-width:991px)": {
            padding: "20px",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width:991px)": {
            maxWidth: "1470px",
          },
        },
      },
    },
  },
});
