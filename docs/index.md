---
layout: page
title: ShopStack Docs
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const lang = navigator.language?.toLowerCase() ?? ''
  window.location.replace(lang.startsWith('ru') ? '/ru/' : '/en/')
})
</script>

Redirecting… If nothing happens, open [Русский](/ru/) or [English](/en/).
