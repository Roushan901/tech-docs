---
id: deploy-your-site
title: Deploy Your Site
sidebar_position: 5
sidebar_label: Deploy Your Site
tags: []
---

# Deploy Your Site

Docusaurus is a static site generator. It builds deployable HTML, CSS, and JavaScript assets.

## Build your site

Build your site **for production**:

```bash
npm run build
```

Static output is generated in the `build` directory.

## Deploy your site

Validate the build locally before deployment:

```bash
npm run serve
```

The `build` output is served at [http://localhost:3000/](http://localhost:3000/).

Deploy the `build` directory to your hosting platform of choice.

For platform-specific options, refer to the [Docusaurus deployment guide](https://docusaurus.io/docs/deployment).
