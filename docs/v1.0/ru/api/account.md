# Аккаунт покупателя

Все ручки требуют `Authorization: Bearer <token>`.

---

<ApiEndpoint method="GET" path="/api/account/profile" auth="auth" title="Профиль">

<template #request>

```http
GET /api/account/profile HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 42,
  "email": "buyer@example.com",
  "name": "Иван Петров",
  "phone": "+79001234567",
  "city": "Москва"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="PUT" path="/api/account/profile" auth="auth" title="Обновить профиль">

<template #request>

```http
PUT /api/account/profile HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Иван П.",
  "phone": "+79007654321"
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 42,
  "email": "buyer@example.com",
  "name": "Иван П.",
  "phone": "+79007654321"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/account/orders" auth="auth" title="Мои заказы">

<template #request>

```http
GET /api/account/orders?limit=10 HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  {
    "id": 501,
    "number": "ORD-2026-000043",
    "status": "paid",
    "total": 3980,
    "createdAt": "2026-06-03T10:00:00Z"
  }
]
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/account/orders/:id/cancel" auth="auth" title="Отменить заказ">

<template #request>

```http
POST /api/account/orders/501/cancel HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 501,
  "status": "cancelled"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/account/wishlist" auth="auth" title="Избранное" description="Алиас: GET /api/wishlist.">

<template #request>

```http
GET /api/account/wishlist HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "productIds": [101, 102, 105],
  "products": [
    { "id": 101, "slug": "basic-tee", "name": "Футболка Basic", "price": 1990 }
  ]
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/account/compare" auth="auth" title="Список сравнения">

<template #request>

```http
GET /api/account/compare HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "productIds": [101, 102]
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/newsletter/subscribe" auth="public" title="Подписка на рассылку">

<template #request>

```http
POST /api/newsletter/subscribe HTTP/1.1
Content-Type: application/json

{
  "email": "news@example.com"
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "ok": true,
  "message": "Проверьте почту для подтверждения"
}
```

</template>

</ApiEndpoint>
