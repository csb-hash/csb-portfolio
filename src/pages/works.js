import React, { useState } from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Container from "../components/Container"
import PgHeading from "../components/PgHeading"
import Project from "../components/Project"
import Filter from "../components/Filter"

const Centered = styled.div`
  margin: 3rem 0 1rem 0;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`

const Works = ({ data }) => {
  const [filter, setFilter] = useState("All")

  const projects = data.allContentfulProject.edges
  const categories = ["All"]

  if (projects) {
    projects.forEach(project => {
      const { node } = project

      categories.push(node.category)
    })
  }

  const filteredProjects = projects.filter(project =>
    filter === "All" ? project : project.node.category === filter
  )

  return (
    <>
      <SEO title="Works" />
      <Container>
        <PgHeading>__Works</PgHeading>
        <Centered>
          <p>
            This is a small selection of the hundreds of projects I worked on.
          </p>
          <div>
            {categories.map(cat => (
              <Filter
                key={cat}
                name={cat}
                setFilter={setFilter}
                currentFilter={filter}
              />
            ))}
          </div>
        </Centered>
        <Grid>
          {filteredProjects &&
            filteredProjects.map(({ node: { title, slug, featuredImage } }) => (
              <Project
                data={{
                  title,
                  slug,
                  featuredImage,
                }}
                key={slug}
              />
            ))}
        </Grid>
        <Centered>
          Want to see more?{" "}
          <Link to="/contact/">
            <strong>Get in touch</strong>
          </Link>{" "}
          and let me know what you&apos;re looking for, so I can send you a more
          comprehensive Works.
        </Centered>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query allContentfulProject {
    allContentfulProject {
      edges {
        node {
          title
          slug
          category
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Works
