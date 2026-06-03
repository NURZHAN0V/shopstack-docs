# Admin and settings

| Method | Path | Auth |
|--------|------|------|
| GET | `/api/store/status` | public |
| GET/PUT | `/api/admin/settings/*` | admin |
| GET/PUT | `/api/admin/settings/integrations/:code` | admin |
| GET/PUT | `/api/admin/settings/mail` | admin |
| GET/POST/PATCH | `/api/admin/customers` | admin |
| GET | `/api/admin/dashboard/summary` | admin |
| GET/POST/PATCH | `/api/admin/users` | admin |
| GET/POST/PUT | `/api/admin/marketing/*` | admin |
| GET | `/api/admin/audit-log` | admin |

Auth: `POST /api/auth/register`, `POST /api/auth/login`.
