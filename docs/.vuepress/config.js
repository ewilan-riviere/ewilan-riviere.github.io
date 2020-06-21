const sidebar = require('./nav/sidebar')

module.exports = (ctx) => ({
  postcss: {
    plugins: [require('tailwindcss'), require('autoprefixer')]
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },

  lang: 'en-US',
  title: 'Memorandum',
  description: 'Keep knowledge safe',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: '@vuepress/vue',
  themeConfig: {
    repo: 'ewilan-riviere/memorandum',
    editLinks: false,
    smoothScroll: true,
    label: 'English',
    selectText: 'Languages',
    ariaLabel: 'Select language',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: require('./nav/nav'),
    sidebar: {
      '/documentation/': sidebar.getDocumentationSidebar(
        '',
        'Dependencies Badges'
      )
      // '/games/': sidebar.getGamesSidebar('Animal Crossings', 'Oxygen Not Included'),
      // '/safe/': sidebar.getSafeSidebar('Safe', 'SSH'),
      // '/projects/': sidebar.getProjectSidebar('Projects', 'Portfolio'),
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@dovyp/vuepress-plugin-clipboard-copy', true]
  ],
  extraWatchFiles: ['.vuepress/nav/nav.js', '.vuepress/nav/sidebar.js'],
  configureWebpack: {
    resolve: {
      alias: {
        '@images': 'docs/.vuepress/images'
      }
    }
  },
  markdown: {
    // lineNumbers: true,
    anchor: { permalink: false }
  }
})
