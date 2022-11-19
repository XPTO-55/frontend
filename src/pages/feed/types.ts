import { Document } from 'prismic-javascript/types/documents'
import { PostDocument } from '../../@types/prismic'

export interface StaticProps {
  posts: Document[]
}

export interface FeedProps {
  posts: PostDocument[]
}

export interface PostProps {
  post: PostDocument
}
