# Auth — ручки аутентификации

Базовый URL: `http://localhost:18080`. Заголовок для защищённых ручек: `Authorization: Bearer <accessToken>`.

---

<ApiEndpoint method="POST" path="/api/auth/register" auth="public" title="Регистрация покупателя" description="Создаёт пользователя с ролью user для витрины. Возвращает JWT сразу после регистрации.">

<template #request>

```http
POST /api/auth/register HTTP/1.1
Host: localhost:18080
Content-Type: application/json

{
  "email": "buyer@example.com",
  "password": "secret123"
}
```

</template>

<template #response>

```json
HTTP/1.1 201 Created

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 42,
    "email": "buyer@example.com",
    "name": "",
    "role": "user"
  }
}
```

</template>

<template #errors>

| Код | error | Когда |
|-----|-------|-------|
| 400 | `invalid body` | Невалидный JSON или пароль &lt; 6 символов |
| 409 | `email already registered` | E-mail занят |

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/auth/login" auth="public" title="Вход" description="Проверяет email и пароль. Для admin/manager с 2FA возвращает requires2FA без токена — затем POST /api/auth/2fa/verify.">

<template #request>

```http
POST /api/auth/login HTTP/1.1
Content-Type: application/json

{
  "email": "admin@shop.example",
  "password": "adminpass"
}
```

</template>

<template #response>

Успешный вход (без 2FA):

```json
HTTP/1.1 200 OK

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@shop.example",
    "name": "Админ",
    "role": "admin"
  }
}
```

Требуется 2FA:

```json
HTTP/1.1 200 OK

{
  "requires2FA": true,
  "userId": 1,
  "method": "totp"
}
```

</template>

<template #errors>

| Код | error | Когда |
|-----|-------|-------|
| 401 | `invalid email or password` | Неверные учётные данные |
| 403 | `account blocked` | Пользователь заблокирован |

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/auth/2fa/verify" auth="public" title="Подтверждение 2FA при входе" description="Второй шаг после login с requires2FA.">

<template #request>

```http
POST /api/auth/2fa/verify HTTP/1.1
Content-Type: application/json

{
  "userId": 1,
  "code": "123456"
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@shop.example",
    "role": "admin"
  }
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="GET" path="/api/me" auth="auth" title="Текущий пользователь" description="Профиль по JWT. Дублирует часть /api/account/profile.">

<template #request>

```http
GET /api/me HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 42,
  "email": "buyer@example.com",
  "name": "Иван",
  "role": "user",
  "phone": "+79001234567",
  "city": "Москва"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="PATCH" path="/api/me" auth="auth" title="Обновить профиль (/api/me)" description="Частичное обновление имени, телефона, города.">

<template #request>

```http
PATCH /api/me HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Иван Петров",
  "phone": "+79001234567"
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "id": 42,
  "email": "buyer@example.com",
  "name": "Иван Петров",
  "role": "user",
  "phone": "+79001234567"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/auth/forgot-password" auth="public" title="Запрос сброса пароля" description="Отправляет письмо со ссылкой сброса (если SMTP настроен).">

<template #request>

```http
POST /api/auth/forgot-password HTTP/1.1
Content-Type: application/json

{
  "email": "buyer@example.com"
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "ok": true,
  "message": "If the email exists, a reset link was sent"
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/auth/reset-password" auth="public" title="Сброс пароля по токену">

<template #request>

```http
POST /api/auth/reset-password HTTP/1.1
Content-Type: application/json

{
  "token": "reset-token-from-email",
  "password": "newSecret456"
}
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
