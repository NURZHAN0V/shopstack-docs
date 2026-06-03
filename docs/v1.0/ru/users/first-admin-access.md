# Первый доступ администратора

## Регистрация

1. Откройте панель (http://localhost:15173 в Docker).
2. Зарегистрируйте пользователя через форму входа.

<DocScreenshot
  alt="Экран входа и регистрации"
  caption="Вход в панель"
  path="/images/users/onboarding-login.png"
  status="ready"
/>

## Назначение роли admin

После регистрации роль по умолчанию — покупатель. Для доступа к админ-разделам назначьте `admin` в PostgreSQL:

```bash
docker compose exec postgres psql -U postgres -d shopstack \
  -c "UPDATE users SET role='admin' WHERE email='ваш@email.ru';"
```

Роли панели: `admin`, `manager` — полный доступ к `/api/admin/*`; остальные — только витрина и личный кабинет.

<DocScreenshot
  alt="Меню пользователя в сайдбаре"
  caption="Меню пользователя"
  path="/images/users/sidebar-user-menu.png"
  status="ready"
/>

## Двухфакторная аутентификация

Для production рекомендуется включить 2FA — см. [Безопасность: 2FA](./security-2fa.md).
