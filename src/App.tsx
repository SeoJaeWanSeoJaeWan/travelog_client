import { ThemeProvider } from "styled-components";
import Global from "@/styles/global";
import { color, font, media } from "@/styles/theme";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InfoProvider } from "./hooks/utils/useInfo";
import mutationError from "./apis/mutationError";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
    mutations: {
      onError: mutationError,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ color, media, font }}>
        <InfoProvider>
          <Global />
          <Router />
        </InfoProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
