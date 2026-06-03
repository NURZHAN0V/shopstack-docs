import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import DocScreenshot from './components/DocScreenshot.vue'
import ApiEndpoint from './components/ApiEndpoint.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('DocScreenshot', DocScreenshot)
    app.component('ApiEndpoint', ApiEndpoint)
  },
}
