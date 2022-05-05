import { useState } from "react";
import Search from "./SearchApp";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#F6F8FF",
  titleColor: "#222731",
  tagLineColor: "#4B6A9B"
};

const DarkTheme = {
  pageBackground: "#141D2F",
  titleColor: "#FFFFFF",
  tagLineColor: "#FFFFFF"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Search theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
