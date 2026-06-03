# Тема панели (светлая / тёмная)

Панель ShopStack поддерживает переключение **UI-темы**, не путать с брендингом магазина на витрине.

## Реализация

| Файл | Назначение |
|------|------------|
| `goshop/src/composables/useTheme.ts` | `light` \| `dark`, ключ `shopstack-theme` в localStorage |
| `goshop/src/main.ts` | `initTheme()` при старте |
| `goshop/src/assets/styles/main.scss` | CSS-переменные `:root` и `.dark` |
| `goshop/src/assets/styles/vars.scss` | Палитра Mocha Mousse |
| `goshop/src/components/ThemeToggle.vue` | Кнопка переключения |
| `goshop/src/app/components/AppSidebarUserMenu.vue` | Пункт темы в меню |

Механизм: класс `.dark` на `<html>`, `color-scheme`, семантические токены `--ss-c-*`.

<DocScreenshot
  alt="Переключатель темы"
  caption="Меню пользователя в сайдбаре: пункт «Тема» с выбором светлой/тёмной, иконка солнца/луны."
  path="/images/users/theme-toggle-dark.png"
  status="placeholder"
/>

## Системная тема

При первом визите без сохранённого значения учитывается `prefers-color-scheme`.

## Playground

Маршрут `theme-playground` — визуализация токенов для разработчиков (`ThemePlaygroundView.vue`).

Токены задаются в `vars.scss` и `main.scss`; для новых компонентов используйте CSS variables `--ss-c-*`, а не хардкод цветов.
