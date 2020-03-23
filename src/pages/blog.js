import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            title
            publishedAt(formatString: "MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges.map(e => ({
    html: e.node.html,
    title: e.node.title,
    date: e.node.publishedAt,
    slug: e.node.slug,
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
