# Documentation portal rules

Mandatory rules for **shopstack-docs**. This page is the single source in the published repository.

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
| Git | Repository owner as sole author; no bot `Co-authored-by` trailers |

## Git and commits

- **Author and committer** — your GitHub account only.
- Do not add `Co-authored-by` trailers from AI or automation tools.
- Commit messages in Russian (or English for EN-only doc fixes, if agreed in PR).
- Before `git push`: run `git cat-file -p HEAD` and verify the message body.

## Versioning

- URLs: `/v1.0/en/...`, `/v1.0/ru/...`
- Registry: `docs/.vitepress/config/versions.ts`
- Details: [Documentation versions](/v1.0/en/versions/doc-versioning.md)

## Screenshots

Place files under `docs/public/images/` (`users/`, `storefront/`, `api/`).

## Before opening a PR

```bash
cd shopstack-docs
pnpm install
pnpm build
```

## Related rules in the monorepo

| Component | File |
|-----------|------|
| Admin | `goshop/AGENTS.md` |
| Storefront | `goshop_client/AGENTS.md` |

See also [Testing and CI](./testing-and-ci.md).
