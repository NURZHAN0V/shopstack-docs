# Введение в REST API

ShopStack предоставляет JSON HTTP API для витрины и панели.

## Базовый URL

| Окружение | URL |
|-----------|-----|
| Docker dev | `http://localhost:18080` |
| Production | `https://your-api.example.com` |

## Формат

- Тело запросов и ответов: **JSON**, поля в **camelCase**
- Ошибки: `{ "error", "message", "details?" }`
- Авторизация: `Authorization: Bearer <JWT>` где указано

## Guards

| Guard | Описание |
|-------|----------|
| `public` | Без JWT |
| `auth` | JWT обязателен |
| `admin` | JWT + роль `admin` или `manager` |

Подробнее: [Аутентификация](./authentication.md).

## Где смотреть API

Вся документация REST API — **на этом портале** (разделы ниже). Отдельно поднимать бэкенд для просмотра docs не нужно: выкладываете статику `shopstack-docs` (GitHub Pages, nginx, CDN) и даёте клиентам и разработчикам одну ссылку, например `https://docs.example.com/ru/api/introduction`.

Спецификация OpenAPI в репозитории продукта: `goshop/server/api/docs/swagger.yaml` (для генерации из кода, не для embed в docs).

## Формат справочника

На страницах разделов каждая **ручка** описана блоком с:

- назначением;
- **примером запроса** (HTTP + JSON);
- **примером ответа**;
- типовыми ошибками (где уместно).

## Справочник по разделам

| Раздел | Страница |
|--------|----------|
| Auth | [auth](./auth.md) |
| Корзина | [cart](./cart.md) |
| Товары | [products](./products.md) |
| Категории | [categories](./categories.md) |
| Склады | [warehouses](./warehouses.md) |
| Заказы | [orders](./orders.md) |
| Оплата и доставка | [payment-delivery](./payment-delivery.md) |
| Аккаунт | [account](./account.md) |
| Админ | [admin](./admin.md) |
| Webhooks | [webhooks](./webhooks.md) |
| Health | [health](./health.md) |

Источник истины в репозитории: `goshop/server/docs/api.md`.
