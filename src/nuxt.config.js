import theme from '@nuxt/content-theme-docs'
import tailwindTypography from '@tailwindcss/typography'

export default theme({
  docs: {
    primaryColor: '#E24F55'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['../../../../assets/css/app.css'],
  plugins: [
    { src: '../../../../plugins/vue-tailwind-screens', ssr: false },
  ],
  i18n: {
    locales: () => [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  content: {
    apiPrefix: '_content',
    dir: 'content',
    fullTextSearchFields: ['title', 'description', 'slug', 'text'],
    nestedProperties: ['categories.slug'],
    markdown: {
      externalLinks: {},
      footnotes: {
        inlineNotes: true,
      },
      remarkPlugins: [
        'remark-squeeze-paragraphs',
        'remark-slug',
        'remark-autolink-headings',
        'remark-external-links',
        'remark-footnotes',
      ],
      prism: {
        // theme: '~/assets/css/prism-vsc-dark-plus.css',
      },
    },
    yaml: {},
    csv: {},
    extendParser: {
      '.custom': (file) => ({
        body: file.split('\n').map((line) => line.trim()),
      }),
    },
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }
})
