import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Notes",
    description: "Notes by Manav",
    lastUpdated: true,
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        // https://vitepress-sidebar.jooy2.com/
        sidebar: generateSidebar({
            hyphenToSpace: true,
            capitalizeFirst: true,
            // Use the `title` in Frontmatter if present, otherwise
            // fallback to the filename.
            useTitleFromFrontmatter: true,
        }),
        socialLinks: [
            { icon: "github", link: "https://github.com/mnvr/notes" },
            { icon: "mastodon", link: "https://mastodon.social/@mnvr" },
        ],
        editLink: {
            pattern: "https://github.com/mnvr/notes/edit/main/:path",
        },
    },
});
