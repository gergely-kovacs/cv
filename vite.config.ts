import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import tailwindcss from '@tailwindcss/vite';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
    base: '/cv/',
    plugins: [
        /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
        // devtools(),
        tailwindcss(),
        solidPlugin(),
        solidSvg(),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
