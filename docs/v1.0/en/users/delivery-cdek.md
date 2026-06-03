# Delivery (CDEK)

Integration with [CDEK API documentation](https://apidoc.cdek.ru): rates, shipments, status sync.

## Admin setup

**Settings → Delivery → CDEK** — encrypted credentials.

<DocScreenshot
  alt="CDEK settings"
  caption="CDEK form: credentials, active toggle, link to apidoc.cdek.ru."
  path="/images/users/cdek-settings.png"
  status="placeholder"
/>

## Customer flow

`POST /api/delivery/cdek/calculate` then shipments after payment. Worker: `cdek:status_sync`.

<DocScreenshot
  alt="Checkout delivery"
  caption="Checkout: CDEK selected with price and ETA."
  path="/images/users/checkout-delivery.png"
  status="placeholder"
/>

API reference: [Payment and delivery](../api/payment-delivery.md).
