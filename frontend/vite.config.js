import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Use Babel-based React plugin

export default defineConfig({
  plugins: [react()],
});
