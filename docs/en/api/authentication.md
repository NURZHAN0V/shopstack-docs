# Authentication

## JWT

```http
Authorization: Bearer <token>
```

After `POST /api/auth/login` or register.

## Roles

| Role | Access |
|------|--------|
| `customer` | Storefront, account API |
| `manager` | + admin API |
| `admin` | + users, settings |

Authorization must be enforced on the server, not only in UI.

## 2FA

See [user guide](../users/security-2fa.md).
