# FAQ (владелец магазина)

## Где документация API?

На этом портале: раздел [API](/ru/api/introduction) — описание ручек, примеры запросов и ответов. Отдельный Swagger на бэкенде для чтения docs не нужен.

## Панель не видит API

Проверьте `VITE_API_URL` и что контейнер `server` healthy (`/api/health/ready`).

## Режим обслуживания (maintenance)

При `maintenanceMode=true` витрина получает 503, кроме exempt-путей. Админ API (`/api/admin/*`) работает. Статус: `GET /api/store/status`.

## Чем панель отличается от `/admin` на витрине?

Каноническая админка — Vue в `goshop/src/`. В `goshop_client` есть упрощённый legacy-раздел `/admin/*`.

## Где changelog платформы?

- Продукт: `goshop/CHANGELOG.md`
- Портал docs: [История изменений](/ru/versions/changelog)

## Тёмная тема панели

Переключатель в меню пользователя сайдбара — [Тема панели](/ru/theme/admin-ui-theme.md).
