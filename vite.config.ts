import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { amazingRouterPlugin } from "@amazing-router/core";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    amazingRouterPlugin(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "amazing-router-routes": path.resolve(__dirname, "./.amazing-router/routes.json"),
      "amazing-router-route-files": path.resolve(__dirname, "./.amazing-router/routeFiles.ts"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("/node_modules/react/") || id.includes("/node_modules/react-dom/")) {
              return "react-vendor";
            }
            if (id.includes("@radix-ui")) return "radix-ui";
            if (id.includes("lucide-react")) return "lucide";
            return "vendor";
          }
        },
      },
    },
    cssCodeSplit: true,
  },
});
