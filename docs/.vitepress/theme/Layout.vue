<script setup lang="ts">
import DefaultTheme, { useSidebar } from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import { onMounted, watch } from 'vue'
import VersionSwitcher from './components/VersionSwitcher.vue'

const route = useRoute()
const { page } = useData()
const { hasSidebar } = useSidebar()

function redirectRootIfNeeded() {
  if (page.value.relativePath !== 'index.md') return

  const locale = navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
  const target = `${import.meta.env.BASE}v1.0/${locale}/`
  if (route.path === target || window.location.pathname.endsWith(`/v1.0/${locale}/`)) return

  window.location.replace(target)
}

onMounted(redirectRootIfNeeded)
watch(() => route.path, redirectRootIfNeeded)
</script>

<template>
  <DefaultTheme.Layout>
    <template v-if="!hasSidebar" #nav-bar-content-after>
      <VersionSwitcher />
    </template>
    <template v-if="hasSidebar" #sidebar-nav-before>
      <VersionSwitcher variant="sidebar" />
    </template>
  </DefaultTheme.Layout>
</template>
