import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { TagsQuery, TagsQueryVariables } from './tags.generated'
import { Layout } from 'src/components/Layout'
import { Box } from 'reflexbox/styled-components'
import { Container } from '../components/Container'

const Tags: React.FC<{ data: TagsQuery; pageContext: TagsQueryVariables }> = ({
  data,
  pageContext,
}) => {
  const allMd = data?.allMdx
  const posts = allMd.edges ?? []
  const tag = pageContext.tag
  const title = data.site.siteMetadata.title
  const totalCount = allMd.totalCount ?? 0
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`

  return (
    <Layout>
      <Container>
        <Helmet title={`${tag} | ${title}`} />
        <h3>{tagHeader}</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.node.frontmatter.path}>
              <Link to={`/posts/${post.node.frontmatter.path}`}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
        <p>
          <Link to="/tags/">Browse all tags</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query Tags($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
