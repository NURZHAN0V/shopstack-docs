# ShopStack Docs

Портал документации платформы ShopStack (панель, API, витрина). Стек: [VitePress](https://vitepress.dev) 1.6, RU + EN.

**Статический сайт** — бэкенд ShopStack для просмотра документации не нужен. Соберите и выложите `dist`, раздайте клиентам и разработчикам одну ссылку (например `https://docs.your-domain.com`).

## Быстрый старт

```bash
cd shopstack-docs
pnpm install
pnpm dev
```

Откройте http://localhost:5173 — редирект на `/ru/` или `/en/` по языку браузера.

## Сборка

```bash
pnpm build
pnpm preview
```

Артефакт: `docs/.vitepress/dist/`.

## Структура

| Раздел | Путь | Аудитория |
|--------|------|-----------|
| Пользователи | `docs/ru/users/` | Владелец / менеджер магазина |
| Витрина | `docs/ru/storefront/` | Разработчик `goshop_client` |
| API | `docs/ru/api/` | Интеграторы, backend — примеры запросов/ответов |
| Практики | `docs/ru/guides/best-practices/` | Vue / Nuxt разработчики |
| Версии, тема | `docs/ru/versions/`, `theme/` | Все |

Правила контрибуции: [AGENTS.md](./AGENTS.md).

## Публикация (GitHub Pages)

Сайт: **https://nurzhan0v.github.io/shopstack-docs/**

После `git push` в `main` workflow `.github/workflows/deploy-pages.yml` собирает и выкладывает статику. В репозитории GitHub: **Settings → Pages → Source: GitHub Actions**.

Локально `base` для Pages задан в `docs/.vitepress/config/index.ts` как `/shopstack-docs/`. Для чистого корня домена измените `base` на `/`.

## Деплой (свой сервер)

Статика — nginx или CDN. Пример nginx:

```nginx
root /var/www/shopstack-docs;
try_files $uri $uri/ /index.html;
```

## Монорепозиторий

```
goshop/
├── goshop/           # API + Vue admin
├── goshop_client/    # Nuxt storefront
└── shopstack-docs/   # этот портал
```

OpenAPI в коде продукта: `goshop/server/api/docs/swagger.yaml` (не публикуется с docs-сайтом).
