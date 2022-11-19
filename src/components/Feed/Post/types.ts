import { CommentsDocument, PostDocument } from '../../../@types/prismic'

interface PostCommentsDocument extends PostDocument {
  comments: CommentsDocument[]
}

export interface PostProps {
  post: PostCommentsDocument
}
