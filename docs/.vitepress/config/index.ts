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

export default defineConfig({
  base: '/shopstack-docs/',
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
      link: '/en/',
      title: 'ShopStack Docs',
      themeConfig: {
        ...sharedTheme,
        nav: navEn,
        sidebar: {
          '/en/users/': sidebarUsersEn,
          '/en/storefront/': sidebarStorefrontEn,
          '/en/api/': sidebarApiEn,
          '/en/theme/': sidebarThemeEn,
          '/en/versions/': sidebarVersionsEn,
          '/en/guides/': sidebarGuidesEn,
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
      link: '/ru/',
      title: 'Документация ShopStack',
      description: 'Документация платформы ShopStack — панель, API, витрина',
      themeConfig: {
        ...sharedTheme,
        siteTitle: 'Документация ShopStack',
        nav: navRu,
        sidebar: {
          '/ru/users/': sidebarUsersRu,
          '/ru/storefront/': sidebarStorefrontRu,
          '/ru/api/': sidebarApiRu,
          '/ru/theme/': sidebarThemeRu,
          '/ru/versions/': sidebarVersionsRu,
          '/ru/guides/': sidebarGuidesRu,
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
})
