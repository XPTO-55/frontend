import { Document } from 'prismic-javascript/types/documents'
import { ArticleDocument } from '../../@types/prismic'

export interface StaticProps {
  articles: Document[]
}

export interface BlogProps {
  articles: ArticleDocument[]
}

export interface ArticleProps {
  article: ArticleDocument
}
