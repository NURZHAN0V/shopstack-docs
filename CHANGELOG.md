# Changelog

Формат: по датам. Новые записи — сверху. История портала документации; крупные релизы ShopStack — в секции **Synced**.

## 2026-06-03

### Docs

- Скриншоты панели: вход, меню пользователя, список/редактирование/импорт товаров, дерево категорий (`docs/public/images/users/`)

### Portal

- Локальный `pnpm dev`: `base` `/` в development, без 404 на `http://localhost:5173/`; production/preview — `/shopstack-docs/`
- Переключатель версий в стиле Nuxt (бейдж + меню); заголовок сайта «ShopStack»; редирект корня через `withBase`
- Исправлен редирект с корня GitHub Pages: убраны лишние `docs/ru/`, `docs/en/`, мгновенный redirect на `/shopstack-docs/v1.0/ru/`
- В лучших практиках: страница «Правила портала docs» (единый чеклист контрибуции)
- Версионирование документации: контент в `docs/v1.0/`, префикс URL `/v1.0/`, переключатель версий в шапке
- Реестр версий `versions.ts`, скрипт `pnpm version:snapshot`, страницы «Версии документации» (RU/EN)
- Редиректы с `/ru/` и `/en/` на актуальный снимок

### Docs

- Убраны все ссылки на vue-faq; практики и соглашения витрины переписаны внутри портала
- Удалена интеграция Swagger UI (iframe, `SwaggerEmbed`, `sync:openapi`) — портал полностью статический
- Справочник API: для каждой ручки — описание, пример запроса и ответа (компонент `ApiEndpoint`)
- Новые страницы: `api/auth.md`, `api/cart.md`

### Portal

- Первый релиз портала `shopstack-docs` на VitePress 1.6
- Локали RU и EN: пользователи, витрина, API, тема, версии, best practices
- Компоненты `DocScreenshot`, `ApiEndpoint`

### Docs

- Справочник REST API по `goshop/server/docs/api.md`
- Плейсхолдеры скриншотов для гайдов панели и витрины
- Раздел лучших практик без внешних ссылок на сторонние FAQ

### Synced

- ShopStack API contract v1.0, admin `0.1.0`, Docker `IMAGE_TAG` 1.0.0
