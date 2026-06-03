---
layout: page
title: ShopStack Docs
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

onMounted(() => {
  const lang = navigator.language?.toLowerCase() ?? ''
  const locale = lang.startsWith('ru') ? 'ru' : 'en'
  window.location.replace(withBase(`/v1.0/${locale}/`))
})
</script>

Redirecting… If nothing happens, open [Русский](/v1.0/ru/) or [English](/v1.0/en/).
