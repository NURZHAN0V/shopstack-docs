# Orders and payments

## Orders list

**Orders** section with status filters and `GET /api/admin/orders/stats` counters.

<DocScreenshot
  alt="Orders list"
  caption="Orders table: ORD-YYYY-NNNNNN, customer, total, status, date."
  path="/images/users/orders-list.png"
  status="placeholder"
/>

## Order detail

Line items, status change (audit log), refunds.

<DocScreenshot
  alt="Order detail"
  caption="Order header, line items, delivery and payment blocks, status action."
  path="/images/users/order-detail.png"
  status="placeholder"
/>

## Payment providers

**Settings → Payment providers** — YooKassa (`YOOKASSA_*`), T-Bank (`TBANK_*`).

<DocScreenshot
  alt="Payment settings"
  caption="Provider form: enable toggle, shop id, masked secret, test mode."
  path="/images/users/payment-settings.png"
  status="placeholder"
/>

Public methods: `GET /api/payment/methods`.
