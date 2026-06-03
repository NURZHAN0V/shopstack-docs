# Архитектура

::: tip Правила портала документации
Правки в **shopstack-docs** — по [`AGENTS.md`](https://github.com/NURZHAN0V/shopstack-docs/blob/main/AGENTS.md). Краткий чеклист: [Правила портала docs](./documentation-portal.md).
:::

## Принципы фронтенда ShopStack

- **Слабая связность** — каталог, корзина, checkout, личный кабинет общаются через API и роутер, а не через глубокие props между несвязанными ветками.
- **App shell** — layout, навигация, auth, тема, HTTP-клиент отдельно от доменных модулей.
- **Смена без переписывания** — UI-библиотека, i18n, платёжный провайдер, тема закладываются как заменяемые слои (обёртки, CSS variables, адаптер API).
- **Без глубокого ООП** — компоненты, composables, Pinia; не цепочки наследования классов.

## Принципы проектирования

| Принцип | Смысл в ShopStack |
|---------|-------------------|
| SoC | View / composable / API facade / Go service |
| SRP | Один composable — одна задача (корзина, сравнение) |
| KISS | Минимум зависимостей, без лишних абстракций |
| DRY | Общие `Base*` и `shared/`, не копипаста fetch |
| Composition | Расширение через composables и модули, не наследование |

## В ShopStack

| Часть | Подход |
|-------|--------|
| Панель `goshop/src` | `app/` + `modules/*` + `shared/` |
| Витрина `goshop_client` | Nuxt `pages/`, `components/`, `stores/` |
| API | handler → service → repository |

Подробнее для витрины: [Структура проекта](/v1.0/ru/storefront/project-structure.md).
