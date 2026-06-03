# Тестирование и CI

## Тестирование

| Уровень | Инструмент | Что покрывать |
|---------|------------|---------------|
| Unit | Vitest + Vue Test Utils | Composables, stores, утилиты |
| API | Go tests в `goshop/server/` | Сервисы, handlers |
| E2E | Playwright / Cypress (по выбору команды) | Login, каталог, checkout |

Приоритет E2E: оформление заказа, оплата (sandbox), вход админа с 2FA на staging.

## CI (рекомендуемый pipeline)

1. `lint` (ESLint, golangci-lint)
2. `typecheck` / `go test ./...`
3. `build` (панель, витрина, docs)
4. Деплой артефактов

## В ShopStack

| Проект | Команды |
|--------|---------|
| Панель | `npm run test:unit`, `npm run lint` |
| API | тесты в `server/` |
| Docs | `pnpm build` в `shopstack-docs/` (см. [AGENTS.md / правила портала](./documentation-portal.md)) |

Чеклист staging: `goshop/docs/staging-e2e-checklist.md`.
