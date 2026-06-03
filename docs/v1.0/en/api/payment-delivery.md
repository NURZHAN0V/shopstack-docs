# Payment and delivery

| Method | Path | Auth |
|--------|------|------|
| GET | `/api/payment/methods` | public |
| POST | `/api/payment/yookassa/create` | auth |
| POST | `/api/payment/tbank/create` | auth |
| GET | `/api/delivery/methods` | public |
| POST | `/api/delivery/cdek/calculate` | auth |
| POST | `/api/delivery/cdek/shipments` | auth |
| GET | `/api/delivery/cdek/shipments/:id` | auth |
| POST | `/api/delivery/cdek/status-sync` | admin |

Admin: `/api/admin/settings/payment-providers/:code`, `/api/admin/settings/delivery-providers/cdek`.
