import React from 'react'
import { TalksQuery } from './talks.generated'
import { graphql } from 'gatsby'
import { Layout } from 'src/components/Layout'
import { Link } from 'src/components/Link'
import { Container } from '../components/Container'

const Talks: React.FC<{ data: TalksQuery }> = ({ data }) => {
  const edges = data.allMdx.edges
  return (
    <Layout>
      <Container>
        {edges.map((edge) => {
          const { id, excerpt } = edge.node
          const { title, date, path } = edge?.node?.frontmatter
          return (
            <section key={id}>
              <Link to={`/posts/${path}`}>
                <h2>{title}</h2>
              </Link>
              <small>{date}</small>
              <p>{excerpt}</p>
            </section>
          )
        })}
      </Container>
    </Layout>
  )
}
export default Talks

export const query = graphql`
  query Talks {
    allMdx(
      filter: { frontmatter: { tags: { eq: "talk" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
