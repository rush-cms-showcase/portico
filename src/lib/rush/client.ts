import type { CmsEntry, NavItem } from '@/types/rush'
import { rushConfig } from '../../../rush.config'

const RUSH_API_URL = import.meta.env.RUSH_API_URL
const RUSH_API_TOKEN = import.meta.env.RUSH_API_TOKEN

interface FetchOptions {
  method?: string
  body?: unknown
}

async function rushFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const url = `${RUSH_API_URL}${endpoint}`
  
  const response = await fetch(url, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RUSH_API_TOKEN}`,
      'Accept': 'application/json',
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  })

  if (!response.ok) {
    throw new Error(`Rush API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export async function getEntry(routeId: number, locale: string = rushConfig.defaultLocale): Promise<CmsEntry> {
  return rushFetch<CmsEntry>(`/entries/${routeId}?locale=${locale}`)
}

export async function getNav(navId: string, locale: string = rushConfig.defaultLocale): Promise<NavItem[]> {
  return rushFetch<NavItem[]>(`/navs/${navId}?locale=${locale}`)
}

export async function getEntries(routeId: number, locale: string = rushConfig.defaultLocale, page: number = 1): Promise<{ data: CmsEntry[], meta: { total: number, per_page: number, current_page: number } }> {
  const perPage = rushConfig.defaults.perPage
  return rushFetch(`/routes/${routeId}/entries?locale=${locale}&page=${page}&per_page=${perPage}`)
}

export async function getEntryBySlug(slug: string, locale: string = rushConfig.defaultLocale): Promise<CmsEntry> {
  return rushFetch<CmsEntry>(`/entries/slug/${slug}?locale=${locale}`)
}
