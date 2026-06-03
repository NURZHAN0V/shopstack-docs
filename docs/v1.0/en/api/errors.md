# Errors

```json
{
  "error": "validation_error",
  "message": "Human-readable message",
  "details": { "field": "reason" }
}
```

| Code | Typical case |
|------|----------------|
| 401 | Missing/expired JWT |
| 403 | Forbidden |
| 503 | Maintenance, CDEK without keys |

Maintenance: `{ "error": "maintenance", "message": "…" }` — see [health](./health.md).
