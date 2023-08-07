import { Components } from "@mui/material";

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      "html, body, #root": {
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
        position: "fixed",
        display: "flex",
        flexDirection: "column",
      },
    },
  },
};

export { components };

