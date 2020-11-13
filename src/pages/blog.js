import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Container from "../components/Container"
import PgHeading from "../components/PgHeading"
import SEO from "../components/seo"
import Post from "../components/Post"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  // grid-auto-rows: auto;
  margin-bottom: 8rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`

const Blog = ({ data }) => {
  const blogs = data.allContentfulPost.edges

  return (
    <>
      <SEO title="Blog" />
      <Container>
        <PgHeading>__Blog</PgHeading>

        <Grid>
          {blogs &&
            blogs.map(({ node }) => <Post data={node} key={node.slug} />)}
        </Grid>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  {
    allContentfulPost {
      edges {
        node {
          title
          slug
          summary
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          tags
          createdAt(fromNow: true)
          updatedAt(fromNow: true)
        }
      }
    }
  }
`

export default Blog
