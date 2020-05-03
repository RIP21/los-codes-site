import React from 'react'
import { IndexQuery, PostPreview_MarkdownRemarkFragment } from './index.generated'
import { graphql } from 'gatsby'
import { Layout } from 'src/components/Layout'
import { Box, Flex } from 'reflexbox/styled-components'
import { H1, Paragraph, H2 } from 'src/components/Typography'
import { Link } from 'src/components/Link'
import { rem } from 'polished'
import hi from './hi.svg'
import jumbotron from './jumbotron-bg.png'

const ANIMATION_TIME = '350ms'

const PostPreview: React.FC<PostPreview_MarkdownRemarkFragment> = (node) => {
  const { id, excerpt, timeToRead } = node
  const { title, date, path, thumbnail, tags } = node.frontmatter
  const postPath = `/posts/${path}`
  return (
    <Box as="section" mt={2} key={id}>
      <Paragraph as="small" fontSize={0} color="mutedText">
        {date}{' '}
        {tags?.map((tag, index) => (
          <>
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
          </>
        ))}
      </Paragraph>
      <Link to={postPath}>
        <H2 my={1}>{title}</H2>
      </Link>
      <Box
        sx={{
          overflow: 'hidden',
          width: 'container',
        }}
      >
        <Link to={postPath}>
          <Box
            sx={{
              width: '100%',
              height: rem(296),
              position: 'relative',
              background: `url(${thumbnail}) center`,
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: `transform ${ANIMATION_TIME}`,
              transform: 'scale(1.0)',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                opacity: '0',
                background: 'rgba(196, 99, 22, 0.0)',
                transition: `opacity ${ANIMATION_TIME}, background ${ANIMATION_TIME}`,
              },
              '&:hover::before': {
                opacity: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'background',
                background: 'rgba(196, 99, 22, 0.64)',
              },
              '&:hover h1': {
                color: 'background',
                bottom: '0px',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5);',
              },
            }}
          >
            <H1
              sx={{
                position: 'relative',
                bottom: '20px',
                color: 'transparent',
                transition: `opacity ${ANIMATION_TIME}, bottom ${ANIMATION_TIME}, color 250ms`,
              }}
            >
              {timeToRead} minutes to read{' '}
            </H1>
          </Box>
        </Link>
      </Box>
      <Paragraph>{excerpt}</Paragraph>
    </Box>
  )
}

const Index: React.FC<{ data: IndexQuery }> = ({ data }) => {
  const edges = data.allMarkdownRemark.edges ?? []
  return (
    <Layout>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{
          m: 'auto',
          width: '100%',
          height: rem(252),
          boxShadow:
            'inset 0px 10px 16px rgba(0, 0, 0, 0.1), inset 0px 4px 6px rgba(0, 0, 0, 0.06);',
          backgroundImage: `url(${jumbotron})`,
          backgroundSize: 'cover',
        }}
      >
        <H1>
          Hi there! <img src={hi} alt="waving hand icon" /> I'm Andrey Los
        </H1>
        <Paragraph mt={2}>
          Welcome to my blog, where I write stuff about tech, and, sometimes, my life.
        </Paragraph>
      </Flex>
      <Flex as="main" justifyContent="center">
        <Box width="container" px={2}>
          {edges.map((edge) => {
            return <PostPreview {...edge.node} />
          })}
        </Box>
      </Flex>
    </Layout>
  )
}
export default Index

export const query = graphql`
  fragment PostPreview_MarkdownRemark on MarkdownRemark {
    id
    frontmatter {
      path
      title
      thumbnail
      date(formatString: "MMMM D, YYYY HH:ss")
      tags
    }
    excerpt(pruneLength: 300)
    timeToRead
  }

  query Index {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          ...PostPreview_MarkdownRemark
        }
      }
    }
  }
`
