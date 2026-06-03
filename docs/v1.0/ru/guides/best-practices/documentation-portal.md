# Правила портала документации

Обязательные правила для правок **shopstack-docs**. Эта страница — единственный источник в опубликованном репозитории.

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
| Git | Только автор репозитория; без `Co-authored-by` от ботов; без чужих email в коммитах |

## Git и коммиты

- **Author и Committer** — ваш аккаунт GitHub (`oleg@dublecode.ru` или GitHub noreply).
- **Запрещено** добавлять в сообщение коммита trailer `Co-authored-by` от ИИ или сервисов автоматизации.
- **Сообщения** — на русском, по смыслу изменения.
- Перед `git push`: `git cat-file -p HEAD` — в теле коммита только ваш текст.

## Версионирование

- URL: `/v1.0/ru/...`, `/v1.0/en/...`
- Реестр: `docs/.vitepress/config/versions.ts`
- Подробно: [Версии документации](/v1.0/ru/versions/doc-versioning.md)

## Скриншоты

```md
<DocScreenshot
  alt="Краткое описание"
  caption="Что должно быть видно на скриншоте."
  path="/images/users/example.png"
  status="ready"
/>
```

Файлы — в `docs/public/images/` (подпапки `users/`, `storefront/`, `api/`).

## Команды перед PR

```bash
cd shopstack-docs
pnpm install
pnpm build
```

## Связанные правила в монорепо

| Компонент | Файл |
|-----------|------|
| Панель | `goshop/AGENTS.md` |
| Витрина | `goshop_client/AGENTS.md` |

См. также [тестирование и CI](./testing-and-ci.md).
