import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://musictheory.xyz'
  const pages = [
    '', '/about', '/courses', '/reviews', '/blog',
    '/music-theory-basics', '/songwriting-tips', '/chord-progressions',
    '/ear-training', '/song-structure', '/scales-and-modes',
    '/best-songwriting-course', '/music-theory-for-songwriters',
    '/how-to-write-a-song', '/intervals-explained',
    '/privacy', '/terms', '/disclaimer',
  ]
  return pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly' as const,
    priority: page === '' ? 1 : page === '/best-songwriting-course' ? 0.9 : 0.7,
  }))
}
