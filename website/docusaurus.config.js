// @ts-check

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "DripVerse Library",
  tagline: "Welcome to DripVerse Library",
  url: "https://library.dripverse.org",
  baseUrl: "/",
  organizationName: "dripverse",
  projectName: "library",
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "https://use.fontawesome.com/221fd444f5.js",
    "/js/copy-code-button.js",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Source+Code+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap",
    "/css/copy-code-button.css",
    "/css/landing-page.css",
    "/css/library.min.css",
  ],
  favicon: "img/favicon.ico",
  customFields: {
    disableHeaderTitle: true,
    fonts: {
      myFont: ["Inter", "sans-serif"],
    },
  },
  themes: ["@saucelabs/theme-github-codeblock"],
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          breadcrumbs: true,
          editUrl: "https://github.com/dripverse/library/edit/main/website",
          path: "../docs",
          sidebarPath: "./sidebars.json",
          routeBasePath: "/",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        googleAnalytics: {
          trackingID: "G-70BTQR5V72",
          anonymizeIP: true,
        },
        blog: {},
        theme: {
          customCss: "/src/css/customTheme.css",
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    prism: {
      additionalLanguages: [
        "rust",
        "java",
        "python",
        "ruby",
        "go",
        "typescript",
      ],
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Library",
      logo: {
        alt: "DripVerse Logo",
        src: "img/logo.png",
        srcDark: "img/logo-white.png",
      },
      items: [
        {
          to: "/papers/welcome",
          label: "📃 Papers",
          position: "left",
        },
        {
          href: "https://blog.dripverse.org",
          label: "Blog",
          position: "right",
        },
      ],
    },
    image: "img/logo.png",
    footer: {
      links: [],
      copyright: "Copyright © 2022 DripVerse",
      logo: {
        src: "img/logo.png",
      },
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      "zh-CN": {
        label: "简体中文",
      },
    },
  },
};
