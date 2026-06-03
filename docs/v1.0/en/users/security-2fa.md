# Two-factor authentication (2FA)

Required for admin API when `RequireAdmin2FAEnabled` is active.

## Modes

- **TOTP** — encrypted secret (`ENCRYPTION_KEY`)
- **Email** — code on login

<DocScreenshot
  alt="2FA setup"
  caption="2FA screen: TOTP or email choice, QR code, enabled status."
  path="/images/users/security-2fa.png"
  status="placeholder"
/>

<DocScreenshot
  alt="2FA login step"
  caption="Second factor form: 6-digit code, Confirm."
  path="/images/users/security-2fa-login.png"
  status="placeholder"
/>
