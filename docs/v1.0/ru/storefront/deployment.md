# Деплой витрины

Витрина деплоится **отдельно** от API и nginx-панели.

## Переменные

| Переменная | Назначение |
|------------|------------|
| `NUXT_PUBLIC_API_URL` | Базовый URL Go API |

Секреты — в server `runtimeConfig` без `public`.

## Сборка

```bash
cd goshop_client
npm run build
```

Статика/Node output — по конфигурации Nuxt (CSR).

## Production

См. `goshop/docs/deploy-docker-registry.md` — раздел «Витрина (goshop_client)».

<DocScreenshot
  alt="Витрина на production домене"
  caption="Публичный домен витрины, HTTPS, корректный логотип из настроек темы магазина."
  path="/images/storefront/production.png"
  status="placeholder"
/>
