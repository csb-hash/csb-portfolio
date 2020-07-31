import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Container from "../components/Container"
import Project from "../components/Project"

const Centered = styled.p`
  margin-top: 2rem;
  text-align: center;
`

const Grid = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const Portfolio = ({ data }) => {
  const projects = data.allContentfulProject.edges
  console.log(projects)
  return (
    <>
      <SEO title="portfolio" />
      <Container>
        <h2>Portfolio</h2>
        <Grid>
          {projects &&
            projects.map(({ node: { title, slug, featuredImage, category } }) => (
              <Project
                data={{
                  title,
                  slug,
                  featuredImage,
                  category,
                }}
                key={slug}
              />
            ))}
        </Grid>
        <Centered>
          This is a small selection of the hundreds of projects I worked on.
          <br />
          Want to see more?{" "}
          <Link to="/contact/">
            <strong>Get in touch</strong>
          </Link>{" "}
          and let me know what you@apos;re looking for, so I can send you a more comprehensive portfolio.
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

export default Portfolio
