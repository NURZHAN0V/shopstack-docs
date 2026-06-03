<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    alt: string
    caption: string
    path?: string
    status?: 'placeholder' | 'ready'
  }>(),
  { status: 'placeholder' }
)

const isReady = computed(() => props.status === 'ready' && !!props.path)
const src = computed(() => (props.path?.startsWith('/') ? props.path : `/${props.path}`))
</script>

<template>
  <figure class="doc-screenshot" :class="{ 'doc-screenshot--ready': isReady }">
    <p v-if="isReady" class="doc-screenshot__lead">{{ caption }}</p>

    <div v-if="!isReady" class="doc-screenshot__placeholder" role="img" :aria-label="alt">
      <span class="doc-screenshot__icon" aria-hidden="true">🖼</span>
      <span class="doc-screenshot__badge">Скриншот — вставьте файл</span>
      <code v-if="path" class="doc-screenshot__path">{{ path }}</code>
    </div>
    <img v-else :src="src" :alt="alt" loading="lazy" class="doc-screenshot__img" />

    <figcaption v-if="!isReady" class="doc-screenshot__caption">
      <strong>На изображении должно быть:</strong>
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
.doc-screenshot {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.doc-screenshot--ready {
  padding-top: 0.75rem;
  border: none;
  background: transparent;
}

.doc-screenshot__lead {
  margin: 0 0 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--vp-c-text-2);
}

.doc-screenshot__placeholder {
  aspect-ratio: 16 / 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: linear-gradient(
    135deg,
    var(--vp-c-bg-soft) 0%,
    var(--vp-c-bg-mute) 100%
  );
  color: var(--vp-c-text-2);
}

.doc-screenshot__icon {
  font-size: 2rem;
  opacity: 0.6;
}

.doc-screenshot__badge {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ss-accent, var(--vp-c-brand-1));
}

.doc-screenshot__path {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: var(--vp-c-bg);
}

.doc-screenshot__img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.doc-screenshot__caption {
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}

.doc-screenshot__caption strong {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--vp-c-text-1);
}
</style>
