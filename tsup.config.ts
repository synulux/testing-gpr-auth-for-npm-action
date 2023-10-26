import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/"],
  minify: true,
  outDir: "./out/",
  format: "esm",
  sourcemap: true
});
