import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h2>Welcome</h2>
      <p>
        I'm Rehan Sattar, Junior Full Stack software developer, living in
        Karachi, Pakistan.
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
