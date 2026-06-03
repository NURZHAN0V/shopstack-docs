# Двухфакторная аутентификация (2FA)

Для ролей `admin` и `manager` API может требовать включённую 2FA (`RequireAdmin2FAEnabled`).

## Режимы

- **TOTP** — секрет шифруется at rest (`ENCRYPTION_KEY`)
- **Email** — код при входе на почту администратора

## Включение в панели

Профиль → безопасность → настройка 2FA.

<DocScreenshot
  alt="Настройка 2FA"
  caption="Экран 2FA: выбор TOTP или email, QR-код для приложения-аутентификатора, статус «включено»."
  path="/images/users/security-2fa.png"
  status="placeholder"
/>

## Поведение при входе

После логина с паролем — второй шаг: код из приложения или письмо.

<DocScreenshot
  alt="Ввод кода 2FA"
  caption="Форма второго фактора: поле кода из 6 цифр, кнопка подтвердить."
  path="/images/users/security-2fa-login.png"
  status="placeholder"
/>

Без включённой 2FA запросы к `/api/admin/*` могут возвращать ошибку с требованием настройки.
