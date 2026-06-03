# Documentation portal (rules)

Mandatory rules for **shopstack-docs** live in [`AGENTS.md`](https://github.com/NURZHAN0V/shopstack-docs/blob/main/AGENTS.md) at the repo root (`shopstack-docs/AGENTS.md` in the monorepo).

Agents and contributors **read AGENTS.md first**, then edit the portal.

## Checklist

| Rule | Summary |
|------|---------|
| Static site | No Swagger iframe, no `sync:openapi`, no running API required |
| Locales | New page = **RU + EN** in one change (`docs/v1.0/ru/` + `docs/v1.0/en/`) |
| Doc versions | Content under `docs/v1.0/`; breaking API → `pnpm version:snapshot v2.0` + `versions.ts` |
| API endpoints | `<ApiEndpoint>` with description, request and response examples |
| Screenshots | `<DocScreenshot>` with `path`, `alt`, `caption`; no lorem ipsum in user guides |
| API source | `goshop/server/docs/api.md` → then `docs/v1.0/ru/api/*.md` |
| Forbidden | No vue-faq or external FAQ links; no secrets in examples |

## Versioning

- URLs: `/v1.0/en/...`, `/v1.0/ru/...`
- Registry: `docs/.vitepress/config/versions.ts`
- Details: [Documentation versions](/v1.0/en/versions/doc-versioning.md)

## Before opening a PR

```bash
cd shopstack-docs
pnpm install
pnpm build
```

## Related AGENTS files

| Component | File |
|-----------|------|
| Admin | `goshop/AGENTS.md` |
| Storefront | `goshop_client/AGENTS.md` |
| Docs portal | `shopstack-docs/AGENTS.md` |

See also [Testing and CI](./testing-and-ci.md).
