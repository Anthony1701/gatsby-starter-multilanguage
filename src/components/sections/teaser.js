import * as React from "react"
import { Link } from "gatsby"

export default function Teaser({ post, image }) {

    return (
  
      <article>
  
        // Image rendering code omitted for brevity
  
        <div>
  
          <h3>
  
            <Link to={`${post.frontmatter.slug}`}>
  
              {post.frontmatter.title}
  
            </Link>
  
          </h3>
  
          <p>
  
            Published {post.frontmatter.published_at}
  
          </p>
  
          <p>{post.excerpt}</p>
  
        </div>
  
      </article>
  
    )
  
  }