# Обзор витрины

Публичный сайт — проект **`goshop_client/`** (Nuxt 4, Tailwind, Pinia).

| Параметр | Значение |
|----------|----------|
| Рендеринг | Только клиент (CSR), без SSR |
| SEO | Отключён (`robots: noindex`) |
| API | `NUXT_PUBLIC_API_URL` |
| Каноническая админка | Vue в `goshop/src/`, не Nuxt `/admin` |

<DocScreenshot
  alt="Каталог витрины"
  caption="Главная или каталог: шапка с логотипом, сетка карточек товаров, фильтры, корзина в хедере."
  path="/images/storefront/catalog.png"
  status="placeholder"
/>

## Связь с API

Витрина использует публичные эндпоинты (`/api/products`, корзина, auth) и защищённые `/api/account/*` с JWT.

Секреты провайдеров — только на сервере Nuxt (`server/api`), не в `runtimeConfig.public`.

## Документация

- [Структура проекта](./project-structure.md)
- [Соглашения витрины](./conventions.md)
- Правила: `goshop_client/AGENTS.md`
