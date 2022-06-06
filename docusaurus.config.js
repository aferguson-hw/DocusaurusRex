// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Healthwise',
  tagline: 'Find what you need by clicking the button below',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
    [
      'redocusaurus',
      {
        specs: [
          {
            route: 'api/authorization/spec',
            spec: './specifications/auth.json'
          },
          {
            route: 'api/content/spec',
            spec: './specifications/content.json'
          },
          {
            route: 'api/search/spec',
            spec: './specifications/search.json'
          },
          {
            route: 'api/taxonomy/spec',
            spec: './specifications/taxonomy.json'
          },
          {
            route: 'api/triage/spec',
            spec: './specifications/triage.json'
          },
          {
            route: 'api/provisioning/spec',
            spec: 'https://platform.test.hwapps.net/provisioning/swagger/v1/swagger.json'
          }
        ],
        theme: {
          primaryColor: '#006272',
          // The redoc options object
          options: {
            disableSearch: true,
            hideDownloadButton: true
          },
          // Redoc theme options
          theme: {
            sidebar: {
              width: '260px',
              backgroundColor: '#fafafa',
              textColor: '#006272'
            }
          }
        }
      }
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: './api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./apiSidebar.js'),
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //Get rid of the light/dark mode toggle in the navbar
      colorMode: {
        disableSwitch: true
      },
      // Make the sidebar collapsible
      hideableSidebar: false,
      navbar: {
        title: '',
        style: 'primary',
        logo: {
          alt: 'Healthwise Logo',
          src: 'img/healthwise-logo-white.svg',
        },
        items: [
          {
            to: '/',
            activeBasePath: 'docs',
            position: 'left',
            label: 'Documentation'
          },
          {
            to: 'api/',
            activeBasePath: 'api',
            position: 'left',
            label: 'API Reference',
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `©1996-${new Date().getFullYear()} Healthwise, Incorporated. Healthwise, Healthwise for every health decision, and the Healthwise logo are trademarks of Healthwise, Incorporated.`,
      },
    }),
};

module.exports = config;
