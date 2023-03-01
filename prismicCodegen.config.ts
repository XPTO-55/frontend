import type { Config } from 'prismic-ts-codegen'

const config: Config = {
  output: './src/@types/prismic.ts',
  models: ['./prismic/customtypes/**/index.json', './prismic/slices/**/model.json']
}

export default config
