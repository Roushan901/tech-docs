// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tech Docs - Professional Technical Writing Hub',
  tagline: 'Master technical writing, API documentation, and modern DevOps practices',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://techdocs.co.in',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Roushan901', // Usually your GitHub org/user name.
  projectName: 'tech-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          showLastUpdateTime: true, // Enable last update time
        },
        pages: {
          // Enable feedback on all pages
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-XXXXXXXXXX',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {name: 'keywords', content: 'technical writing, API documentation, DevOps, documentation tools, technical writer, developer documentation, cloud computing, TechDOCS'},
        {name: 'author', content: 'Roushan Gupta'},
        {property: 'og:title', content: 'TechDOCS - Professional Technical Writing Hub'},
        {property: 'og:description', content: 'Master technical writing, API documentation, and modern DevOps practices. Your comprehensive resource for creating professional documentation that developers love.'},
        {property: 'og:image', content: 'https://techdocs.co.in/img/docusaurus-social-card.jpg'},
        {property: 'og:url', content: 'https://techdocs.co.in'},
        {property: 'og:type', content: 'website'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'TechDOCS - Professional Technical Writing Hub'},
        {name: 'twitter:description', content: 'Master technical writing, API documentation, and modern DevOps practices'},
        {name: 'twitter:image', content: 'https://techdocs.co.in/img/docusaurus-social-card.jpg'},
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Tech Docs',
        logo: {
          alt: 'Tech Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Learn',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'Documentation',
            position: 'left',
            items: [
              {
                label: 'Release Notes',
                to: '/docs/release-notes',
              },
              {
                label: 'User Guides',
                to: '/docs/user-guides',
              },
              {
                label: 'Installation Guides',
                to: '/docs/installation-guides',
              },
              {
                label: 'Admin Guides',
                to: '/docs/admin-guides',
              },
              {
                label: 'Integration Guides',
                to: '/docs/integration-guides',
              },
              {
                label: 'API References',
                to: '/docs/api-references',
              },
            ],
          },
          {
            label: 'Cloud & DevOps',
            position: 'left',
            items: [
              {
                label: 'AWS',
                to: '/docs/cloud-devops/aws',
              },
              {
                label: 'Azure',
                to: '/docs/cloud-devops/azure',
              },
              {
                label: 'GCP',
                to: '/docs/cloud-devops/gcp',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            label: 'Contact Support',
            to: 'mailto:contact@techdocs.co.in',
            position: 'right',
            className: 'header-contact-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Tech Docs',
          src: 'https://img.icons8.com/color/96/documents.png',
          width: 50,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/roushan-g-99242299/',
              },
              {
                label: 'Contact Us',
                href: 'mailto:contact@techdocs.co.in',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Tech Docs - Your comprehensive resource for technical writing, API documentation, and DevOps best practices. <br/> Created by <a href="https://www.linkedin.com/in/roushan-g-99242299/" target="_blank" rel="noopener noreferrer">Roushan Gupta</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '3E578B8FE87612D81',
      },
    },
  ],
};

export default config;
