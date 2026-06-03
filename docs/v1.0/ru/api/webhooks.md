# Webhooks

Входящие вызовы от платёжных систем на ваш API. **Не требуют JWT** — проверяйте подпись провайдера.

---

<ApiEndpoint method="POST" path="/api/webhooks/yookassa" auth="public" title="Webhook ЮKassa" description="Уведомления об оплате, отмене. После успешной оплаты начисляются баллы лояльности.">

<template #request>

```http
POST /api/webhooks/yookassa HTTP/1.1
Content-Type: application/json

{
  "type": "notification",
  "event": "payment.succeeded",
  "object": {
    "id": "2d7f3c1a-0001-5000-8000-1a2b3c4d5e6f",
    "status": "succeeded",
    "amount": {
      "value": "3980.00",
      "currency": "RUB"
    },
    "metadata": {
      "orderId": "501"
    }
  }
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

{
  "ok": true
}
```

</template>

</ApiEndpoint>

---

<ApiEndpoint method="POST" path="/api/webhooks/tbank" auth="public" title="Webhook T-Bank" description="Notification URL: APP_URL + /api/webhooks/tbank.">

<template #request>

```http
POST /api/webhooks/tbank HTTP/1.1
Content-Type: application/json

{
  "TerminalKey": "TinkoffBankTest",
  "OrderId": "501",
  "Success": true,
  "Status": "CONFIRMED",
  "PaymentId": 123456789,
  "Token": "signed-payload-hash"
}
```

</template>

<template #response>

```json
HTTP/1.1 200 OK

OK
```

</template>

</ApiEndpoint>
