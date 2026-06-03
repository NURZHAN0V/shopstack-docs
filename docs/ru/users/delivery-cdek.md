# Доставка (СДЭК)

ShopStack интегрируется с [API СДЭК](https://apidoc.cdek.ru) для расчёта тарифа, создания отправлений и синхронизации статусов.

## Настройка в панели

**Настройки → Доставка → СДЭК** (`GET/PUT /api/admin/settings/delivery-providers/cdek`):

- Account / secure password (хранятся зашифрованно)
- Тестовый и боевой контур API

<DocScreenshot
  alt="Настройки СДЭК"
  caption="Форма СДЭК: учётные данные, переключатель активен, подсказка с ссылкой на apidoc.cdek.ru."
  path="/images/users/cdek-settings.png"
  status="placeholder"
/>

## Сценарий для покупателя

1. На витрине выбор способа доставки.
2. `POST /api/delivery/cdek/calculate` — расчёт (без ключей API → 503).
3. После оплаты — создание отправления `POST /api/delivery/cdek/shipments`.

## Синхронизация статусов

Worker выполняет задачу `cdek:status_sync`. Админ может запустить `POST /api/delivery/cdek/status-sync`.

<DocScreenshot
  alt="Способы доставки на витрине"
  caption="Checkout: блок доставки, выбран СДЭК, отображается цена и срок."
  path="/images/users/checkout-delivery.png"
  status="placeholder"
/>

Подробности контракта — в [справочнике API: оплата и доставка](../api/payment-delivery.md).
