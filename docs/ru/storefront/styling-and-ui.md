# Стили и UI

## Tailwind

Цвета **только** из `tailwind.config.js` (`warm`, `teal`, `ink`). Без произвольных hex.

## Компоненты

Префикс `Base*` для обёрток над нативными input/select/checkbox. Remix Icon — единственный набор иконок (без inline SVG).

## Состояния UX

Обязательны skeleton / empty / error — см. [UX-состояния](/ru/guides/best-practices/ux-states.md) и `goshop_client/AGENTS.md`.

<DocScreenshot
  alt="Skeleton каталога"
  caption="Сетка skeleton-карточек на месте товаров до загрузки API."
  path="/images/storefront/catalog-skeleton.png"
  status="placeholder"
/>

## Большие списки

Пагинация или виртуализация; `shallowRef` для больших массивов каталога.

<DocScreenshot
  alt="Оформление заказа"
  caption="Checkout: шаги доставки и оплаты, итоговая сумма, кнопка «Оплатить»."
  path="/images/storefront/checkout.png"
  status="placeholder"
/>
