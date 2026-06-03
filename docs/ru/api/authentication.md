# Аутентификация

## JWT

После `POST /api/auth/login` или регистрации клиент получает JWT. Передавайте в заголовке:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

## Роли

| Роль | Доступ |
|------|--------|
| `customer` | Витрина, `/api/account/*`, заказы |
| `manager` | + `/api/admin/*` |
| `admin` | + управление пользователями, настройками |

**Важно:** проверка прав на UI не заменяет enforcement на сервере. Все admin-эндпоинты проверяют роль на API.

## 2FA для админов

При включённой политике — второй фактор после пароля. См. [руководство пользователя](../users/security-2fa.md).

## Публичные exempt при maintenance

`/api/auth/login`, `/api/auth/register` остаются доступны. См. [Health и maintenance](./health.md).
