import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { TagPageQuery, TagPageQueryVariables } from './tags.generated'
import Layout from '../components/Layout'
import { oc } from 'ts-optchain';

const TagRoute: React.FC<{ data: TagPageQuery; pageContext: TagPageQueryVariables }> = ({
  data,
  pageContext,
}) => {
  const allMd = oc(data).allMarkdownRemark
  const posts = allMd.edges([])
  const tag = pageContext.tag
  const title = data.site.siteMetadata.title
  const totalCount = allMd.totalCount(0)
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`

  return (
    <Layout>
      <section>
        <Helmet title={`${tag} | ${title}`} />
        <h3>{tagHeader}</h3>
        <ul>
          {posts.map(post => (
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
      </section>
    </Layout>
  )
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
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
