# Compatibility matrix

| Component | Version source | Example |
|-----------|----------------|---------|
| **API contract** | `swagger.yaml` | **1.0** |
| **Admin SPA** | `goshop/package.json` | **0.1.0** |
| **Docker prod** | `IMAGE_TAG` in deploy `.env` | **1.0.0** |
| **Storefront** | `goshop_client/package.json` | **1.0.0** |
| **Docs portal** | `shopstack-docs/package.json` | **1.0.1** |
| **Docs snapshot (URL)** | `docs/v1.0/`, header switcher | **v1.0** (API 1.0) |

## API change policy

- **Patch** — compatible fixes
- **Minor** — new endpoints/optional fields
- **Major** — breaking changes (announced separately)

Verify `IMAGE_TAG`, API contract version in docs, and `NUXT_PUBLIC_API_URL` on staging.

- [Documentation versions](./doc-versioning.md)
- [Portal changelog](./changelog.md)
- Product: `goshop/CHANGELOG.md`
