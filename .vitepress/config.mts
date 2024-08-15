import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Notes",
    description: "Notes by Manav",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/mnvr/notes" },
            { icon: "mastodon", link: "https://mastodon.social/@mnvr" },
        ],
    },
});
