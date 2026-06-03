# Каталог и товары

## Список товаров

Раздел **Товары** в боковом меню: фильтры, статусы публикации, цены.

<DocScreenshot
  alt="Список товаров"
  caption="Список товаров"
  path="/images/users/products-list.png"
  status="ready"
/>

## Карточка товара

- Название, описание (в т.ч. генерация через AI при настроенном OpenRouter)
- Варианты (размер, цвет и т.д.)
- Связанные товары и категории
- История цен (админ API)

<DocScreenshot
  alt="Редактирование товара"
  caption="Редактирование товара"
  path="/images/users/product-edit.png"
  status="ready"
/>

## Импорт и экспорт CSV

1. **Импорт** → скачайте шаблон (`/api/admin/products/import/template`).
2. Загрузите файл, при необходимости настройте mapping.
3. Дождитесь job или синхронного результата.

<DocScreenshot
  alt="Импорт товаров"
  caption="Импорт товаров"
  path="/images/users/products-import.png"
  status="ready"
/>

## Категории

Управление деревом категорий в разделе **Категории**. Глубина дерева валидируется на API.

<DocScreenshot
  alt="Дерево категорий"
  caption="Дерево категорий"
  path="/images/users/categories-tree.png"
  status="ready"
/>

## Склады

Раздел **Склады**: остатки по складам, синхронизация с заказами и возвратами.
