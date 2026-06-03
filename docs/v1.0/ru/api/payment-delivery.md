# Оплата и доставка

---

<ApiEndpoint method="GET" path="/api/payment/methods" auth="public" title="Способы оплаты" description="Доступность зависит от настроек провайдеров в админке.">

<template #request>

```http
GET /api/payment/methods HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  { "code": "yookassa", "isAvailable": true },
  { "code": "tbank", "isAvailable": false, "reason": "Т-Банк не настроен" },
  { "code": "cash", "isAvailable": true }
]
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/payment/yookassa/create" auth="auth" title="Создать платёж ЮKassa" description="Возвращает URL для редиректа покупателя.">

<template #request>

```http
POST /api/payment/yookassa/create HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderId": 501
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "paymentId": "2d7f3c1a-0001-5000-8000-1a2b3c4d5e6f",
  "confirmationUrl": "https://yoomoney.ru/checkout/payments/v2/contract?orderId=..."
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/payment/tbank/create" auth="auth" title="Создать платёж T-Bank">

<template #request>

```http
POST /api/payment/tbank/create HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderId": 501
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "paymentUrl": "https://securepay.tinkoff.ru/...",
  "paymentId": "123456789"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/delivery/methods" auth="public" title="Способы доставки">

<template #request>

```http
GET /api/delivery/methods HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  { "code": "pickup", "isAvailable": true },
  { "code": "manual", "isAvailable": true },
  { "code": "cdek", "isAvailable": true }
]
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/delivery/cdek/calculate" auth="auth" title="Расчёт тарифа СДЭК" description="Без ключей CDEK в настройках → 503.">

<template #request>

```http
POST /api/delivery/cdek/calculate HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "fromCityCode": 44,
  "toCityCode": 137,
  "packages": [
    { "weight": 500, "length": 20, "width": 15, "height": 10 }
  ],
  "tariffCode": 136
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "deliverySum": 350,
  "periodMin": 2,
  "periodMax": 4,
  "currency": "RUB"
}
```

</template>

<template #errors>

```json
HTTP/1.1 503 Service Unavailable

{
  "error": "integration_unavailable",
  "message": "СДЭК не настроен"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/delivery/cdek/shipments" auth="auth" title="Создать отправление СДЭК">

<template #request>

```http
POST /api/delivery/cdek/shipments HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderId": 501,
  "tariffCode": 136,
  "recipient": {
    "name": "Иван Петров",
    "phone": "+79001234567"
  }
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "id": 12,
  "orderId": 501,
  "cdekUuid": "72753031-7c0a-4f8a-9f0e-1234567890ab",
  "status": "created",
  "trackingNumber": "10123456789"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/delivery/cdek/shipments/:id" auth="auth" title="Статус отправления СДЭК">

<template #request>

```http
GET /api/delivery/cdek/shipments/12 HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 12,
  "orderId": 501,
  "status": "in_transit",
  "trackingNumber": "10123456789",
  "lastSyncAt": "2026-06-03T12:00:00Z"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/admin/delivery/cdek/status-sync" auth="admin" title="Синхронизация статусов СДЭК (админ)">

<template #request>

```http
POST /api/admin/delivery/cdek/status-sync HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "synced": 15,
  "errors": 0
}
```

</template>

</ApiEndpoint>
