---
id: tutorial-extras-manage-docs-versions
title: Manage Docs Versions
sidebar_position: 1
sidebar_label: Manage Docs Versions
tags: []
---

# Manage Docs Versions

Docusaurus can manage multiple versions of your docs.

## Create a docs version

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

After the command, you will have two versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

Add a version dropdown in the navbar so readers can switch releases quickly.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in the navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

Update versioned content in its corresponding directory:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`

## Operational guidance

- Version only when release behavior or APIs change materially.
- Avoid modifying past versions unless fixing factual errors.
- Document deprecations and migration steps with each release.
