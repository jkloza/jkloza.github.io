import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#296eb4",
    },
    secondary: {
      main: "#f4d06f",
    },
    warning: {
      main: "#d5573b",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "default",
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "menu" },
          style: {
            textTransform: "none",
            color: "secondary",
          },
        },
      ],
    },
  },
});
