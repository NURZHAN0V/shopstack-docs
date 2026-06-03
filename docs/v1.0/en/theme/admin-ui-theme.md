# Admin UI theme (light / dark)

Distinct from [store branding](./store-branding.md) (logo, site name).

## Implementation

- `goshop/src/composables/useTheme.ts` — `shopstack-theme` in localStorage
- `.dark` on `<html>`, CSS variables in `main.scss` / `vars.scss`
- `ThemeToggle.vue`, menu in `AppSidebarUserMenu.vue`

<DocScreenshot
  alt="Theme toggle"
  caption="Sidebar user menu: Theme item, sun/moon icons, light/dark choice."
  path="/images/users/theme-toggle-dark.png"
  status="placeholder"
/>

Respects `prefers-color-scheme` on first visit. Dev: `theme-playground` route.

Use `--ss-c-*` CSS variables from `vars.scss` / `main.scss` for new components.
