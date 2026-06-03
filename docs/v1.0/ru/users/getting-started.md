# Быстрый старт

ShopStack — платформа интернет-магазина и контента: Go API, Vue-панель и Nuxt-витрина.

## Запуск через Docker

Из каталога `goshop/` (где `docker-compose.yml`):

```bash
docker compose up --build
```

| Сервис | URL |
|--------|-----|
| Панель | http://localhost:15173 |
| API | http://localhost:18080 |
| Health | http://localhost:18080/api/health |
| Документация API | этот портал → [Справочник API](/v1.0/ru/api/introduction) |

<DocScreenshot
  alt="Главная панели после входа"
  caption="Дашборд: боковое меню (Товары, Заказы, Клиенты, Контент, Настройки), приветствие и сводные виджеты."
  path="/images/users/dashboard.png"
  status="placeholder"
/>

## Локальная панель без Docker

```bash
cd goshop
npm install && npm run dev
```

Нужен запущенный API. Переменная `VITE_API_URL` (по умолчанию `http://localhost:18080`).

## Витрина

Публичный сайт — проект `goshop_client/`:

```bash
cd goshop_client
npm install && npm run dev
```

По умолчанию http://localhost:3000, API через `NUXT_PUBLIC_API_URL`.

## Следующие шаги

- [Первый доступ администратора](./first-admin-access.md)
- [Каталог и товары](./catalog-products.md)
