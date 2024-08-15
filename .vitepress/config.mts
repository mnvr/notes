import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Notes",
    description: "Notes by Manav",
    head: [["link", { rel: "icon", href: "/icon.png", type: "image/png" }]],
    lastUpdated: true,
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        logo: "/icon.png",
        // https://vitepress-sidebar.jooy2.com/
        sidebar: generateSidebar({
            hyphenToSpace: true,
            capitalizeFirst: true,
            // Use the `title` in Frontmatter if present, otherwise
            // fallback to the filename.
            useTitleFromFrontmatter: true,
        }),
        search: {
            provider: "local",
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/mnvr/notes" },
            { icon: "mastodon", link: "https://mastodon.social/@mnvr" },
        ],
        externalLinkIcon: true,
        editLink: {
            pattern: "https://github.com/mnvr/notes/edit/main/:path",
        },
    },
});
