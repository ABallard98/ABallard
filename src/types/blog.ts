export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: number
  image: string
  tags: string[]
  featured: boolean
}
