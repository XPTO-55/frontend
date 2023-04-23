import { Post, StrapiData } from "../../lib/types"
export interface StaticProps {
  posts: StrapiData<Post>[]
}

export interface FeedProps {
  posts: StrapiData<Post>[]
}
