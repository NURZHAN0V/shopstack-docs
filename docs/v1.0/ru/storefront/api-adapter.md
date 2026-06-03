# API-адаптер

Клиент обращается к бэкенду через **фасад**, а не через разбросанные `fetch` в компонентах.

## Клиент

```ts
// composables/useApi.ts (пример)
const config = useRuntimeConfig()
const base = config.public.apiUrl

export function useApi() {
  return {
    products: {
      list: (params) => $fetch(`${base}/api/products`, { params }),
    },
  }
}
```

Смена URL или формата ответа — правки в одном слое; страницы не трогаете.

## Секреты

Токены платёжек и ключи — **только** `server/api/*`:

```ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  // config.secretKey — не в public
})
```

## CORS

Для чувствительных операций предпочтительны **Nuxt server routes** (прокси на Go API), а не открытый CORS с секретами в браузере.

## Загрузка данных

- CSR: `onMounted` + `$fetch` или `useFetch` с `server: false`
- Показывайте skeleton, пока запрос в полёте

Справочник ручек: [API](/v1.0/ru/api/introduction.md).
