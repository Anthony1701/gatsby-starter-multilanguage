exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const {
      data: {
        allMdx: { edges: posts },
      },
    } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
    `)
  
    posts.forEach(({ node }) => {
      const { slug } = node.frontmatter
      createPage({
        path: `/blog/${slug}`,
        component: require.resolve("./src/templates/post-template.js"),
        context: {
          slug: slug,
        },
      })
    })
  }
  