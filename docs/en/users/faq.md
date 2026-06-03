# FAQ (store owner)

## API docs?

- [API reference](/en/api/introduction) on this portal (no backend required to read docs)

## Admin cannot reach API

Check `VITE_API_URL` and `/api/health/ready`.

## Maintenance mode

Public API returns 503 except exempt paths; admin API still works. `GET /api/store/status`.

## Admin vs storefront `/admin`

Canonical admin is Vue in `goshop/src/`. `goshop_client/pages/admin` is legacy.

## Changelog

[Portal changelog](/en/versions/changelog) and `goshop/CHANGELOG.md`.

## Dark theme

[Admin UI theme](/en/theme/admin-ui-theme.md).
