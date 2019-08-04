import React from 'react'
import { IndexQuery } from './index.generated'
import { graphql, Link } from 'gatsby'
import { oc } from 'ts-optchain'
import Layout from 'src/components/Layout'

const Index: React.FC<{ data: IndexQuery }> = ({ data }) => {
  const edges = oc(data).allMarkdownRemark.edges([])
  return (
    <Layout>
      <main>
        <h1>Hi there! 👋 I'm Andrey Los</h1>
        <p>
          Welcome to my blog, where I write stuff about tech, and, sometimes, my life.
        </p>
        {edges.map(edge => {
          const { id, excerpt } = edge.node
          const { title, date, path } = edge.node.frontmatter
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
      </main>
    </Layout>
  )
}
export default Index

export const query = graphql`
  query Index {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
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
