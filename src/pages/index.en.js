import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <h1>
        Congratulations
        <br/>
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <Link to="page2">page 2</Link>
      <Link to="blog">Blog</Link>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
