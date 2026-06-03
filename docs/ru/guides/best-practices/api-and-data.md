# API и данные

## API-адаптер (фасад)

Клиент не вызывает `fetch('/api/products')` из каждого компонента. Единый слой:

```ts
api.products.list({ categoryId: 5 })
api.orders.create(payload)
```

Смена бэкенда или базового URL — в одном месте. На витрине секреты — только в `server/api/`, публичный URL — в `runtimeConfig.public`.

## Авторизация

| Слой | Ответственность |
|------|----------------|
| UI | Показ/скрытие кнопок, редирект на login |
| API (Go) | Проверка JWT и ролей на каждом эндпоинте |

Никогда не полагаться только на скрытие кнопок в админке.

## Потоки данных

- **Props / emit** — родитель ↔ дочерний компонент
- **Pinia** — корзина, пользователь, настройки между страницами
- **Composables** — переиспользуемая логика без глобального store
- **Provide/inject** — только theme, i18n на уровне layout

## В ShopStack

- Контракт: [Справочник API](/ru/api/introduction.md)
- Панель: `goshop/src/services/api/`
- Витрина: [API-адаптер](/ru/storefront/api-adapter.md)
