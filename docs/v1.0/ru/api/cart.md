# Корзина

Ручки для авторизованного покупателя. Вне контракта «этап 03», но используются витриной и панелью.

---

<ApiEndpoint method="GET" path="/api/cart" auth="auth" title="Получить корзину" description="Текущая корзина пользователя с позициями и итогами.">

<template #request>

```http
GET /api/cart HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 15,
  "userId": 42,
  "items": [
    {
      "id": 88,
      "productId": 101,
      "productVariantId": 1001,
      "quantity": 2,
      "price": 1990,
      "name": "Футболка Basic",
      "sku": "TEE-S-BLK"
    }
  ],
  "subtotal": 3980,
  "currency": "RUB"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/cart/items" auth="auth" title="Добавить в корзину">

<template #request>

```http
POST /api/cart/items HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": 101,
  "productVariantId": 1001,
  "quantity": 1
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 15,
  "items": [ "... обновлённый список ..." ],
  "subtotal": 1990
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="PATCH" path="/api/cart/items/:itemId" auth="auth" title="Изменить количество">

<template #request>

```http
PATCH /api/cart/items/88 HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 3
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 15,
  "items": [ "..." ],
  "subtotal": 5970
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="DELETE" path="/api/cart/items/:itemId" auth="auth" title="Удалить позицию">

<template #request>

```http
DELETE /api/cart/items/88 HTTP/1.1
Authorization: Bearer <token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 15,
  "items": [],
  "subtotal": 0
}
```

</template>

</ApiEndpoint>
