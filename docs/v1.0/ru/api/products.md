# Товары и поиск

Публичный каталог и админ-CRUD. Поля товара в ответах зависят от модели БД (см. `goshop/server/docs/models.md`).

---

<ApiEndpoint method="GET" path="/api/products" auth="public" title="Список товаров" description="Пагинированный список опубликованных товаров. Фильтры: categoryId, brandId, attributeValueId, q, limit, offset.">

<template #request>

```http
GET /api/products?categoryId=5&limit=20&offset=0&q=футболка HTTP/1.1
Host: localhost:18080
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "items": [
    {
      "id": 101,
      "slug": "basic-tee",
      "name": "Футболка Basic",
      "price": 1990,
      "currency": "RUB",
      "stockQuantity": 12,
      "status": "published",
      "categoryId": 5,
      "images": ["/media/products/101/main.webp"]
    }
  ],
  "total": 48
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/products/:productKey" auth="public" title="Карточка товара" description=":productKey — числовой id или slug. Для скрытых по остатку может быть displayAsOutOfStock.">

<template #request>

```http
GET /api/products/basic-tee HTTP/1.1
```

или

```http
GET /api/products/101 HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 101,
  "slug": "basic-tee",
  "name": "Футболка Basic",
  "description": "<p>Хлопок 100%</p>",
  "price": 1990,
  "compareAtPrice": 2490,
  "stockQuantity": 12,
  "variants": [
    {
      "id": 1001,
      "sku": "TEE-S-BLK",
      "price": 1990,
      "stockQuantity": 4,
      "attributes": { "size": "S", "color": "Чёрный" }
    }
  ],
  "displayAsOutOfStock": false
}
```

</template>

<template #errors>

```json
HTTP/1.1 404 Not Found

{
  "error": "not_found",
  "message": "Товар не найден"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/products/:productKey/related" auth="public" title="Похожие товары" description="До нескольких опубликованных товаров; fallback по категории.">

<template #request>

```http
GET /api/products/101/related HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  { "id": 102, "slug": "premium-tee", "name": "Футболка Premium", "price": 2990 },
  { "id": 103, "slug": "hoodie-lite", "name": "Худи Lite", "price": 4990 }
]
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/products/filters" auth="public" title="Фильтры каталога" description="Активные фильтры и значения для витрины.">

<template #request>

```http
GET /api/products/filters HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  {
    "id": 1,
    "code": "color",
    "name": "Цвет",
    "values": [
      { "id": 10, "value": "Чёрный", "productCount": 24 },
      { "id": 11, "value": "Белый", "productCount": 18 }
    ]
  }
]
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/products/search?q=" auth="public" title="Полнотекстовый поиск" description="PostgreSQL FTS; в dev/sqlite — ILIKE fallback.">

<template #request>

```http
GET /api/products/search?q=худи HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  {
    "id": 103,
    "slug": "hoodie-lite",
    "name": "Худи Lite",
    "price": 4990,
    "snippet": "…тёплое <b>худи</b>…"
  }
]
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/products/compare?ids=" auth="public" title="Сравнение товаров" description="Не более 3 id через запятую.">

<template #request>

```http
GET /api/products/compare?ids=101,102,103 HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "products": [
    { "id": 101, "name": "Футболка Basic", "price": 1990, "attributes": {} },
    { "id": 102, "name": "Футболка Premium", "price": 2990, "attributes": {} }
  ],
  "attributeRows": [
    { "code": "material", "label": "Материал", "values": ["Хлопок", "Хлопок премиум"] }
  ]
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/products/:id/stock-alerts" auth="optional" title="Подписка «Сообщить о поступлении»" description="JWT опционален; email обязателен.">

<template #request>

```http
POST /api/products/101/stock-alerts HTTP/1.1
Content-Type: application/json

{
  "email": "buyer@example.com",
  "productVariantId": 1001
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "id": 55,
  "productId": 101,
  "productVariantId": 1001,
  "email": "buyer@example.com",
  "status": "pending"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="DELETE" path="/api/products/:id/stock-alerts" auth="optional" title="Отписка от уведомления о поступлении">

<template #request>

```http
DELETE /api/products/101/stock-alerts?email=buyer@example.com HTTP/1.1
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "ok": true
}
```

</template>

</ApiEndpoint>

---

## Админ: товары

<ApiEndpoint method="POST" path="/api/admin/products" auth="admin" title="Создать товар">

<template #request>

```http
POST /api/admin/products HTTP/1.1
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "name": "Новый товар",
  "slug": "new-product",
  "price": 1500,
  "status": "draft",
  "categoryId": 5,
  "stockQuantity": 0
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "id": 200,
  "slug": "new-product",
  "name": "Новый товар",
  "price": 1500,
  "status": "draft"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="PUT" path="/api/admin/products/:id" auth="admin" title="Обновить товар">

<template #request>

```http
PUT /api/admin/products/200 HTTP/1.1
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "name": "Новый товар (ред.)",
  "price": 1790,
  "status": "published"
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 200,
  "name": "Новый товар (ред.)",
  "price": 1790,
  "status": "published"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/admin/products/:id/variants" auth="admin" title="Создать вариант товара">

<template #request>

```http
POST /api/admin/products/200/variants HTTP/1.1
Content-Type: application/json

{
  "sku": "NEW-S",
  "price": 1790,
  "stockQuantity": 10,
  "attributeValueIds": [10, 20]
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "id": 2001,
  "productId": 200,
  "sku": "NEW-S",
  "price": 1790,
  "stockQuantity": 10
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/admin/products/import/template" auth="admin" title="Шаблон CSV импорта" description="Ответ — файл text/csv, не JSON.">

<template #request>

```http
GET /api/admin/products/import/template HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```http
HTTP/1.1 200 OK
Content-Type: text/csv

sku,name,price,categorySlug,stockQuantity
EXAMPLE-001,Пример,1000,odezhda,5
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/admin/products/import" auth="admin" title="Импорт товаров" description="multipart/form-data: file, опционально mapping и options (JSON). 202 + jobId или 200 при синхронном режиме.">

<template #request>

```http
POST /api/admin/products/import HTTP/1.1
Authorization: Bearer <admin-token>
Content-Type: multipart/form-data; boundary=----boundary

------boundary
Content-Disposition: form-data; name="file"; filename="products.csv"
Content-Type: text/csv

sku,name,price
SKU-1,Товар 1,1000
------boundary--
```

</template>

<template #response>

Асинхронно:

```json
HTTP/1.1 202 Accepted

{
  "jobId": 7,
  "status": "pending"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/admin/products/import/:id" auth="admin" title="Статус импорта">

<template #request>

```http
GET /api/admin/products/import/7 HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 7,
  "status": "completed",
  "totalRows": 100,
  "successRows": 98,
  "errorRows": 2,
  "errors": [
    { "row": 15, "message": "duplicate sku" }
  ]
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/admin/products/:id/price-history" auth="admin" title="История цен">

<template #request>

```http
GET /api/admin/products/101/price-history HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  {
    "id": 1,
    "productId": 101,
    "price": 1990,
    "changedAt": "2026-05-01T12:00:00Z",
    "changedBy": 1
  }
]
```

</template>

</ApiEndpoint>

---

## Отзывы

<ApiEndpoint method="POST" path="/api/reviews" auth="auth" title="Оставить отзыв" description="Альтернативный путь: POST /api/products/:slug/reviews.">

<template #request>

```http
POST /api/reviews HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": 101,
  "rating": 5,
  "text": "Отличный товар!"
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "id": 30,
  "productId": 101,
  "userId": 42,
  "rating": 5,
  "text": "Отличный товар!",
  "status": "pending"
}
```

</template>

</ApiEndpoint>
