import React from 'react'
import { graphql, Link } from 'gatsby'
import { PostTemplate_PostQuery } from './post.generated'
import Content, { HTMLContent } from '../components/Content'
import { Layout } from '../components/Layout'
import format from 'date-fns/format'

import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'

type PostTemplateProps = {
  content: string
  tags?: string[]
  title: string
  date: Date
  helmet?: React.ReactNode
  bodyTransform?: (markdown: string) => string
  contentComponent?: React.ComponentType<{ children: string }>
}

export const PostTemplate: React.FC<PostTemplateProps> = ({
  content,
  tags,
  title,
  helmet,
  date,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content
  return (
    <article>
      {helmet || ''}
      <header>
        <h1>{title}</h1>
        <small>{format(new Date(date), 'MMMM dd, yyyy')}</small>
      </header>
      <PostContent>{content}</PostContent>
      {tags && tags.length ? (
        <footer>
          <h4>Tags</h4>
          <ul>
            {tags.map((tag) => (
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

const Post: React.FC<{ data: PostTemplate_PostQuery }> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      {post && (
        <PostTemplate
          date={post.frontmatter.date}
          content={post.html}
          contentComponent={HTMLContent}
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <title>{`${post.frontmatter.title}`}</title>
              <meta name="description" content={`${post.excerpt}`} />
            </Helmet>
          }
          tags={post.frontmatter.tags ?? []}
          title={post.frontmatter.title}
        />
      )}
    </Layout>
  )
}

export default Post

export const query = graphql`
  query PostTemplate_Post($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        tags
      }
      excerpt
    }
  }
`
