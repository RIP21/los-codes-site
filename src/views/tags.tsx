import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import {TagsQueryQuery} from "./tags.generated";
import { oc } from 'ts-optchain';

const TagsPage: React.FC<{ data: TagsQueryQuery }> = ({ data }) => {
  const { title } = data.site.siteMetadata
  const group = oc(data).allMarkdownRemark.group([])
  return (
    <Layout>
      <section>
        <Helmet title={`Tags | ${title}`}/>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={oc(tag).fieldValue('')}>
              <Link to={`/tags/${kebabCase(oc(tag).fieldValue(''))}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
