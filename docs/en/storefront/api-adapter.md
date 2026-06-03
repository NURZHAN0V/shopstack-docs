# API adapter

Use a facade (`api.products.list()`) instead of scattered `fetch` calls. Secrets only in `server/api/`; public base URL in `runtimeConfig.public`.

Prefer Nuxt server routes over wide-open CORS for sensitive calls.

[API reference](/en/api/introduction.md).
