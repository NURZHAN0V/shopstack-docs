# Структура проекта (Nuxt 4)

Рекомендуется **модульная** раскладка: домены отдельно, общий app shell.

```
goshop_client/
├── app/
│   ├── pages/          # маршруты (каталог, cart, checkout, profile)
│   ├── components/     # ui/, layout/, product/, checkout/
│   ├── composables/    # useCompare, useStoreStatus, …
│   ├── stores/         # cart, catalog, auth, site
│   ├── layouts/
│   └── assets/css/
├── server/api/         # прокси и секреты
└── nuxt.config.ts
```

## Модули по доменам

| Домен | Папки |
|-------|-------|
| Каталог | `pages/catalog`, `components/product` |
| Корзина / checkout | `pages/cart`, `pages/checkout` |
| Аккаунт | `pages/profile`, stores auth |
| Сравнение | `useCompare`, `pages/compare` |

## В ShopStack

Доменную логику не держите в `app.vue` — выносите в composables и Pinia (`useUser`, cart store).
