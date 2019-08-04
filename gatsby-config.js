/**
 * @typedef {import('gatsby').GatsbyConfig} GatsbyConfig
 */

/**
 * @type {GatsbyConfig}
 */
const config = {
  siteMetadata: {
    title: 'A.Los Codes',
    description:
      'Welcome to my blog, where I write stuff about tech, and, sometimes, my life.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'static',
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/views`,
        ignore: [`**/*.generated.(js|ts)?(x)`],
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/index.ts`
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}

module.exports = config
