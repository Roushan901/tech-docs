---
id: create-a-document
title: Create a Document
sidebar_position: 2
sidebar_label: Create a Document
tags: []
---

# Create a Document

In Docusaurus, documents are organized pages connected by:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first document

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

The document is available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the sidebar

Docusaurus can generate sidebars automatically from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

You can also define sidebar structure explicitly in `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```

## Best practice

Use one document per user task or concept. Keep titles specific and link related pages intentionally.
