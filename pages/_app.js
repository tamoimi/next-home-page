import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#eeeeee",
    },
    primary: {
      main: "#94B49F",
    },
    secondary: {
      main: "#35BA9B",
    },
    success: {
      main: "#3AADD9",
    },
    error: {
      main: "#D94452",
    },
    info: {
      main: "#DCDCDC",
    },
    warning: {
      main: "#FDCD56",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
