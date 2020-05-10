import React from 'react'
import { IndexQuery } from './index.generated'
import { graphql } from 'gatsby'
import { Layout } from 'src/components/Layout'
import { Box, Flex } from 'reflexbox/styled-components'
import { H1, Paragraph } from 'src/components/Typography'
import { rem } from 'polished'
import hi from './hi.svg'
import jumbotron from './jumbotron-bg.png'
import { PostPreview } from 'src/components/PostPreview'
import { Container } from 'src/components/Container'

const Index: React.FC<{ data: IndexQuery }> = ({ data }) => {
  const edges = data.allMdx.edges ?? []
  return (
    <Layout>
      <Flex
        as="section"
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          m: 'auto',
          width: '100%',
          height: rem(252),
          boxShadow:
            'inset 0px 10px 16px rgba(0, 0, 0, 0.1), inset 0px 4px 6px rgba(0, 0, 0, 0.06);',
          backgroundImage: `url(${jumbotron})`,
          backgroundSize: 'cover',
          textAlign: 'center',
        }}
      >
        <H1>
          Hi there! <img src={hi} alt="waving hand icon" /> I'm Andrey Los
        </H1>
        <Paragraph mt={2}>
          Welcome to my blog, where I write stuff about tech, and, sometimes, my life.
        </Paragraph>
      </Flex>
      <Container>
        {edges.map((edge) => (
          <PostPreview key={edge.node.id} {...edge.node} />
        ))}
      </Container>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          ...PostPreview_Mdx
        }
      }
    }
  }
`
