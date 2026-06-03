# Админ и настройки

Все пути с префиксом `/api/admin`. Auth: **admin** + 2FA.

---

<ApiEndpoint method="GET" path="/api/admin/dashboard/summary" auth="admin" title="Сводка дашборда">

<template #request>

```http
GET /api/admin/dashboard/summary HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "ordersToday": 12,
  "revenueToday": 145000,
  "ordersPending": 5,
  "lowStockCount": 3,
  "currency": "RUB"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/admin/settings/payment-providers/:code" auth="admin" title="Настройки платёжного провайдера" description="Секреты не возвращаются в plaintext.">

<template #request>

```http
GET /api/admin/settings/payment-providers/yookassa HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "code": "yookassa",
  "enabled": true,
  "shopId": "123456",
  "secretKeySet": true,
  "testMode": true
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="PUT" path="/api/admin/settings/payment-providers/:code" auth="admin" title="Обновить провайдера">

<template #request>

```http
PUT /api/admin/settings/payment-providers/yookassa HTTP/1.1
Content-Type: application/json

{
  "enabled": true,
  "shopId": "123456",
  "secretKey": "live_***",
  "testMode": false
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "code": "yookassa",
  "enabled": true,
  "secretKeySet": true
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/admin/audit-log" auth="admin" title="Журнал аудита">

<template #request>

```http
GET /api/admin/audit-log?actorId=1&limit=20 HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "items": [
    {
      "id": 900,
      "action": "order.status_changed",
      "actorId": 1,
      "entityType": "order",
      "entityId": 501,
      "details": { "from": "paid", "to": "shipped" },
      "createdAt": "2026-06-03T14:00:00Z"
    }
  ],
  "total": 1
}
```

</template>

</ApiEndpoint>

---

## Другие группы админ-ручек

| Группа | Примеры путей |
|--------|----------------|
| Клиенты | `GET/POST/PATCH /api/admin/customers` |
| Пользователи | `GET/POST/PATCH /api/admin/users` |
| Маркетинг | `/api/admin/marketing/*` |
| Отзывы (модерация) | `/api/admin/reviews` |
| Почта | `/api/admin/settings/mail`, `/api/admin/mail/templates` |
| СДЭК | `GET/PUT /api/admin/settings/delivery-providers/cdek` |
| OpenRouter / AI | `/api/admin/settings/integrations/:code` |

Для каждой новой интеграции добавляйте страницу по образцу [товаров](./products.md).
