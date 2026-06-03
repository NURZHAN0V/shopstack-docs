<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter, withBase } from 'vitepress'
import { DOC_VERSIONS, LATEST_DOC_VERSION, splitDocPath } from '../../config/versions'
import type { DocVersion } from '../../config/versions'

const route = useRoute()
const router = useRouter()
const open = ref(false)
const root = ref<HTMLElement | null>(null)

const isRu = computed(() => route.path.includes('/ru/'))

const currentKey = computed(() => splitDocPath(route.path)?.version ?? LATEST_DOC_VERSION)

const currentVersion = computed(
  () => DOC_VERSIONS.find((v) => v.key === currentKey.value) ?? DOC_VERSIONS[0]
)

function versionNumber(key: string) {
  return key.replace(/^v/, '')
}

function menuLabel(v: DocVersion) {
  const num = versionNumber(v.key)
  return isRu.value ? `Версия ${num}` : `Version ${num}`
}

function goTo(versionKey: string) {
  const parts = splitDocPath(route.path)
  if (!parts || versionKey === parts.version) {
    open.value = false
    return
  }
  open.value = false
  router.go(withBase(`/${versionKey}/${parts.locale}${parts.suffix || '/'}`))
}

function toggle() {
  open.value = !open.value
}

function onDocClick(e: MouseEvent) {
  if (!root.value?.contains(e.target as Node)) open.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="root" class="VPVersionSwitcher">
    <button
      type="button"
      class="VPVersionSwitcher__trigger"
      :aria-expanded="open"
      :aria-haspopup="true"
      :aria-label="isRu ? 'Версия документации' : 'Documentation version'"
      @click.stop="toggle"
    >
      <span class="VPVersionSwitcher__label">{{ currentVersion.label }}</span>
      <span class="VPVersionSwitcher__chevron" :class="{ open }" aria-hidden="true" />
    </button>

    <ul v-show="open" class="VPVersionSwitcher__menu" role="menu">
      <li
        v-for="v in [...DOC_VERSIONS].reverse()"
        :key="v.key"
        role="none"
      >
        <button
          type="button"
          role="menuitemradio"
          class="VPVersionSwitcher__item"
          :class="{ active: v.key === currentKey }"
          :aria-checked="v.key === currentKey"
          @click="goTo(v.key)"
        >
          <span>{{ menuLabel(v) }}</span>
          <span v-if="v.key === currentKey" class="VPVersionSwitcher__check" aria-hidden="true" />
        </button>
      </li>
    </ul>
  </div>
</template>
