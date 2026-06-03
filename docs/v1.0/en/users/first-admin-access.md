# First admin access

## Register

Open the admin panel and create an account.

<DocScreenshot
  alt="Login screen"
  caption="Login form: email and password fields, Sign in and register links, ShopStack branding."
  path="/images/users/onboarding-login.png"
  status="placeholder"
/>

## Grant admin role

```bash
docker compose exec postgres psql -U postgres -d shopstack \
  -c "UPDATE users SET role='admin' WHERE email='your@email.com';"
```

Roles: `admin`, `manager` for `/api/admin/*`.

<DocScreenshot
  alt="Sidebar user menu"
  caption="Sidebar footer: avatar, profile items, theme toggle, sign out."
  path="/images/users/sidebar-user-menu.png"
  status="placeholder"
/>

See [Two-factor authentication](./security-2fa.md) for production.
