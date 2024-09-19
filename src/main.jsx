import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { LazyMotion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const loadFeatures = () =>
  import("./utils/index.js").then((res) => res.domAnimation);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LazyMotion features={loadFeatures} strict>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LazyMotion>
  </StrictMode>
);
