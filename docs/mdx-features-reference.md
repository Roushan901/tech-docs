---
id: mdx-features-reference
---

# MDX and Markdown Reference

This page is the authoritative reference for writing documentation in TechDOCS.

## Choose the right file type

- Use `.md` for static content.
- Use `.mdx` when you need React components in the page.

## Frontmatter

Add metadata at the top of each document:

```yaml
---
title: Page Title
description: Short description
sidebar_position: 1
---
```

## Core Markdown syntax

### Headings and text

```md
# H1
## H2
### H3

**bold** *italic* `inline code`
```

### Lists and links

```md
- unordered item
1. ordered item

[Internal link](/docs/intro)
[External link](https://docusaurus.io)
```

### Code blocks

````md
```bash title="Install dependencies"
npm install
```
````

## Admonitions

Use admonitions for important guidance:

```md
:::tip
Use this for practical recommendations.
:::

:::warning
Use this for risky operations.
:::
```

## MDX components

Import components at the top of `.mdx` files:

```jsx
import InteractiveCodeEditor from '@site/src/components/InteractiveCodeEditor';
```

Use the component in content:

```jsx
<InteractiveCodeEditor
  title="JavaScript Playground"
  initialCode={`console.log('Hello')`}
/>
```

## Tables

```md
| Field | Type | Required |
|-------|------|----------|
| name  | text | Yes      |
| id    | uuid | Yes      |
```

## Math (KaTeX)

Inline math: `$E = mc^2$`

Block math:

```md
$$
\int_0^1 x^2 dx = \frac{1}{3}
$$
```

## Authoring standards

- Keep headings task-oriented.
- Keep paragraphs short and direct.
- Use copy-paste-safe commands.
- Validate all links before publishing.
- Prefer examples from real workflows, not placeholders.

## Related pages

- [Quick Start Components](/docs/quick-start-components)
- [All Interactive Components](/docs/all-interactive-components)
- [Markdown Features Tutorial](/docs/tutorial-basics/markdown-features)
