import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import { Document } from 'prismic-javascript/types/documents'

import sm from './sm.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc: Document) => {
  if (doc.type === 'article') {
    return `/blog/articles/${doc.uid}`
  }

  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  return '/'
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = ({ previewData, req, ...config }: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config)

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}
