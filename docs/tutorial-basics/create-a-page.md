---
id: create-a-page
title: Create a Page
sidebar_position: 1
sidebar_label: Create a Page
tags: []
---

# Create a Page

Create standalone pages by adding Markdown or React files under `src/pages`.

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create a React page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

The page is available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create a Markdown page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

The page is available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).

## When to use `src/pages` vs `docs`

- Use `src/pages` for standalone marketing or utility pages.
- Use `docs` for versioned documentation with sidebars and doc navigation.
