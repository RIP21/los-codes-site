import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { Layout } from 'src/components/Layout'
import { TagsQueryQuery } from './tags.generated'
import { Container } from '../components/Container'

const TagsPage: React.FC<{ data: TagsQueryQuery }> = ({ data }) => {
  const { title } = data?.site?.siteMetadata
  const group = data?.allMdx?.group ?? []
  return (
    <Layout>
      <Container>
        <Helmet title={`Tags | ${title}`} />
        <h1>Tags</h1>
        <ul>
          {group.map((tag) => (
            <li key={tag?.fieldValue ?? ''}>
              <Link to={`/tags/${kebabCase(tag?.fieldValue ?? '')}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
