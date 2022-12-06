import { PrismicDocument } from '@prismicio/types'
import { Document } from 'prismic-javascript/types/documents'
// import { PostDocument } from '../../@types/prismic'

// interface PostCommentsDocument extends PostDocument {
//   comments: CommentsDocument[]
// }

export interface PostDocumentStatic extends Document {
  comments: Document[]
}

export interface StaticProps {
  posts: PrismicDocument[]
}

export interface FeedProps {
  posts: PrismicDocument[]
}
