import React from "react"
import Layout from "../components/layout"

const BlogPage = () => {
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

  return (
    <Layout>
      <h1>Blogs</h1>
      {blogs.map((blog, index) => (
        <div>
          <h5>
            {index + 1}. {blog.title}
          </h5>
          <p>
            <a href={blog.link}>Read this blog here.</a>
          </p>
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
