import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import navRu from './nav.ru'
import navEn from './nav.en'
import sidebarUsersRu from './sidebar.users.ru'
import sidebarUsersEn from './sidebar.users.en'
import sidebarStorefrontRu from './sidebar.storefront.ru'
import sidebarStorefrontEn from './sidebar.storefront.en'
import sidebarApiRu from './sidebar.api.ru'
import sidebarApiEn from './sidebar.api.en'
import sidebarThemeRu from './sidebar.theme.ru'
import sidebarThemeEn from './sidebar.theme.en'
import sidebarVersionsRu from './sidebar.versions.ru'
import sidebarVersionsEn from './sidebar.versions.en'
import sidebarGuidesRu from './sidebar.guides.ru'
import sidebarGuidesEn from './sidebar.guides.en'
import { DOC_V } from './paths'

const sharedTheme = {
  search: { provider: 'local' as const },
  logo: {
    src: '/images/shopstack-logo.svg',
    alt: 'ShopStack',
  },
  siteTitle: 'ShopStack Docs',
  outline: { label: 'On this page' },
  returnToTopLabel: 'Back to top',
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const GITHUB_PAGES_BASE = '/shopstack-docs/'

const ROOT_REDIRECT_SNIPPET =
  `<meta http-equiv="refresh" content="0;url=${GITHUB_PAGES_BASE}v1.0/ru/">` +
  `<script>location.replace("${GITHUB_PAGES_BASE}v1.0/"+(navigator.language.toLowerCase().startsWith("ru")?"ru":"en")+"/")</script>`

export default defineConfig(({ mode }) => ({
  // GitHub Pages — с префиксом репо; локально dev — корень localhost:5173
  base: mode === 'development' ? '/' : GITHUB_PAGES_BASE,
  async buildEnd() {
    const indexPath = path.join(__dirname, '../dist/index.html')
    if (!fs.existsSync(indexPath)) return
    let html = fs.readFileSync(indexPath, 'utf8')
    if (html.includes('http-equiv="refresh"')) return
    fs.writeFileSync(indexPath, html.replace('<head>', `<head>${ROOT_REDIRECT_SNIPPET}`))
  },
  title: 'ShopStack Docs',
  description: 'Documentation for ShopStack platform — admin, API, storefront',
  lastUpdated: true,
  ignoreDeadLinks: [
    /^https?:\/\/localhost(?::\d+)?/,
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: `${DOC_V}/en/`,
      title: 'ShopStack Docs',
      themeConfig: {
        ...sharedTheme,
        nav: navEn,
        sidebar: {
          [`${DOC_V}/en/users/`]: sidebarUsersEn,
          [`${DOC_V}/en/storefront/`]: sidebarStorefrontEn,
          [`${DOC_V}/en/api/`]: sidebarApiEn,
          [`${DOC_V}/en/theme/`]: sidebarThemeEn,
          [`${DOC_V}/en/versions/`]: sidebarVersionsEn,
          [`${DOC_V}/en/guides/`]: sidebarGuidesEn,
        },
        outline: { label: 'On this page' },
        lastUpdated: { text: 'Last updated' },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: `${DOC_V}/ru/`,
      title: 'Документация ShopStack',
      description: 'Документация платформы ShopStack — панель, API, витрина',
      themeConfig: {
        ...sharedTheme,
        siteTitle: 'Документация ShopStack',
        nav: navRu,
        sidebar: {
          [`${DOC_V}/ru/users/`]: sidebarUsersRu,
          [`${DOC_V}/ru/storefront/`]: sidebarStorefrontRu,
          [`${DOC_V}/ru/api/`]: sidebarApiRu,
          [`${DOC_V}/ru/theme/`]: sidebarThemeRu,
          [`${DOC_V}/ru/versions/`]: sidebarVersionsRu,
          [`${DOC_V}/ru/guides/`]: sidebarGuidesRu,
        },
        outline: { label: 'Содержание' },
        lastUpdated: { text: 'Последнее обновление' },
        returnToTopLabel: 'Наверх',
        docFooter: {
          prev: 'Назад',
          next: 'Далее',
        },
      },
    },
  },
}))
