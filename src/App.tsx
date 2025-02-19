import { ThemeProvider } from "styled-components";
import Global from "@/styles/global";
import { color, font, media } from "@/styles/theme";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InfoProvider } from "./hooks/utils/useInfo";
import mutationError from "./apis/mutationError";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 0,
    },
    mutations: {
      onError: mutationError,
    },
  },
});

function App() {
  useEffect(() => {
    if (!Kakao) return;

    Kakao.init("e92f3de1386bcb7d39b4f118b5a48d36");
  }, []);

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
