import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      template: "treemap", // or sunburst
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html", // will be saved in project's root
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`,
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            const vendors = ["antd"];
            const matchingVendor = vendors.find((vendor) =>
              id.includes(vendor)
            );
            return matchingVendor
              ? `vendor_${matchingVendor.replace("-", "_")}`
              : "vendor";
          }
          return undefined;
        },
      },
    },
    outDir: "build",
  },
});
