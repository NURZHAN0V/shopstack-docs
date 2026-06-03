import { LATEST_DOC_VERSION } from './versions'

/** Префикс актуальной версии документации в URL */
export const DOC_V = `/${LATEST_DOC_VERSION}`

export function docLink(locale: 'ru' | 'en', path: string): string {
  const segment = path.startsWith('/') ? path : `/${path}`
  return `${DOC_V}/${locale}${segment}`
}

export function docSidebarKey(locale: 'ru' | 'en', section: string): string {
  return `${DOC_V}/${locale}/${section}/`
}
