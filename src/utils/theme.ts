import { createTheme } from "@mui/material/styles";
import { red, pink } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: pink.A700,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
