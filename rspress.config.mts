import {defineConfig} from "@rspress/core";
import * as path from "node:path"

export default defineConfig({
  root: path.join(__dirname, "docs"),
  outDir: "dist",
  search: false,
  title: "知识库",
  description: "A multilingual Rspress documentation site.",
  lang: "zh",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  locales: [
    {
      lang: "zh",
      label:"简体中文",
      title: "知识库"
    }
  ]
})