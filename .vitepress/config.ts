import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { generateFeed } from "./feed";

/* https://vitepress.dev/reference/site-config */
export default defineConfig({
    title: "Notes",
    description: "Notes by Manav",
    head: [["link", { rel: "icon", href: "/icon.png", type: "image/png" }]],
    titleTemplate: false,
    cleanUrls: true,
    lastUpdated: true,
    /* https://vitepress.dev/reference/default-theme-config */
    themeConfig: {
        logo: "/icon.png",
        /* https://vitepress-sidebar.jooy2.com/ */
        sidebar: generateSidebar({
            // Don't show these in the sidebar.
            excludeFiles: ["README.md", "random.md"],
            // Use the "title" from frontmatter as the sidebar entry.
            useTitleFromFrontmatter: true,
            // Sort using the "date" field in frontmatter.
            sortMenusByFrontmatterDate: true,
            // Sort so that the latest entry is at the top.
            sortMenusOrderByDescending: true,
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
    buildEnd: generateFeed,
});
