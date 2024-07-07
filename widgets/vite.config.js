import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widgets/index.ts'),
      name: 'MyWidgets',
      fileName: (format) => `widgets.${format}.js`,
      formats: ['es', 'umd'], // Choose the formats you need
    },
    rollupOptions: {
      output: {
        globals: {
          // Add any external dependencies here if needed
        },
      },
    },
  },
  plugins: [dts()],
});