import React from 'react'
import { graphql } from 'gatsby'
import { PostTemplate_PostQuery } from './post.generated'
import { oc } from 'ts-optchain'
import Layout from '../components/Layout'

const Template: React.FC<{ data: PostTemplate_PostQuery }> = ({ data }) => {
  const { title, date } = oc(data).markdownRemark.frontmatter
  const html = oc(data).markdownRemark.html('')
  return (
    <Layout>
      <div className="blog-post">
        <h1>{title("")}</h1>
        <h2>{date("")}</h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query PostTemplate_Post($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
