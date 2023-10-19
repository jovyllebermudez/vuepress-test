import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress-test/",

  lang: "en-US",
  title: "Blog Demo",
  description: "A blog demo for vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
