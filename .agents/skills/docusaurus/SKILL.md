---
name: Docusaurus Content Management
description: Instructions for managing Docusaurus documentation, blogs, and configurations effectively.
---

# Docusaurus Content Management

**Who This Is For:** AI Assist agents, technical writers, and documentarians modifying the Docusaurus project.

**When to Use This Guide:** You need to add new documentation, write a blog post, configure sidebar navigation, or make CSS styling updates across the site.

**What You'll Learn:** How to correctly format Markdown/MDX files, adhere to the site's folder structure, structure frontmatter properly, and write clear procedural content.

## Overview

As an automated agent managing this Tech Docs platform, you must adhere rigidly to the existing folder structure and standard Docs-as-Code conventions. This guide provides step-by-step procedures to ensure that new additions to the `docs/` or `blog/` directories seamlessly match the user's custom Docusaurus setup.

**Real-World Scenario:** The user asks you to draft a new quick-reference guide. You need to know exactly where to place it (`docs/`), how to construct the frontmatter (including `id`, `sidebar_position`, and `sidebar`), and how to leverage MDX for advanced components.

## Folder Structure Context
Our documentation is organized directly into the following key folders:
- `docs/` - Core documentation (e.g., `admin-guides.md`, `writing-best-practices.md`, `intro.md`)
- `blog/` - Sequential blogs (e.g., `2025-11-23-docs-as-code-approach.md`)
- `src/` - React elements and core styles (e.g., `src/css/custom.css`)

## Adding Documentation Content

### 1. File Placement & Markdown Context
Create new conceptual pages or guides in the `docs/` directory or a relevant sub-directory (e.g., `docs/tutorial-basics/`).

### 2. Frontmatter Setup Checklist
Ensure every new `.md` or `.mdx` file contains accurate frontmatter:

- [ ] Define the `id` (e.g., `id: my-new-guide`)
- [ ] Define `sidebar_position` if it belongs to an auto-generated sidebar.
- [ ] Define `sidebar` if it maps explicitly to a structured sidebar config (e.g. `sidebar: guidesSidebar`).

```markdown
---
id: new-guide
sidebar_position: 3
sidebar: guidesSidebar
---

# New Guide Title
```

### 3. Procedural Writing Best Practices
When instructing users or writing guides within Docusaurus, maintain consistent writing rules:
- Keep explanations simple and jargon-free.
- Use explicit command snippets in `bash` codeblocks.
- Use callouts (`>`) or Docusaurus Admonitions (`:::tip`, `:::info`, `:::note`) for crucial call-outs.

> Always use active voice. Structure your information to help users complete specific tasks smoothly.

## Adding a Blog Post

### 1. Naming Convention
Blog posts MUST trace back to dates. Create a `.md` or `.mdx` file in the `blog/` directory formatted as `YYYY-MM-DD-title.md`.

### 2. Frontmatter Configuration
- [ ] Assign the `slug: my-blog-post`
- [ ] Assign the `title`
- [ ] Map author using `authors: [author_id]` (Ensure this ID maps to `blog/authors.yml`)
- [ ] Tag properly using `tags: [cloud, devops]`

```markdown
---
slug: docs-as-code
title: Why Docs-as-Code Works
authors: [admin]
tags: [docusaurus, documentation]
---

Write your introductory text here.

<!-- truncate -->

Write the rest of the blog here. Note the truncate feature for the list summary preview!
```

## Styling and React Components

### Customizing CSS
Edit `src/css/custom.css`. Ensure changes respect the site's CSS variable conventions (e.g., modifying `[data-theme='dark']` for dark mode compliance).

### Using MDX Components
When interactive components are needed, rely on Docusaurus MDX formatting:
```javascript
import Highlight from '@site/src/components/Highlight';

<Highlight color="#25c2a0">Docusaurus highlight</Highlight>
```

## Running the Site Locally

### Development Server Tasks
```bash
# Start the dev server to preview changes automatically
npm start
```

### Build Checks
```bash
# Ensure the documentation builds smoothly after major rewrites
npm run build
```

By following this skill guide, your documentation modifications will stay consistent, readable, and perfectly aligned with the project's technical writing standards.
