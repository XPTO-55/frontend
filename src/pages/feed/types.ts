import { Document } from 'prismic-javascript/types/documents'
import { CommentsDocument, PostDocument } from '../../@types/prismic'

interface PostCommentsDocument extends PostDocument {
  comments: CommentsDocument[]
}

export interface PostDocumentStatic extends Document {
  comments: Document[]
}

export interface StaticProps {
  posts: Array<PostDocument<string>>
}

export interface FeedProps {
  posts: PostCommentsDocument[]
}
