<script setup>
import { useData } from "vitepress";

const { theme } = useData();

const randomElement = (xs) => xs[Math.floor(Math.random() * xs.length)];

// Note: theme.sidebar is a proxy object which is undefined at this point, but
// can be used in the code below.
</script>

<ClientOnly>
<pre>

{{randomElement(theme.sidebar.map(({link}) => link))}}

</pre>
</ClientOnly>
