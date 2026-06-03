# Products and search

| Method | Path | Auth | Status |
|--------|------|------|--------|
| GET | `/api/products` | public | OK |
| GET | `/api/products/:productKey` | public | OK — id or slug |
| GET | `/api/products/:productKey/related` | public | OK |
| GET | `/api/products/filters` | public | OK |
| GET | `/api/products/search?q=` | public | OK |
| GET | `/api/products/compare?ids=` | public | OK — max 3 |
| POST | `/api/products/:id/stock-alerts` | optional auth | OK |
| DELETE | `/api/products/:id/stock-alerts` | optional auth | OK |
| POST | `/api/admin/products` | admin | OK |
| PUT | `/api/admin/products/:id` | admin | OK |
| POST | `/api/admin/products/:id/variants` | admin | OK |
| PUT | `/api/admin/products/:id/variants/:variantId` | admin | OK |
| GET | `/api/admin/products/import/template` | admin | OK |
| POST | `/api/admin/products/import/preview` | admin | OK |
| POST | `/api/admin/products/import` | admin | OK |
| GET | `/api/admin/products/import/:id` | admin | OK |
| GET | `/api/admin/products/export` | admin | OK |
| GET | `/api/admin/products/:id/price-history` | admin | OK |

Reviews: `POST /api/reviews`, admin `/api/admin/reviews`.
