import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import 'virtual:group-icons.css'

import { ImageGroup } from '@belikellwyd/vitepress-image-group'
import '@belikellwyd/vitepress-image-group/style.css'

import BackToTopButton from '@belikellwyd/vitepress-back-to-top-button'
import '@belikellwyd/vitepress-back-to-top-button/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app) 
    ctx.app.component('ImageGroup', ImageGroup)
  }
}