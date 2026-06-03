# Health и maintenance

---

<ApiEndpoint method="GET" path="/api/health" auth="public" title="Liveness" description="Проверка, что процесс API жив. Доступна при maintenance.">

<template #request>

```http
GET /api/health HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "status": "ok"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/health/ready" auth="public" title="Readiness" description="Проверяет PostgreSQL (и Redis, если очередь подключена).">

<template #request>

```http
GET /api/health/ready HTTP/1.1
```

</template>

<template #response>

Готово:

```json
HTTP/1.1 200 OK

{
  "status": "ready",
  "checks": {
    "database": "up",
    "redis": "up"
  }
}
```

Не готово:

```json
HTTP/1.1 503 Service Unavailable

{
  "status": "not_ready",
  "checks": {
    "database": "down",
    "redis": "skipped"
  }
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/store/status" auth="public" title="Статус магазина" description="Работает даже в maintenance mode.">

<template #request>

```http
GET /api/store/status HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "maintenanceMode": false,
  "maintenanceMessageRu": "",
  "maintenanceMessageEn": "",
  "minOrderAmountEnabled": true,
  "minOrderAmount": 3000,
  "baseCurrency": "RUB",
  "reviewPolicy": "moderation"
}
```

</template>

</ApiEndpoint>

---

## Maintenance mode

При `maintenanceMode: true` публичные `/api/*` (кроме exempt) возвращают:

```json
HTTP/1.1 503 Service Unavailable

{
  "error": "maintenance",
  "message": "Магазин временно недоступен"
}
```

**Exempt:** `/api/health`, `/api/health/ready`, `/api/store/status`, `/api/auth/login`, `/api/auth/register`, все `/api/admin/*`.
