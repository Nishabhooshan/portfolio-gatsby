import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import NewSection from "../components/NewSection";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

export default function indexPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NewSection />
    </ThemeProvider>
  );
}
