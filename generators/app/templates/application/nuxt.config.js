const pkg = require('./package');
const metaVars = require('./metaVars');

/*
 * Define main configuration.
 */

module.exports = {
  mode: 'universal',
  loading: {
    color: metaVars.colour,
  },
  css: [
    '~assets/css/custom.css',
  ],
  plugins: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    'nuxt-webfontloader',
    'nuxt-fontawesome',
  ],
  webfontloader: {},
  'google-analytics': {
    id: metaVars.googleAnalytics,
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ]
  },
  axios: {},
  build: {
    extend(config, ctx) {}
  },
  /* 
   * Allow the use of typical Cloudflare improvements and Google fonts through Content Security Policy.
   */
  render: {
    csp: {
      hashAlgorithm: 'sha256',
      policies: {
        'default-src': [
          "'none'",
        ],
        'font-src': [
          'fonts.gstatic.com',
        ],
        'img-src': [
          "'self'",
          'www.google-analytics.com',
        ],
        'script-src': [
          "'self'",
          'ajax.cloudflare.com',
          'www.google-analytics.com',
        ],
        'style-src': [
          "'self'",
          "'unsafe-inline'",
          'fonts.googleapis.com',
        ],
        'connect-src': [
          "'self'",
        ]
      },
    }
  }
};

/* 
 * Separately set various head tags to declutter the main configuration while allowing configuration for SEO.
 * 
 * It is likely nothing below will need to be modified.
 */

module.exports.head = {
  title: metaVars.title,
  htmlAttrs: {
    lang: metaVars.lang,
  },
  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content: pkg.description,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: metaVars.twitter.cardType,
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: metaVars.twitter.creator,
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: metaVars.twitter.publisher,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: metaVars.og.type,
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: metaVars.og.siteName,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: metaVars.title,
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: metaVars.locale,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: metaVars.url,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: pkg.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: metaVars.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: metaVars.url,
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
    },
  ],
};
