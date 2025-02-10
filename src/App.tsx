import { ThemeProvider } from "styled-components";
import Global from "@/styles/global";
import { color, font, media } from "@/styles/theme";
import Router from "./router";

function App() {
  return (
    <ThemeProvider theme={{ color, media, font }}>
      <Global />
      <Router />
    </ThemeProvider>
  );
}

export default App;
