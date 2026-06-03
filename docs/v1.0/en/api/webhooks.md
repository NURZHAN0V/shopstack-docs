# Webhooks

| Method | Path | Provider |
|--------|------|----------|
| POST | `/api/webhooks/yookassa` | YooKassa |
| POST | `/api/webhooks/tbank` | T-Bank |

YooKassa: payment confirmation and loyalty points.

T-Bank: notification URL = `APP_URL + /api/webhooks/tbank`.

Verify signatures per provider docs.

<DocScreenshot
  alt="Webhook URL in provider dashboard"
  caption="Notification URL field: https://api.example.com/api/webhooks/yookassa."
  path="/images/api/webhook-config.png"
  status="placeholder"
/>
