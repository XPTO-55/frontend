import { Document } from 'prismic-javascript/types/documents'
import { CommentsDocument, PostDocument } from '../../@types/prismic'

interface PostCommentsDocument extends PostDocument {
  comments: CommentsDocument[]
}

export interface PostDocumentStatic extends Document {
  comments: CommentsDocument[]
}

export interface StaticProps {
  posts: PostDocumentStatic[]
}

export interface FeedProps {
  posts: PostCommentsDocument[]
}
