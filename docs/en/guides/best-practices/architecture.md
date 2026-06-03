# Architecture

## Frontend principles

- Loose coupling between catalog, cart, checkout, account
- Separate app shell (layout, auth, API client)
- Replaceable UI, i18n, payments, themes via adapters and CSS variables
- Components + composables + Pinia, not deep OOP

## Design principles

SoC, SRP, KISS, DRY, composition over inheritance — applied in admin modules, Nuxt storefront, and Go API layers.

| Part | Layout |
|------|--------|
| Admin | `goshop/src/modules/` |
| Storefront | `goshop_client/app/` |
| API | handler → service → repository |

See [Project structure](/en/storefront/project-structure.md).
