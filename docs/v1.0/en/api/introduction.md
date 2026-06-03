# REST API introduction

JSON HTTP API for storefront and admin.

## Base URL

| Environment | URL |
|-------------|-----|
| Docker dev | `http://localhost:18080` |
| Production | `https://your-api.example.com` |

## Format

- **JSON**, **camelCase** fields
- Errors: `{ "error", "message", "details?" }`
- Auth: `Authorization: Bearer <JWT>`

## Guards

| Guard | Description |
|-------|-------------|
| `public` | No JWT |
| `auth` | JWT required |
| `admin` | JWT + `admin` or `manager` |

See [Authentication](./authentication.md).

API reference is **fully on this docs site** — deploy static `shopstack-docs` and share one URL (e.g. `https://docs.example.com/en/api/introduction`). No running API server required to read docs.

**Detailed examples** (description + request + response per endpoint): see Russian pages under `/ru/api/` — e.g. [products](/v1.0/ru/api/products.md), [orders](/v1.0/ru/api/orders.md). English tables mirror the contract; full HTTP examples are maintained in RU first.

Source of truth: `goshop/server/docs/api.md`.
