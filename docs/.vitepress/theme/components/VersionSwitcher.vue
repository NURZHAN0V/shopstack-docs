<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, withBase } from 'vitepress'
import { DOC_VERSIONS, LATEST_DOC_VERSION, splitDocPath } from '../../config/versions'
import type { DocVersion } from '../../config/versions'

const props = withDefaults(
  defineProps<{ variant?: 'nav' | 'sidebar' }>(),
  { variant: 'nav' }
)

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

function optionLabel(v: DocVersion) {
  return `${v.label} (API ${v.apiContract})`
}

function optionTitle(v: DocVersion) {
  return `${optionLabel(v)} — ${statusText(v.status)}`
}

const currentVersion = computed(
  () => DOC_VERSIONS.find((v) => v.key === currentKey.value) ?? DOC_VERSIONS[0]
)

const selectTitle = computed(() =>
  currentVersion.value ? optionTitle(currentVersion.value) : ''
)

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
  <div
    class="VPVersionSwitcher"
    :class="{ 'VPVersionSwitcher--sidebar': props.variant === 'sidebar' }"
  >
    <label v-if="props.variant === 'sidebar'" class="VPVersionSwitcher__label">
      {{ isRu ? 'Версия документации' : 'Documentation version' }}
    </label>
    <select
      class="VPVersionSwitcher__select"
      :value="currentKey"
      :aria-label="isRu ? 'Версия документации' : 'Documentation version'"
      :title="selectTitle"
      @change="onChange"
    >
      <option v-for="v in DOC_VERSIONS" :key="v.key" :value="v.key" :title="optionTitle(v)">
        {{ optionLabel(v) }} — {{ statusText(v.status) }}
      </option>
    </select>
  </div>
</template>
