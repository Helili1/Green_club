// Разные типы секций контента
export type ArticleSection =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; items: string[] }
  | { type: 'facts'; items: { title: string; text: string }[] }

// Структура статьи
export interface Article {
  slug: string
  title: string
  description: string
  icon: string
  coverImage?: string
  content: ArticleSection[]
}