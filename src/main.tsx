import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AmazingProvider } from "@amazing-router/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AmazingProvider />
  </StrictMode>,
);
