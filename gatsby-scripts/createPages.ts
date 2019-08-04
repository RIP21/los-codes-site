import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'
import { CreatePages_MarkdownRemarkQuery } from './createPages.generated'
import { oc } from 'ts-optchain'
import uniq from 'lodash/uniq'
import kebabCase from 'lodash/kebabCase'

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
              tags
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

  const posts = oc(result).data.allMarkdownRemark.edges([])

  posts.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.frontmatter.path}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.path
      }, // additional data can be passed via context
    })
  })
  // Tag pages:
  let tags = [] as string[]
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
    tags = tags.concat(oc(edge).node.frontmatter.tags([]))
  })
  // Eliminate duplicate tags
  tags = uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${kebabCase(tag)}/`
    createPage({
      path: tagPath,
      component: resolve(`src/templates/tags.tsx`),
      context: {
        tag,
      },
    })
  })
}
