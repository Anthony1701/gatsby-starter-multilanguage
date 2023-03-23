/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-starter-multilanguage`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
        defaultLayouts: {
          // posts: require.resolve("./src/templates/post-template.js"),
          // default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": "./blog/"
      },
      __key: "posts"
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'cs',
        useLangKeyLayout: false,
        prefixDefault: false,
        }
    },
  ]
}