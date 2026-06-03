# Портал документации (правила)

Обязательные правила для правок **shopstack-docs** — в корне репозитория: [`AGENTS.md`](https://github.com/NURZHAN0V/shopstack-docs/blob/main/AGENTS.md) (`shopstack-docs/AGENTS.md` в монорепо).

ИИ-агенты и контрибьюторы **сначала читают AGENTS.md**, затем вносят изменения.

## Краткий чеклист

| Правило | Суть |
|---------|------|
| Статика | Без Swagger iframe, без `sync:openapi`, без зависимости от запущенного API |
| Локали | Новая страница — **RU и EN** в одном PR (`docs/v1.0/ru/` + `docs/v1.0/en/`) |
| Версии docs | Контент в `docs/v1.0/`; breaking API → `pnpm version:snapshot v2.0` и запись в `versions.ts` |
| API-ручки | Блок `<ApiEndpoint>`: описание, пример запроса и ответа |
| Скриншоты | `<DocScreenshot>` с `path`, `alt`, `caption`; без lorem ipsum в гайдах |
| Источник API | `goshop/server/docs/api.md` → затем `docs/v1.0/ru/api/*.md` |
| Запреты | Нет ссылок на vue-faq и сторонние FAQ; нет секретов в примерах |

## Версионирование

- URL: `/v1.0/ru/...`, `/v1.0/en/...`
- Реестр: `docs/.vitepress/config/versions.ts`
- Подробно: [Версии документации](/v1.0/ru/versions/doc-versioning.md)

## Команды перед PR

```bash
cd shopstack-docs
pnpm install
pnpm build
```

## Связанные AGENTS в монорепо

| Компонент | Файл |
|-----------|------|
| Панель | `goshop/AGENTS.md` |
| Витрина | `goshop_client/AGENTS.md` |
| Docs (этот портал) | `shopstack-docs/AGENTS.md` |

См. также [тестирование и CI](./testing-and-ci.md) (сборка docs в pipeline).
