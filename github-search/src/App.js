import { useState } from "react";
import Switch from "./SearchApp.js";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#F6F8FF",
  titleColor: "#222731",
  boxColor: "white",
  tagLineColor: "#4B6A9B"

};

const DarkTheme = {
  pageBackground: "#141D2F",
  titleColor: "#FFFFFF",
  boxColor: "#1E2A47",
  tagLineColor: "white"
};

const themes = {
  light: LightTheme,
  dark: DarkTheme
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <Switch theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
