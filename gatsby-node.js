const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

/**
 * function for creating dynamic pages
 */

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pathToBlogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  res.data.allMarkdownRemark.edges.forEach(edge => {
    console.log("module.exports.createPages -> edge", edge)

    createPage({
      path: `/blog/${edge.node.fields.slug}`,
      component: pathToBlogTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
