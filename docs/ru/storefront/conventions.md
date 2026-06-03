# Соглашения витрины

Правила из `goshop_client/AGENTS.md` — источник истины для разработчиков витрины. Ниже — краткая сводка отличий от «типового» Vue 3 SPA.

| Тема | Типовой Vue SPA | ShopStack (`goshop_client`) |
|------|-----------------|------------------------------|
| Фреймворк | Vue 3 + Vite | **Nuxt 4** (file routing, auto-imports) |
| Стили | CSS modules / SCSS | **Tailwind**, палитра `warm` / `teal` / `ink` |
| Иконки | SVG в компонентах | **Remix Icon only** |
| Рендеринг | SSR или SSG | **Только CSR** |
| SEO | Индексация | **noindex** (`robots: noindex, nofollow`) |
| PWA | Опционально | Не включён (roadmap) |
| Мета-теги | Ручные `<meta>` | `useSeoMeta`, глобальные defaults в layout |
| Слайдеры | Swiper | Embla / Keen / Splide по согласованию |

## Если включите SEO позже

Потребуется SSR/SSG или prerender для каталога и карточек товара, отдельная политика `robots` и согласование с командой бэкенда. До этого действует текущая политика CSR.

См. также: [Стили и UI](./styling-and-ui.md), [API-адаптер](./api-adapter.md).
