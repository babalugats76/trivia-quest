import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : undefined, // use --base flag for builds
  build: {
    outDir: "dist",
  },
}));
