#!/usr/bin/env node
/**
 * Копирует снимок документации для новой версии URL (например v2.0).
 * После запуска вручную обновите docs/.vitepress/config/versions.ts
 *
 * Usage: node scripts/new-doc-version.mjs v2.0 [source=v1.0]
 */
import { cpSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const docsDir = join(root, 'docs')

const target = process.argv[2]
const source = process.argv[3] ?? 'v1.0'

if (!target || !/^v[\d.]+$/.test(target)) {
  console.error('Укажите версию вида v2.0: pnpm version:snapshot v2.0')
  process.exit(1)
}

if (target === source) {
  console.error('Целевая версия должна отличаться от исходной')
  process.exit(1)
}

const srcPath = join(docsDir, source)
const dstPath = join(docsDir, target)

if (!existsSync(srcPath)) {
  console.error(`Не найдена папка ${srcPath}`)
  process.exit(1)
}

if (existsSync(dstPath)) {
  console.error(`Уже существует ${dstPath}`)
  process.exit(1)
}

cpSync(srcPath, dstPath, { recursive: true })
console.log(`Скопировано: docs/${source}/ → docs/${target}/`)
console.log('Дальше:')
console.log(`  1. Добавьте версию в docs/.vitepress/config/versions.ts`)
console.log(`  2. Замените в docs/${target}/ ссылки /${source}/ → /${target}/`)
console.log('  3. Обновите paths.ts / LATEST при смене актуальной версии')
console.log('  4. pnpm build')
