# Категории (админ)

Префикс: `/api/admin`. Требуется JWT admin/manager и включённая 2FA.

---

<ApiEndpoint method="GET" path="/api/admin/categories" auth="admin" title="Список категорий">

<template #request>

```http
GET /api/admin/categories HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  {
    "id": 5,
    "name": "Одежда",
    "slug": "odezhda",
    "parentId": null,
    "sortOrder": 0,
    "isActive": true
  },
  {
    "id": 6,
    "name": "Футболки",
    "slug": "futbolki",
    "parentId": 5,
    "sortOrder": 1
  }
]
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/admin/categories" auth="admin" title="Создать категорию">

<template #request>

```http
POST /api/admin/categories HTTP/1.1
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "name": "Обувь",
  "slug": "obuv",
  "parentId": null,
  "isActive": true
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "id": 10,
  "name": "Обувь",
  "slug": "obuv",
  "parentId": null
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="PUT" path="/api/admin/categories/:id" auth="admin" title="Обновить категорию">

<template #request>

```http
PUT /api/admin/categories/10 HTTP/1.1
Content-Type: application/json

{
  "name": "Обувь и аксессуары",
  "isActive": true
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 10,
  "name": "Обувь и аксессуары",
  "slug": "obuv"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="DELETE" path="/api/admin/categories/:id" auth="admin" title="Удалить категорию">

<template #request>

```http
DELETE /api/admin/categories/10 HTTP/1.1
Authorization: Bearer <admin-token>
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

Импорт/экспорт категорий — те же паттерны, что у [товаров](./products.md#import): `GET .../import/template`, `POST .../import/preview`, `POST .../import`, `GET .../import/:id`, `GET .../export`.
