import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges.map(e => ({
    html: e.node.html,
    title: e.node.frontmatter.title,
    date: e.node.frontmatter.date,
    slug: e.node.fields.slug,
  }))

  console.log("POSTS", posts)
  return (
    <Layout>
      <h1>Blogs</h1>
      <ol className={blogStyles.posts}>
        {posts.map((post, index) => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
