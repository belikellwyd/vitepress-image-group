import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress-image-group",
  base: '/vitepress-image-group/',
  description: "Vue 3 component to render responsive image groups with automatic layout styling (icon or big).",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }],
  ],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },
  themeConfig: {
    logo: 'favicon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github Page', link: 'https://github.com/belikellwyd/vitepress-image-group' },
      { text: 'NPM Page', link: 'https://www.npmjs.com/package/@belikellwyd/vitepress-image-group' }
    ],
    sidebar: [
      { text: 'Home', link: '/index' },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/belikellwyd' }
    // ]
  }
})