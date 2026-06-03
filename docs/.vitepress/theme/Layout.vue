<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import VersionSwitcher from './components/VersionSwitcher.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-before>
      <VersionSwitcher />
    </template>
  </DefaultTheme.Layout>
</template>
