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
  // Main sidebar with organized documentation structure
  tutorialSidebar: [
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
        {
          type: 'doc',
          id: 'writing-best-practices',
          label: 'Writing Best Practices',
        },
      ],
    },
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
      label: 'Cloud & DevOps',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'cloud-devops/index',
          label: 'Cloud Platforms',
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
    {
      type: 'category',
      label: 'DevOps Practices',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'devops/index',
          label: 'DevOps Practices',
        },
        {
          type: 'doc',
          id: 'devops/cicd',
          label: 'CI/CD Pipeline Documentation',
        },
        {
          type: 'doc',
          id: 'devops/containers',
          label: 'Docker & Kubernetes Documentation',
        },
        {
          type: 'doc',
          id: 'devops/iac',
          label: 'Infrastructure As Code (IaC)',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-document',
          label: 'Create A Document',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-blog-post',
          label: 'Create A Blog Post',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-page',
          label: 'Create A Page',
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
