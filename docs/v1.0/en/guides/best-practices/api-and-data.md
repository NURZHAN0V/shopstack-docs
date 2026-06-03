# API and data

## API facade

Centralize HTTP: `api.products.list()`, not scattered `fetch` calls. Secrets stay in Nuxt `server/api/`; public base URL in `runtimeConfig.public`.

## Auth

UI for UX only; Go API enforces JWT and roles.

## Data flow

Props/events for local UI, Pinia for cross-route state, composables for shared logic.

**In ShopStack:** [API reference](/v1.0/en/api/introduction.md), [API adapter](/v1.0/en/storefront/api-adapter.md).
