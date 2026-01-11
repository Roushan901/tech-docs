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
    'intro',
    'quick-reference-index',
    {
      type: 'category',
      label: '📚 Documentation Guides',
      collapsed: false,
      items: [
        'release-notes',
        'user-guides',
        'installation-guides',
        'admin-guides',
        'integration-guides',
        'api-references',
        'writing-best-practices',
      ],
    },
    {
      type: 'category',
      label: '🎨 Interactive Components',
      collapsed: false,
      items: [
        'all-interactive-components',
        'interactive-components',
        'quick-start-components',
        'mdx-features-reference',
      ],
    },
    {
      type: 'category',
      label: '☁️ Cloud & DevOps',
      collapsed: false,
      items: [
        'cloud-devops/index',
        'cloud-devops/aws',
        'cloud-devops/azure',
        'cloud-devops/gcp',
      ],
    },
    {
      type: 'category',
      label: '🚀 DevOps Practices',
      collapsed: false,
      items: [
        'devops/index',
        'devops/cicd',
        'devops/containers',
        'devops/iac',
      ],
    },
    {
      type: 'category',
      label: '📖 Tutorial - Basics',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/create-a-page',
        'tutorial-basics/markdown-features',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
  ],
};

export default sidebars;
