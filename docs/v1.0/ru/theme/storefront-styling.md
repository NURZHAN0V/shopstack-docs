# Стили витрины

Витрина (`goshop_client`) использует **фиксированную** Tailwind-палитру:

- `warm`, `teal`, `ink` в `tailwind.config.js`
- **Тёмная тема UI не реализована**

<DocScreenshot
  alt="Витрина днём"
  caption="Главная витрины: тёплый фон warm, акцент teal на кнопках, тёмный текст ink."
  path="/images/storefront/catalog.png"
  status="placeholder"
/>

## Roadmap

При добавлении dark mode рекомендуется: CSS variables в `:root` / `.dark`, значение в `localStorage`, без полной пересборки Tailwind config на лету.

До этого витрина остаётся single-theme; брендинг — только лого/название из настроек магазина.
