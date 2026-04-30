import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AmazingProvider } from "@amazing-router/react";
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AmazingProvider />
    </ThemeProvider>
  </StrictMode>,
);
