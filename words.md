---
title: Testing
date: 2024-09-07
---

# 17

<style module>
.button {
    color: red;
    font-weight: bold;
    padding: 10px;
    border: 1px solid tomato;
    animation: blink 4s infinite reverse;
}

@keyframes blink {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>

<button :class="$style.button">
Increment
</button>

Testing

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>
