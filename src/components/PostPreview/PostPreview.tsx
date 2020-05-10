import React, { Fragment } from 'react'
import { PostPreview_MdxFragment } from './PostPreview.generated'
import { Box } from 'reflexbox/styled-components'
import { rem } from 'polished'
import { H1, H2, Paragraph } from '../Typography'
import { Link } from '../Link'
import { graphql } from 'gatsby'

const ANIMATION_TIME = '350ms'
export const PostPreview: React.FC<PostPreview_MdxFragment> = ({
  id,
  excerpt,
  timeToRead,
  frontmatter,
}) => {
  const { title, date, path, thumbnail, tags } = frontmatter
  const postPath = `/posts/${path}`
  return (
    <Box as="article" mt={2} key={id}>
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
        <Link
          to={postPath}
          sx={{
            textDecoration: 'none',
          }}
        >
          <H2>{title}</H2>
        </Link>
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          maxWidth: 'container',
        }}
      >
        <Link
          to={postPath}
          sx={{
            textDecoration: 'none',
          }}
        >
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
                userSelect: 'none',
                transition: `opacity ${ANIMATION_TIME}, bottom ${ANIMATION_TIME}, color 250ms`,
              }}
            >
              {timeToRead} minutes to read{' '}
            </H1>
          </Box>
        </Link>
      </Box>
      <Paragraph>
        {excerpt}
        <Link to={postPath}>Read more</Link>
      </Paragraph>
    </Box>
  )
}

export const fragment = graphql`
  fragment PostPreview_Mdx on Mdx {
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
`
