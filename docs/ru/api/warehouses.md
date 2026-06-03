# Склады

---

<ApiEndpoint method="GET" path="/api/admin/warehouses" auth="admin" title="Список складов">

<template #request>

```http
GET /api/admin/warehouses HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  {
    "id": 1,
    "name": "Основной склад",
    "code": "MAIN",
    "isActive": true
  }
]
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/admin/warehouses" auth="admin" title="Создать склад">

<template #request>

```http
POST /api/admin/warehouses HTTP/1.1
Content-Type: application/json

{
  "name": "Склад СПб",
  "code": "SPB"
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "id": 2,
  "name": "Склад СПб",
  "code": "SPB",
  "isActive": true
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/admin/warehouses/:id/stock" auth="admin" title="Остатки на складе">

<template #request>

```http
GET /api/admin/warehouses/1/stock HTTP/1.1
Authorization: Bearer <admin-token>
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

[
  {
    "productId": 101,
    "productVariantId": 1001,
    "sku": "TEE-S-BLK",
    "quantity": 4,
    "reserved": 1,
    "available": 3
  }
]
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="PUT" path="/api/admin/warehouses/:id/stock" auth="admin" title="Скорректировать остаток">

<template #request>

```http
PUT /api/admin/warehouses/1/stock HTTP/1.1
Content-Type: application/json

{
  "productVariantId": 1001,
  "quantityDelta": 10,
  "reason": "Поступление от поставщика"
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "productVariantId": 1001,
  "quantity": 14,
  "available": 13
}
```

</template>

</ApiEndpoint>
