import DefaultTheme from 'vitepress/theme'
import DocScreenshot from './components/DocScreenshot.vue'
import ApiEndpoint from './components/ApiEndpoint.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DocScreenshot', DocScreenshot)
    app.component('ApiEndpoint', ApiEndpoint)
  },
}
