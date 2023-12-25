import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
// import image from "@astrojs/image";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
    site: 'https://TongDucThanhNam.github.io', // Your website URL https://<username>.github.io
    // base: '/thanh-nam/', // Your respository name, e.g. "/my-site"
    sitemap: false,
    // Generate sitemap (set to "false" to disable)
    integrations: [sitemap(), mdx(), lit()], // Add renderers to the config
    // This is for the astro-icon package. You can find more about the package here: https://www.npmjs.com/package/astro-icon
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});