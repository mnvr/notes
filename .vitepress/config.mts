import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Notes",
    description: "Notes by Manav",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        sidebar: generateSidebar(),
        socialLinks: [
            { icon: "github", link: "https://github.com/mnvr/notes" },
            { icon: "mastodon", link: "https://mastodon.social/@mnvr" },
        ],
    },
});
