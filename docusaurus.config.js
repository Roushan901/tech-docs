// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TechDOCS - Developer Documentation Portal',
  tagline: 'Practical guidance for technical writing, APIs, cloud architecture, and DevOps operations',
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

  // Allow the build to succeed even if there are unresolved links (tutorial placeholders, etc.)
  onBrokenLinks: 'warn',

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
  ],

  clientModules: [
    require.resolve('./src/clientModules/algoliaInsights.js'),
  ],

  // Uncomment and add your real Google Analytics tracking ID when ready
  // plugins: [
  //   [
  //     '@docusaurus/plugin-google-gtag',
  //     {
  //       trackingID: 'G-XXXXXXXXXX',
  //       anonymizeIP: true,
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Algolia DocSearch configuration
      algolia: {
        appId: 'NNCX8DGX61',
        apiKey: '86e2aca43bb565d7d9c017e8ff626166',
        indexName: 'techdocstechdocs',
        contextualSearch: true,
        searchParameters: {
          hitsPerPage: 10,
          clickAnalytics: true,
          analytics: true,
        },
        insights: true,
        searchPagePath: 'search',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {name: 'keywords', content: 'technical writing, API documentation, DevOps, documentation tools, technical writer, developer documentation, cloud computing, TechDOCS'},
        {name: 'author', content: 'Roushan Gupta'},
        {property: 'og:title', content: 'TechDOCS - Developer Documentation Portal'},
        {property: 'og:description', content: 'Practical guidance for technical writing, APIs, cloud architecture, and DevOps operations.'},
        {property: 'og:image', content: 'https://techdocs.co.in/img/docusaurus-social-card.jpg'},
        {property: 'og:url', content: 'https://techdocs.co.in'},
        {property: 'og:type', content: 'website'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'TechDOCS - Developer Documentation Portal'},
        {name: 'twitter:description', content: 'Practical guidance for technical writing, APIs, cloud architecture, and DevOps operations'},
        {name: 'twitter:image', content: 'https://techdocs.co.in/img/docusaurus-social-card.jpg'},
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'TechDOCS',
        logo: {
          alt: 'TechDOCS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'writing-best-practices',
            position: 'left',
            label: 'Writing Standards',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'Guides',
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
            label: 'Cloud',
            position: 'left',
            to: '/docs/cloud-devops',
          },
          {
            label: 'DevOps',
            position: 'left',
            to: '/docs/devops',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
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
                label: 'YouTube',
                href: 'https://www.youtube.com/@TechDocsTutorials',
              },
              {
                label: 'Contact',
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
        copyright: `© ${new Date().getFullYear()} TechDOCS. Documentation resources for engineering and technical writing teams. Created by <a href="https://www.linkedin.com/in/roushan-g-99242299/" target="_blank" rel="noopener noreferrer" style="color: rgba(255,255,255,0.5); font-weight: 500; text-decoration: none;">Roushan Gupta</a>.`,
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
        content: '38E57BBFE8761DB1',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/img/logo.svg',
        as: 'image',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
        as: 'style',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'prefetch',
        href: '/docs/writing-best-practices',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'prefetch',
        href: '/blog',
      },
    },
  ],
};

export default config;
