const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const portfolioItem = path.resolve(`./src/templates/PortfolioItem.js`)

  const { errors, data } = await graphql(`
    query allContentfulProject {
      allContentfulProject(sort: { fields: id, order: ASC }, limit: 1000) {
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
    const projects = data.allContentfulProject.edges

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
  }
}
