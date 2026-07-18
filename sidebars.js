// @ts-check

/**
 * Single unified sidebar - client-side filtering handles context awareness
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  guidesSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        { type: 'doc', id: 'about', label: 'About TechDocs' },
        { type: 'doc', id: 'learning-paths', label: 'Learning Paths' },
        { type: 'doc', id: 'faq', label: 'FAQ' },
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      collapsed: true,
      items: [
        { type: 'doc', id: 'release-notes', label: 'Release Notes Overview' },
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      collapsed: true,
      items: [
        { type: 'doc', id: 'user-guides', label: 'User Guides Overview' },
      ],
    },
    {
      type: 'category',
      label: 'Installation Guides',
      collapsed: true,
      items: [
        { type: 'doc', id: 'installation-guides', label: 'Installation Guides Overview' },
      ],
    },
    {
      type: 'category',
      label: 'Admin Guides',
      collapsed: true,
      items: [
        { type: 'doc', id: 'admin-guides', label: 'Admin Guides Overview' },
      ],
    },
    {
      type: 'category',
      label: 'Integration Guides',
      collapsed: true,
      items: [
        { type: 'doc', id: 'integration-guides', label: 'Integration Guides Overview' },
      ],
    },
    {
      type: 'category',
      label: 'API References',
      collapsed: true,
      items: [
        { type: 'doc', id: 'api-references', label: 'API References Overview' },
      ],
    },
    {
      type: 'category',
      label: 'Writing Standards',
      collapsed: true,
      items: [
        { type: 'doc', id: 'writing-best-practices', label: 'Overview' },
        { type: 'doc', id: 'writing-best-practices/writing-best-practices-audience-and-intent', label: 'Audience and Intent' },
        { type: 'doc', id: 'writing-best-practices/writing-best-practices-content-types', label: 'Content Types' },
        { type: 'doc', id: 'writing-best-practices/writing-best-practices-content-structure', label: 'Content Structure' },
        { type: 'doc', id: 'writing-best-practices/writing-best-practices-clear-concise-writing', label: 'Clear and Concise Writing' },
        { type: 'doc', id: 'writing-best-practices/writing-best-practices-procedural-writing', label: 'Procedural Writing' },
        { type: 'doc', id: 'writing-best-practices/writing-best-practices-commands-code-ui', label: 'Commands, Code, and UI Text' },
        { type: 'doc', id: 'writing-best-practices/writing-best-practices-style-terminology', label: 'Style and Terminology' },
        { type: 'doc', id: 'writing-best-practices/writing-best-practices-review-checklist', label: 'Review and Quality Checklist' },
      ],
    },
    {
      type: 'category',
      label: 'Cloud Platforms',
      collapsed: true,
      items: [
        { type: 'doc', id: 'cloud-devops/cloud-devops-index', label: 'Cloud Platforms Overview' },
        { type: 'doc', id: 'cloud-devops/aws', label: 'AWS (Amazon Web Services)' },
        { type: 'doc', id: 'cloud-devops/azure', label: 'Azure (Microsoft Azure)' },
        { type: 'doc', id: 'cloud-devops/gcp', label: 'GCP (Google Cloud Platform)' },
      ],
    },
    {
      type: 'category',
      label: 'DevOps Practices',
      collapsed: true,
      items: [
        { type: 'doc', id: 'devops/devops-index', label: 'DevOps Overview' },
        { type: 'doc', id: 'devops/cicd', label: 'CI/CD Pipelines' },
        { type: 'doc', id: 'devops/containers', label: 'Docker and Kubernetes' },
        { type: 'doc', id: 'devops/iac', label: 'Infrastructure as Code' },
      ],
    },
  ],
};

module.exports = sidebars;
