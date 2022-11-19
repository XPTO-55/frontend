import { Document } from 'prismic-javascript/types/documents'
import { ArticleDocument } from '../../../@types/prismic'

export interface StaticProps {
  article: Document
  latestArticles: Document[]
}

export interface ArticleProps {
  article: ArticleDocument
  latestArticles: ArticleDocument[]
}

export interface LatestArticleProps {
  article: ArticleDocument
}
