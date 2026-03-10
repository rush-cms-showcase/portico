const BASE_URL = import.meta.env.RUSH_API_URL
const TOKEN = import.meta.env.RUSH_API_TOKEN
const SLUG = import.meta.env.RUSH_SLUG

async function rushFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}/${SLUG}${endpoint}`
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {}),
    },
  })
  if (!response.ok) {
    throw new Error(`Rush API error: ${response.status} ${response.statusText} — ${url}`)
  }
  return response.json()
}

export async function getCollection<T = any>(
  collectionSlug: string,
  params: Record<string, string | number> = {}
): Promise<{ data: T[]; meta: { current_page: number; last_page: number; total?: number } }> {
  const qs = new URLSearchParams(
    Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)]))
  ).toString()
  return rushFetch(`/collections/${collectionSlug}/entries${qs ? `?${qs}` : ''}`)
}

export async function getEntryBySlug<T = any>(
  collectionSlug: string,
  entrySlug: string
): Promise<{ data: T }> {
  return rushFetch(`/collections/${collectionSlug}/entries/${entrySlug}`)
}

export async function getNav(key: string): Promise<{ data: { items: any[] } }> {
  return rushFetch(`/navigations/${key}`)
}

export async function getForm(key: string): Promise<{ data: any }> {
  return rushFetch(`/forms/${key}`)
}
