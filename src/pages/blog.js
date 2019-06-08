import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  // static data of blogs.
  const blogs = [
    {
      title: "Understanding Redux, What ? When? Why ?",
      link:
        "https://medium.com/@rehansattar/understanding-redux-what-when-why-741178293ac1",
    },
    {
      title: "ROAD MAP OF A FRONT END DEVELOPER, What I have to learn?",
      link:
        "https://medium.com/@rehansattar/road-map-of-a-front-end-developer-what-i-have-to-learn-892e67fcd3b9",
    },
  ]

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
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges.map(e => ({
    html: e.node.html,
    title: e.node.frontmatter.title,
    date: e.node.frontmatter.date,
  }))

  console.log("POSTS", posts)
  return (
    <Layout>
      <h1>Blogs</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h5>
            {index + 1}. {blog.title}
          </h5>
          <p>
            <a href={blog.link}>Read this blog here.</a>
          </p>
        </div>
      ))}

      <h1>Posts</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h5>
            {index + 1}. {post.title}
          </h5>
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
