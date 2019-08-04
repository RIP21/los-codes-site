export const createResolvers = ({ createResolvers }: { createResolvers: any }) => {
  createResolvers({
    Query: {
      site: {
        type: 'Site!'
      }
    },
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
