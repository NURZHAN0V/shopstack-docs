# Заказы

Черновики checkout, оформление заказа, админ-управление.

---

## Черновики (drafts)

<ApiEndpoint method="POST" path="/api/orders/drafts" auth="auth" title="Создать черновик заказа" description="Сохраняет items и checkoutData на 7 дней.">

<template #request>

```http
POST /api/orders/drafts HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    { "productId": 101, "productVariantId": 1001, "quantity": 2, "price": 1990 }
  ],
  "checkoutData": {
    "deliveryOptionId": 1,
    "shippingAddress": { "city": "Москва", "street": "Тверская", "house": "1" }
  }
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "id": 9,
  "userId": 42,
  "items": { "...": "..." },
  "checkoutData": { "...": "..." },
  "expiresAt": "2026-06-10T15:00:00Z"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/orders/drafts/:id" auth="auth" title="Получить черновик">

<template #request>

```http
GET /api/orders/drafts/9 HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 9,
  "userId": 42,
  "items": { "...": "..." },
  "checkoutData": { "...": "..." },
  "expiresAt": "2026-06-10T15:00:00Z"
}
```

</template>

<template #errors>

```json
HTTP/1.1 410 Gone

{
  "error": "draft_expired",
  "message": "Срок черновика истёк"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="PUT" path="/api/orders/drafts/:id" auth="auth" title="Обновить черновик">

<template #request>

```http
PUT /api/orders/drafts/9 HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [ "..." ],
  "checkoutData": { "deliveryOptionId": 2 }
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 9,
  "expiresAt": "2026-06-10T16:00:00Z"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/orders/drafts/:id/submit" auth="auth" title="Отправить черновик" description="Резервирует остатки и переводит в заказ.">

<template #request>

```http
POST /api/orders/drafts/9/submit HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "order": {
    "id": 500,
    "number": "ORD-2026-000042",
    "status": "pending_payment",
    "total": 3980
  }
}
```

</template>

</ApiEndpoint>

---

## Оформление заказа

<ApiEndpoint method="POST" path="/api/orders" auth="auth" title="Создать заказ" description="Номер ORD-YYYY-NNNNNN. Лимит позиций: 50. Проверяется min order amount.">

<template #request>

```http
POST /api/orders HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "productId": 101,
      "productVariantId": 1001,
      "quantity": 2
    }
  ],
  "shippingAddress": {
    "city": "Москва",
    "street": "Тверская",
    "house": "1",
    "apartment": "10",
    "postalCode": "125009"
  },
  "deliveryOptionId": 1,
  "clientComment": "Позвонить за час"
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "order": {
    "id": 501,
    "number": "ORD-2026-000043",
    "status": "pending_payment",
    "total": 3980,
    "currency": "RUB"
  },
  "orderId": 501,
  "number": "ORD-2026-000043"
}
```

</template>

<template #errors>

```json
HTTP/1.1 400 Bad Request

{
  "error": "min_order_amount",
  "message": "Минимальная сумма заказа 3000 ₽"
}
```

</template>

</ApiEndpoint>

---

## Админ

<ApiEndpoint method="GET" path="/api/admin/orders" auth="admin" title="Список заказов">

<template #request>

```http
GET /api/admin/orders?status=pending_payment&limit=20 HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "items": [
    {
      "id": 501,
      "number": "ORD-2026-000043",
      "status": "pending_payment",
      "total": 3980,
      "customerEmail": "buyer@example.com",
      "createdAt": "2026-06-03T10:00:00Z"
    }
  ],
  "total": 120
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/admin/orders/stats" auth="admin" title="Счётчики по статусам">

<template #request>

```http
GET /api/admin/orders/stats HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "pending_payment": 5,
  "paid": 12,
  "shipped": 8,
  "completed": 200,
  "cancelled": 3
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="PATCH" path="/api/admin/orders/:id/status" auth="admin" title="Сменить статус" description="Пишет запись в audit log.">

<template #request>

```http
PATCH /api/admin/orders/501/status HTTP/1.1
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "status": "shipped",
  "comment": "Передано в СДЭК"
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 501,
  "status": "shipped",
  "updatedAt": "2026-06-03T14:00:00Z"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/admin/orders/:id/refunds" auth="admin" title="Создать возврат">

<template #request>

```http
POST /api/admin/orders/501/refunds HTTP/1.1
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "amount": 3980,
  "reason": "Покупатель отказался",
  "returnStock": true
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "id": 3,
  "orderId": 501,
  "amount": 3980,
  "status": "pending",
  "reason": "Покупатель отказался"
}
```

</template>

</ApiEndpoint>
