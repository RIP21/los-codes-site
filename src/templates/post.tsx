import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { PostTemplate_PostQuery } from './post.generated'
import Helmet from 'react-helmet'
import { Box, Flex } from 'reflexbox/styled-components'
import { rem } from 'polished'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout } from '../components/Layout'
import { H2, Paragraph, H3, H1, H4, H5 } from '../components/Typography'
import { Link } from '../components/Link'
import { Container } from 'src/components/Container'

const Post: React.FC<{ data: PostTemplate_PostQuery }> = ({ data }) => {
  if (data.mdx) {
    const { frontmatter, body, excerpt } = data.mdx
    const { date, tags, title, thumbnail } = frontmatter
    return (
      <Layout>
        <Helmet titleTemplate="%s | Blog">
          <title>{`${title}`}</title>
          <meta name="description" content={`${excerpt}`} />
        </Helmet>
        <Box
          sx={{
            width: '100%',
            height: [rem(352), rem(704)],
            background: `url(${thumbnail}) center`,
            backgroundSize: 'cover',
          }}
        />
        <Container>
          <Box as="article" mt={2}>
            <Box as="header" my={1}>
              <Paragraph as="small" fontSize={0} color="mutedText">
                {date}{' '}
                {tags?.map((tag, index) => (
                  <Fragment key={tag}>
                    <Link
                      to={`/tags/${tag}`}
                      sx={{
                        fontSize: 0,
                        textDecoration: 'underline',
                      }}
                    >
                      {tag}
                    </Link>
                    {index + 1 === tags.length ? '' : ', '}
                  </Fragment>
                ))}
              </Paragraph>
              <H1
                style={{
                  marginTop: '0px',
                }}
              >
                {title}
              </H1>
              <MDXProvider
                components={{
                  h1: H1,
                  h2: H2,
                  h3: H3,
                  h4: H4,
                  h5: H5,
                  p: Paragraph,
                }}
              >
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </Box>
          </Box>
        </Container>
      </Layout>
    )
  }
  return null
}

export default Post

export const query = graphql`
  fragment Post_Mdx on Mdx {
    frontmatter {
      title
      thumbnail
      date(formatString: "MMMM D, YYYY HH:ss")
      tags
    }
    body
    excerpt
  }

  query PostTemplate_Post($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      ...Post_Mdx
    }
  }
`
