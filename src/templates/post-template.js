import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const { title, date, author} = data.mdx.frontmatter
  const { body } = data.mdx
  console.log(body)

  return (
    <Layout>
      <section>
        <Link to="/">
          back to all posts
        </Link>
        <div>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <div>
          {body}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
  mdx(frontmatter: { slug: { eq: $slug } }) {
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
      author
      hero_image {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    body
  }
}
`

export default PostTemplate
