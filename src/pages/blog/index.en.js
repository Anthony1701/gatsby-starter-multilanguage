import * as React from "react"

import { graphql } from "gatsby"

import { getImage } from "gatsby-plugin-image"

import Teaser from "../../components/sections/teaser"

import Layout from "../../components/layout"

export const query = graphql`
query BlogPosts {
  allMdx {
    nodes {
      frontmatter {
        hero_image {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 150
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          alt
        }
        slug
        title
        date
      }
      id
      excerpt(pruneLength: 150)
    }
  }
}
`

const IndexPage = ({ data }) => (

  <Layout>
    <h2>Recent writing</h2>

    {data.allMdx.nodes.map(post => {

      const image = getImage(post.frontmatter.hero_image.image)

      return <Teaser key={post.id} post={post} image={image} />

    })}

  </Layout>

)

export default IndexPage