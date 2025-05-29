import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "react", // ensures jsx transformation work correctly
      include: ["/*.jsx", "/*.js"], // include .jsx and .js files
    }),
  ],
});