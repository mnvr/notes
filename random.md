<script setup>
import { useData, useRouter } from "vitepress";

const { theme } = useData();
const router = useRouter();

const randomElement = (xs) => xs[Math.floor(Math.random() * xs.length)];

// Note: theme.sidebar is a proxy object which is undefined within this script,
// and it needs to be passed from the markdown itself.

const goToRandomPage = (sidebar) =>
    router.go(randomElement(sidebar.map(({link}) => link)));

</script>

<ClientOnly>

{{ goToRandomPage(theme.sidebar) }}

</ClientOnly>
