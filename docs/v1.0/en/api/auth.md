# Auth endpoints

See the Russian reference for full request/response examples: [Auth (RU)](/v1.0/ru/api/auth.md).

Quick reference:

| Method | Path | Auth |
|--------|------|------|
| POST | `/api/auth/register` | public |
| POST | `/api/auth/login` | public |
| POST | `/api/auth/2fa/verify` | public |
| GET | `/api/me` | auth |
| PATCH | `/api/me` | auth |

Example login request:

```http
POST /api/auth/login
Content-Type: application/json

{ "email": "buyer@example.com", "password": "secret123" }
```

Example response:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { "id": 42, "email": "buyer@example.com", "role": "user" }
}
```
