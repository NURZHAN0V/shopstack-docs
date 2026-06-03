<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, withBase } from 'vitepress'
import { DOC_VERSIONS, LATEST_DOC_VERSION, splitDocPath } from '../../config/versions'

const route = useRoute()
const router = useRouter()

const isRu = computed(() => route.path.includes('/ru/'))

const currentKey = computed(() => splitDocPath(route.path)?.version ?? LATEST_DOC_VERSION)

function statusText(status: string) {
  if (isRu.value) {
    if (status === 'current') return 'актуальная'
    if (status === 'legacy') return 'архив'
    return 'превью'
  }
  if (status === 'current') return 'current'
  if (status === 'legacy') return 'legacy'
  return 'preview'
}

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement
  const next = target.value
  const parts = splitDocPath(route.path)
  if (!parts || next === parts.version) return
  const path = `/${next}/${parts.locale}${parts.suffix || '/'}`
  router.go(withBase(path))
}
</script>

<template>
  <label class="VPVersionSwitcher">
    <span class="VPVersionSwitcher__label">{{ isRu ? 'Версия docs' : 'Docs version' }}</span>
    <select
      class="VPVersionSwitcher__select"
      :value="currentKey"
      :aria-label="isRu ? 'Версия документации' : 'Documentation version'"
      @change="onChange"
    >
      <option v-for="v in DOC_VERSIONS" :key="v.key" :value="v.key">
        {{ v.label }} (API {{ v.apiContract }}) — {{ statusText(v.status) }}
      </option>
    </select>
  </label>
</template>
