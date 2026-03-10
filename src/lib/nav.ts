import { rushConfig } from '../../rush.config'

export function getRouteForCollection(collectionId: number | string): string {
  const entry = Object.entries(rushConfig.routes).find(([, id]) => String(id) === String(collectionId))
  return entry ? entry[0] : '#'
}

export function resolveUrl(item: any): string {
  if (item.type === 'url') return item.url || '#'

  if (item.type === 'collection') {
    const id = item.collection?.id
    if (!id) return '#'
    const slug = item.collection?.slug?.pt_BR
    return slug ? `/${slug}` : getRouteForCollection(id)
  }

  if (item.type === 'entry') {
    const slug = item.entry?.slug?.pt_BR || item.entry?.slug
    if (!slug) return '#'
    return `/${slug}`
  }

  return '#'
}

export function mapMenuItem(item: any): { title: string; url: string; target: string; children: any[] } {
  return {
    title: item.title,
    url: resolveUrl(item),
    target: item.target || '_self',
    children: Array.isArray(item.children) ? item.children.map(mapMenuItem) : [],
  }
}
