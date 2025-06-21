import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// import swup from "@swup/astro";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    // swup({
    //   animationScope: "containers",
    //   containers: ["#swup"],
    //   // theme: "swipe",
    //   // reloadScripts: false,
    //   // preload: {
    //   //   hover: false,
    //   //   visible: false,
    //   // },
    // }),
  ],
  vite: { plugins: [tailwindcss()] },
});
