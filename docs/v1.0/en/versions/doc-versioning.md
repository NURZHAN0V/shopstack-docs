# Documentation versions

The portal keeps **documentation snapshots per API generation**, not only the latest `main`. Each version has its own URL prefix: `/v1.0/en/...`, `/v1.0/ru/...`.

## Available versions

| Docs version | API contract | Status | Folder |
|--------------|--------------|--------|--------|
| **v1.0** | 1.0 | current | `docs/v1.0/` |

Use the header switcher to change the version segment while keeping locale and page path when the target version includes that page.

## When to add a new version

Create **v2.0** (or the next minor) when:

- REST API has **breaking changes**;
- admin or storefront guides describe behavior that **no longer applies** to older deployments.

Non-breaking API additions and typo fixes stay in the **current** docs tree (`v1.0` today).

## Release checklist

1. Copy snapshot: `pnpm version:snapshot v2.0` (from `v1.0`).
2. Register the version in `docs/.vitepress/config/versions.ts`.
3. Mark the previous tree `legacy`, the new one `current`.
4. Update the compatibility matrix and portal changelog.
5. Edit only `docs/v2.0/`; freeze `docs/v1.0/` except typos/security.
6. Tag `docs-v2.0.0` and publish a GitHub Release (optional).
7. Run `pnpm build` and verify the version switcher.

## Repository layout

```
docs/
  v1.0/ru/   v1.0/en/
  v2.0/...               # next major when needed
  .vitepress/config/versions.ts
```

## Links

- In-page: `/v1.0/en/api/introduction`
- Product API source: `goshop/server/docs/api.md`

See [compatibility matrix](./compatibility-matrix.md) and [changelog](./changelog.md).
