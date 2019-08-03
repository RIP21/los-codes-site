import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'
import { CreatePages_MarkdownRemarkQuery } from './createPages.generated'
import { oc } from 'ts-optchain'

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = resolve(`src/templates/post.tsx`)
  // language=GraphQL
  const result = await graphql<CreatePages_MarkdownRemarkQuery>(`
    query createPages_MarkdownRemark {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.log(result.errors)
    throw new Error('Things broke, see console output above')
  }
  oc(result)
    .data.allMarkdownRemark.edges([])
    .forEach(({ node }) => {
      createPage({
        path: oc(node).frontmatter.path('404'),
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
}
