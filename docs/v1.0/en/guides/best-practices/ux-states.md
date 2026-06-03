# UX states

Every async UI block must show **loading**, **data**, **empty**, or **error**.

## Rules

- Semantic HTML (headings, buttons, labeled forms)
- Skeleton/spinner while loading
- Empty state with next step for the user
- Errors with retry or navigation
- Visible focus and field-level validation

## In ShopStack

| Part | Practice |
|------|----------|
| Admin | Skeletons on product/order lists |
| Storefront | Mandatory skeletons per `goshop_client/AGENTS.md` |
| Admin API errors | vue-sonner toasts |

<DocScreenshot
  alt="Empty orders list"
  caption="Empty state: illustration, No orders yet, link to catalog."
  path="/images/users/orders-empty.png"
  status="placeholder"
/>
