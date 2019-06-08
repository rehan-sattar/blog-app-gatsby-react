import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return <h6>Created by {data.site.siteMetadata.author}. &copy;2019 </h6>
}

export default Footer
