<script setup lang="ts">
defineProps<{
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  path: string
  auth: 'public' | 'auth' | 'admin' | 'optional'
  title: string
  description?: string
  status?: string
}>()

const authLabels: Record<string, string> = {
  public: 'public — без JWT',
  auth: 'auth — Bearer JWT',
  admin: 'admin — JWT + роль admin/manager',
  optional: 'optional — JWT необязателен',
}

const methodClass = (m: string) => `api-endpoint__method api-endpoint__method--${m.toLowerCase()}`
</script>

<template>
  <section class="api-endpoint">
    <header class="api-endpoint__header">
      <span :class="methodClass(method)">{{ method }}</span>
      <code class="api-endpoint__path">{{ path }}</code>
      <span v-if="status" class="api-endpoint__status">{{ status }}</span>
    </header>
    <h3 class="api-endpoint__title">{{ title }}</h3>
    <p v-if="description" class="api-endpoint__desc">{{ description }}</p>
    <p class="api-endpoint__auth">
      <strong>Auth:</strong> {{ authLabels[auth] || auth }}
    </p>
    <div v-if="$slots.request" class="api-endpoint__block">
      <h4>Пример запроса</h4>
      <slot name="request" />
    </div>
    <div v-if="$slots.response" class="api-endpoint__block">
      <h4>Пример ответа</h4>
      <slot name="response" />
    </div>
    <div v-if="$slots.errors" class="api-endpoint__block">
      <h4>Ошибки</h4>
      <slot name="errors" />
    </div>
  </section>
</template>

<style scoped>
.api-endpoint {
  margin: 2rem 0;
  padding: 1rem 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.api-endpoint__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.api-endpoint__method {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
}

.api-endpoint__method--get { background: #2e7d32; }
.api-endpoint__method--post { background: #1565c0; }
.api-endpoint__method--put { background: #ef6c00; }
.api-endpoint__method--patch { background: #7b1fa2; }
.api-endpoint__method--delete { background: #c62828; }

.api-endpoint__path {
  font-size: 0.9rem;
  background: var(--vp-c-bg);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.api-endpoint__status {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.api-endpoint__title {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  border: none;
  padding: 0;
}

.api-endpoint__desc,
.api-endpoint__auth {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0.35rem 0;
}

.api-endpoint__block {
  margin-top: 1rem;
}

.api-endpoint__block h4 {
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--vp-c-text-2);
}

.api-endpoint__block :deep(pre) {
  margin: 0;
}
</style>
