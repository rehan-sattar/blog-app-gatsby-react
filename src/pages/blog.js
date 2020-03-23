import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

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
      <ol>
        {posts.map((post, index) => (
          <li>
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
