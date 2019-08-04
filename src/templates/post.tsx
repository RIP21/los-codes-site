import React from 'react'
import { graphql, Link } from 'gatsby'
import { PostTemplate_PostQuery } from './post.generated'
import { oc } from 'ts-optchain'
import Layout from '../components/Layout'

import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'

type PostTemplateProps = {
  html: string
  tags: string[]
  title: string
  date: Date
  helmet?: React.ReactNode
}

export const PostTemplate: React.FC<PostTemplateProps> = ({
  html,
  tags,
  title,
  helmet,
  date,
}) => {
  return (
    <article>
      {helmet || ''}
      <header>
        <h1>{title}</h1>
        <small>{date}</small>
      </header>
      <main dangerouslySetInnerHTML={{ __html: html }} />
      {tags && tags.length ? (
        <footer>
          <h4>Tags</h4>
          <ul>
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </footer>
      ) : null}
    </article>
  )
}

const BlogPost: React.FC<{ data: PostTemplate_PostQuery }> = ({ data }) => {
  const post = oc(data).markdownRemark()

  return (
    <Layout>
      {post && (
        <PostTemplate
          date={post.frontmatter.date}
          html={post.html}
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <title>{`${post.frontmatter.title}`}</title>
              <meta name="description" content={`${post.excerpt}`} />
            </Helmet>
          }
          tags={oc(post).frontmatter.tags([])}
          title={post.frontmatter.title}
        />
      )}
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostTemplate_Post($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
      excerpt
    }
  }
`
