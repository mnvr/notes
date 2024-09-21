---
title: React render
date: 2024-08-31
---

# When does React render a component?

1. React will render a component iff its state changes.

   > Context is state.

2. When React renders a component, it will also render all its children.

   > To opt a child out of this, memo it, or pass it as a prop.
