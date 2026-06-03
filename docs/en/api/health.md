# Health and maintenance

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Liveness |
| GET | `/api/health/ready` | Readiness (DB, Redis) |

Maintenance: public `/api/*` → 503 except exempt paths (health, store status, auth login/register, all `/api/admin/*`).

`GET /api/store/status` — always available for storefront.
