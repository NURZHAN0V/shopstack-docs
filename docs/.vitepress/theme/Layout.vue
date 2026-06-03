<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute, useRouter, withBase } from 'vitepress'
import { onMounted, watch } from 'vue'
import VersionSwitcher from './components/VersionSwitcher.vue'

const route = useRoute()
const router = useRouter()
const { page } = useData()

function redirectRootIfNeeded() {
  if (page.value.relativePath !== 'index.md') return

  const locale = navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
  const target = `/v1.0/${locale}/`
  if (route.path === target) return

  router.go(withBase(target))
}

onMounted(redirectRootIfNeeded)
watch(() => route.path, redirectRootIfNeeded)
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-title-after>
      <VersionSwitcher />
    </template>
  </DefaultTheme.Layout>
</template>
