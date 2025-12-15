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
  favicon: 'img/favicon.ico',

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
    locales: ['en'],
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
          showLastUpdateTime: false,
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
  ],

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: "en",
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#10b981',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#10b981',
          },
        ],
      },
    ],
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
        {name: 'keywords', content: 'technical writing, API documentation, DevOps, documentation tools, Docusaurus, technical writer, developer documentation, cloud computing'},
        {name: 'author', content: 'Roushan Gupta'},
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Tech Docs',
        logo: {
          alt: 'Tech Docs Logo',
          src: 'https://img.icons8.com/color/96/documents.png',
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
                to: '/docs/intro',
              },
              {
                label: 'User Guides',
                to: '/docs/tutorial-basics/create-a-document',
              },
              {
                label: 'Installation Guides',
                to: '/docs/tutorial-basics/create-a-page',
              },
              {
                label: 'Admin Guides',
                to: '/docs/tutorial-basics/markdown-features',
              },
              {
                label: 'Integration Guides',
                to: '/docs/tutorial-basics/deploy-your-site',
              },
              {
                label: 'API References',
                to: '/docs/tutorial-extras/manage-docs-versions',
              },
            ],
          },
          {
            label: 'Cloud & DevOps',
            position: 'left',
            items: [
              {
                label: 'AWS',
                to: '/docs/tutorial-basics/markdown-features',
              },
              {
                label: 'Azure',
                to: '/docs/tutorial-basics/deploy-your-site',
              },
              {
                label: 'GCP',
                to: '/docs/tutorial-extras/manage-docs-versions',
              },
            ],
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
};

export default config;
