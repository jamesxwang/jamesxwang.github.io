import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { redirects } from "./src/content/redirects";

export default defineConfig({
  site: "https://jamesxwang.com",
  trailingSlash: "always",
  redirects,
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
