# Заказы и оплата

## Список заказов

Раздел **Заказы**: фильтр по статусу, дате, клиенту. Счётчики по статусам — `GET /api/admin/orders/stats`.

<DocScreenshot
  alt="Список заказов"
  caption="Таблица заказов: номер ORD-YYYY-NNNNNN, клиент, сумма, статус, дата; фильтры."
  path="/images/users/orders-list.png"
  status="placeholder"
/>

## Карточка заказа

Просмотр позиций, смена статуса (с записью в audit log), оформление возврата.

<DocScreenshot
  alt="Детали заказа"
  caption="Шапка с номером и статусом, таблица позиций, блок доставки и оплаты, кнопка смены статуса."
  path="/images/users/order-detail.png"
  status="placeholder"
/>

## Способы оплаты

Настройка в **Настройки → Платёжные провайдеры**:

| Провайдер | Переменные окружения (API) |
|-----------|----------------------------|
| ЮKassa | `YOOKASSA_*` |
| T-Bank | `TBANK_*` |

Публичный список доступных методов: `GET /api/payment/methods` — поля `code`, `isAvailable`, `reason`.

<DocScreenshot
  alt="Настройки ЮKassa"
  caption="Форма провайдера: переключатель включено, shop id, секрет (маскирован), тестовый режим."
  path="/images/users/payment-settings.png"
  status="placeholder"
/>

## Лояльность

Списание баллов при оформлении; начисление после успешной оплаты (webhook ЮKassa); возврат баллов при refund.
