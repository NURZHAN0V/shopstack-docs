# Quick start

ShopStack is an e-commerce and content platform: Go API, Vue admin, Nuxt storefront.

## Docker

From `goshop/`:

```bash
docker compose up --build
```

| Service | URL |
|---------|-----|
| Admin | http://localhost:15173 |
| API | http://localhost:18080 |
| API docs | this portal → [API reference](/en/api/introduction) |

<DocScreenshot
  alt="Admin dashboard after login"
  caption="Dashboard: sidebar (Products, Orders, Customers, Content, Settings), welcome area and summary widgets."
  path="/images/users/dashboard.png"
  status="placeholder"
/>

## Local admin

```bash
cd goshop && npm install && npm run dev
```

Requires running API. `VITE_API_URL` defaults to `http://localhost:18080`.

## Storefront

```bash
cd goshop_client && npm install && npm run dev
```

http://localhost:3000 — `NUXT_PUBLIC_API_URL` for API.

Next: [First admin access](./first-admin-access.md)
