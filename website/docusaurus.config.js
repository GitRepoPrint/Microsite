// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RepoPrint',
  tagline: 'Fingerprinting Git Repositories',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://GitRepoPrint.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Microsite/',
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GitRepoPrint', // Usually your GitHub org/user name.
  projectName: 'Microsite', // Usually your repo name.
  trailingSlash: false,

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
      title: 'RepoPrint',
      logo: {
        alt: 'Logo RepoPrint',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/docs/milestones', label: 'Milestones', position: 'left' },
        { to: '/docs/calendar', label: 'Calendar', position: 'left' },
        { to: '/docs/minutes', label: 'Minutes', position: 'left' },
        { to: '/docs/team', label: 'About Us', position: 'left' },
        {
          href: 'https://github.com/GitRepoPrint',
          label: 'GitHub',
          position: 'right',
        },
        ],
      },
      footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Milestones',
              to: '/docs/milestones',
            },
            {
              label: 'Calendar',
              to: '/docs/calendar',
            },
            {
              label: 'About Us',
              to: '/docs/team',
            },
          ],
        },
        {
          title: 'Projeto',
          items: [
            {
              label: 'Universidade de Aveiro',
              href: 'https://www.ua.pt/',
            },
            {
              label: 'DETI',
              href: 'https://www.ua.pt/deti/',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/GitRepoPrint/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RepoPrint - PEI, DETI Universidade de Aveiro.`,
    },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
