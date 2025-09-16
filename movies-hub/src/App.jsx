"use client";

import "./App.css";
import AppRouter from "./routes/AppRouter";
import { REACT_QUERY_CONFIG } from "./lib/constant/queryConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: REACT_QUERY_CONFIG.DEFAULT,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}
export default App;
