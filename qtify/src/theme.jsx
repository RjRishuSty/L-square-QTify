import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      light: "#34C94B",
      main: "#121212",
      dark: "#FFFFFF",
      contrastText: "#0000",
    },
  },
});

export default theme;
