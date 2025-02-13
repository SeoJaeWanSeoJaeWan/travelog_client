import { ThemeProvider } from "styled-components";
import Global from "@/styles/global";
import { color, font, media } from "@/styles/theme";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MapProvider } from "./hooks/utils/useMap";
import { ModalProvider } from "./hooks/utils/useModal";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ color, media, font }}>
        <ModalProvider>
          <MapProvider>
            <Global />
            <Router />
          </MapProvider>
        </ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
