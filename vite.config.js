import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Fullstack Explorer Template v1.0
// Locked configuration for educational stability
export default defineConfig({
  plugins: [react()],
  base: "/fullstack-explorer-demo/",
  build: {
    outDir: "dist",
  },
});
