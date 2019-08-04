export const createResolvers = ({ createResolvers }: { createResolvers: any }) => {
  createResolvers({
    MarkdownRemark: {
      html: {
        type: 'String!',
      },
      timeToRead: {
        type: 'Int!',
      },
      excerpt: {
        type: 'String!',
      },
    },
  })
}
