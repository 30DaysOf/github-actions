// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {

  customFields: {
    description: "This specification defines a use case for a fictional rentals portals app.",
  },
  title: 'GitHub Actions',
  tagline: 'Learn Concepts. Build Actions. Automate Workflows.',

  url: 'https://30DaysOf.github.io',
  baseUrl: '/github-actions/', 
  favicon: 'img/favicon.ico',
  organizationName: '30DaysOf', 
  projectName: 'github-actions', 
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },

        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      docs :{
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: '#30DaysOfActions',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
          target: '_self',
          width: 32,
          height: 32,
        },
        style: 'primary',

        items: [
          {
            type: 'doc',
            position: 'right',
            label: 'Roadmap',
            docId: 'toc',
          },
          {
            href: 'https://github.com/30DaysOf/github-actions',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Nitya Narasimhan - Built with Docusaurus`,
        links: []
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [ ],
  };

module.exports = config;
