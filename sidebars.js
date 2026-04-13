// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Documentation Guides sidebar
  guidesSidebar: [
    {
      type: 'category',
      label: 'Documentation Guides',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'release-notes',
          label: 'Release Notes',
        },
        {
          type: 'doc',
          id: 'user-guides',
          label: 'User Guides',
        },
        {
          type: 'doc',
          id: 'installation-guides',
          label: 'Installation Guides',
        },
        {
          type: 'doc',
          id: 'admin-guides',
          label: 'Admin Guides',
        },
        {
          type: 'doc',
          id: 'integration-guides',
          label: 'Integration Guides',
        },
        {
          type: 'doc',
          id: 'api-references',
          label: 'API References',
        },
      ],
    },
  ],

  // Writing Best Practices sidebar
  writingSidebar: [
    {
      type: 'category',
      label: 'Writing Standards',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'writing-best-practices',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'writing-best-practices/writing-best-practices-audience-and-intent',
          label: 'Audience and Intent',
        },
        {
          type: 'doc',
          id: 'writing-best-practices/writing-best-practices-content-types',
          label: 'Content Types',
        },
        {
          type: 'doc',
          id: 'writing-best-practices/writing-best-practices-content-structure',
          label: 'Content Structure',
        },
        {
          type: 'doc',
          id: 'writing-best-practices/writing-best-practices-clear-concise-writing',
          label: 'Clear and Concise Writing',
        },
        {
          type: 'doc',
          id: 'writing-best-practices/writing-best-practices-procedural-writing',
          label: 'Procedural Writing',
        },
        {
          type: 'doc',
          id: 'writing-best-practices/writing-best-practices-commands-code-ui',
          label: 'Commands, Code, and UI Text',
        },
        {
          type: 'doc',
          id: 'writing-best-practices/writing-best-practices-style-terminology',
          label: 'Style and Terminology',
        },
        {
          type: 'doc',
          id: 'writing-best-practices/writing-best-practices-review-checklist',
          label: 'Review and Quality Checklist',
        },
      ],
    },
  ],

  // Cloud & DevOps sidebar
  cloudSidebar: [
    {
      type: 'category',
      label: 'Cloud Platforms',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'cloud-devops/cloud-devops-index',
          label: 'Cloud Platforms Overview',
        },
        {
          type: 'doc',
          id: 'cloud-devops/aws',
          label: 'AWS (Amazon Web Services)',
        },
        {
          type: 'doc',
          id: 'cloud-devops/azure',
          label: 'Azure (Microsoft Azure)',
        },
        {
          type: 'doc',
          id: 'cloud-devops/gcp',
          label: 'GCP (Google Cloud Platform)',
        },
      ],
    },
  ],

  // DevOps Practices sidebar
  devopsSidebar: [
    {
      type: 'category',
      label: 'DevOps Practices',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'devops/devops-index',
          label: 'DevOps Overview',
        },
        {
          type: 'doc',
          id: 'devops/cicd',
          label: 'CI/CD Pipelines',
        },
        {
          type: 'doc',
          id: 'devops/containers',
          label: 'Docker and Kubernetes',
        },
        {
          type: 'doc',
          id: 'devops/iac',
          label: 'Infrastructure as Code',
        },
      ],
    },
  ],

  // Tutorial sidebar (optional - can be removed if not needed)
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Interactive Components',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'all-interactive-components',
          label: 'All Interactive Components',
        },
        {
          type: 'doc',
          id: 'interactive-components',
          label: 'Interactive Components',
        },
        {
          type: 'doc',
          id: 'quick-start-components',
          label: 'Quick Start Components',
        },
        {
          type: 'doc',
          id: 'mdx-features-reference',
          label: 'MDX Features Reference',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorial Basics',
      items: [
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-document',
          label: 'Create a Document',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-blog-post',
          label: 'Create a Blog Post',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-page',
          label: 'Create a Page',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/markdown-features',
          label: 'Markdown Features',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/deploy-your-site',
          label: 'Deploy Your Site',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/congratulations',
          label: 'Congratulations',
        },
      ],
    },
  ],
};

export default sidebars;
