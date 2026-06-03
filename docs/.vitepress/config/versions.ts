export type DocVersionStatus = 'current' | 'legacy' | 'preview'

export interface DocVersion {
  /** Сегмент URL, например `v1.0` */
  key: string
  label: string
  /** Версия контракта API ShopStack */
  apiContract: string
  status: DocVersionStatus
  releaseDate?: string
}

/** Порядок: от старых к новым. Актуальная — `status: 'current'`. */
export const DOC_VERSIONS: DocVersion[] = [
  {
    key: 'v1.0',
    label: 'v1.0',
    apiContract: '1.0',
    status: 'current',
    releaseDate: '2025-06-03',
  },
]

export const LATEST_DOC_VERSION =
  DOC_VERSIONS.find((v) => v.status === 'current')?.key ??
  DOC_VERSIONS[DOC_VERSIONS.length - 1].key

const PATH_RE = /^\/(v[\d.]+)\/(ru|en)(\/.*)?$/

export function splitDocPath(path: string) {
  const m = path.match(PATH_RE)
  if (!m) return null
  return {
    version: m[1],
    locale: m[2] as 'ru' | 'en',
    suffix: m[3] ?? '',
  }
}

export function withDocVersion(version: string, locale: 'ru' | 'en', suffix = '') {
  const tail = suffix.startsWith('/') ? suffix : suffix ? `/${suffix}` : ''
  return `/${version}/${locale}${tail}`
}

export function switchDocVersion(path: string, targetVersion: string): string {
  const parts = splitDocPath(path)
  if (!parts) return `/${targetVersion}/ru/`
  return withDocVersion(targetVersion, parts.locale, parts.suffix)
}
