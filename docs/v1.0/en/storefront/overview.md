# Storefront overview

Public site: **`goshop_client/`** (Nuxt 4, Tailwind, Pinia).

| Setting | Value |
|---------|-------|
| Rendering | Client-only (CSR) |
| SEO | Disabled (`noindex`) |
| API | `NUXT_PUBLIC_API_URL` |
| Canonical admin | Vue in `goshop/src/` |

<DocScreenshot
  alt="Storefront catalog"
  caption="Catalog: header with logo, product grid, filters, cart icon."
  path="/images/storefront/catalog.png"
  status="placeholder"
/>

Secrets only in Nuxt `server/api`. Rules: `goshop_client/AGENTS.md`.

- [Project structure](./project-structure.md)
- [Storefront conventions](./conventions.md)
