import { Actions } from 'gatsby'

export const createSchemaCustomization = ({ actions }: { actions: Actions }) => {
  const { createTypes } = actions
  const typeDefs = `

    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }

    type MdxFrontmatter {
      date: Date! @dateformat
      path: String!
      tags: [String!]!
      thumbnail: String!
      title: String!
    }

    type SiteSiteMetadata {
      title: String!
    }

    type Site implements Node {
      siteMetadata: SiteSiteMetadata!
    }
  `
  createTypes(typeDefs)
}
