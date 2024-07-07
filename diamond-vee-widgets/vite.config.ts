import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/widgets/index.ts'),
            name: 'MyWidgetLibrary',
            fileName: (format) => `my-widget-library.${format}.ts`
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [],
            output: {
                globals: {
                    // Provide global variable names to replace your external imports
                    // e.g. `jquery` -> `jQuery`
                }
            }
        }
    }
});