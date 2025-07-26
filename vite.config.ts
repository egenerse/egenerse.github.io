import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@contexts": "/src/contexts",
      "@games": "/src/games",
      "@utils": "/src/utils",
    },
  },
});
