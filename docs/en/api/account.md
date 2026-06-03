# Customer account

| Method | Path | Auth |
|--------|------|------|
| GET/PUT | `/api/account/profile` | auth |
| GET | `/api/account/orders` | auth |
| POST | `/api/account/orders/:id/cancel` | auth |
| POST | `/api/account/orders/:id/reorder` | auth |
| GET/POST | `/api/account/delivery-addresses` | auth |
| GET | `/api/account/wishlist` | auth |
| GET | `/api/account/compare` | auth |
| GET | `/api/account/stock-alerts` | auth |

Newsletter: `/api/newsletter/*` (public).
