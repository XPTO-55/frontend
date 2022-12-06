import { ICommentsResponse } from '../../../../services/types'
export interface InputCommentProps {
  setComments: React.Dispatch<React.SetStateAction<ICommentsResponse[]>>
  postId: string
}
