import { ImageAttributes } from "./media"

type UserAttributes = {
  username: string,
  email: string,
}

export interface StrapiData<T = unknown> {
  id: number,
  attributes: T
}

export type StrapiMeta = {
  pagination: {
    page: number,
    pageSize: number,
    pageCount: number,
    total: 1
  }
}

export type Article = {
  slug: string,
  content: string,
  title: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
  locale: string,
  banner: {
    data: StrapiData<ImageAttributes>
  }
}

export type Category = {
  name: string,
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
}

export type Post = {
  content: string,
  title: string,
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
  banner: {
    data: StrapiData<ImageAttributes>
  },
  user: {
    data: StrapiData<UserAttributes>
  }
}

export interface ResponseData<T = unknown> {
  data: StrapiData<T>[],
  meta: StrapiMeta
}