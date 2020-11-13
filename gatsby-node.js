const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { errors, data } = await graphql(`
    {
      projects: allContentfulProject(
        sort: { fields: id, order: ASC }
        limit: 1000
      ) {
        edges {
          node {
            title
            slug
          }
        }
      }

      blogs: allContentfulPost(sort: { fields: id, order: ASC }, limit: 1000) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  if (data) {
    const projects = data.projects.edges
    const blogs = data.blogs.edges

    const portfolioItem = path.resolve(`./src/templates/PortfolioItem.js`)
    const postItem = path.resolve(`./src/templates/PostItem.js`)

    projects.forEach((project, index) => {
      const previous =
        index === projects.length - 1 ? null : projects[index + 1].node
      const next = index === 0 ? null : projects[index - 1].node

      createPage({
        path: `portfolio/${project.node.slug}`,
        component: portfolioItem,
        context: {
          slug: project.node.slug,
          previous,
          next,
        },
      })
    })

    blogs.forEach(blog => {
      createPage({
        path: `blog/${blog.node.slug}`,
        component: postItem,
        context: {
          slug: blog.node.slug,
        },
      })
    })
  }
}
