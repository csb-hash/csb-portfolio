import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Container from "../components/Container"
// import Button from "../components/Button"

const Image = styled(Img)`
  margin-top: 2rem;
`

const Pagination = styled.ul`
  list-style: none;
  margin: 3rem 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    a {
      color: #333;
      text-decoration: none;
      transition: 0.2s;
      &:hover {
        color: #999;
      }
    }
  }
`

const PortfolioItem = ({ data, pageContext }) => {
  const {
    title,
    client,
    description: { description },
    featuredImage,
    category,
    platform,
    when,
  } = data.contentfulProject
  const { previous, next } = pageContext

  return (
    <>
      <SEO title={title} description={description} />
      <Image fluid={featuredImage.fluid} alt={title} style={{ maxHeight: "400px" }} />
      <Container>
        <h2>{title}</h2>
        <h3>
          {category} - {platform}
        </h3>
        <p>
          <em>for</em> {client}
        </p>
        <small>{when}</small>
        <Pagination>
          {previous && (
            <li>
              <Link to={`/portfolio/${previous.slug}`} rel="prev">
                &laquo; {previous.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={`/portfolio/${next.slug}`} rel="prev">
                {next.title} &raquo;
              </Link>
            </li>
          )}
        </Pagination>
      </Container>
    </>
  )
}

/* eslint-disable-next-line import/prefer-default-export */
export const pageQuery = graphql`
  query PortfolioItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }

    contentfulProject(slug: { eq: $slug }) {
      title
      client
      category
      platform
      description {
        description
      }
      featuredImage {
        fluid(maxWidth: 1920, quality: 70) {
          ...GatsbyContentfulFluid
        }
      }
      when
    }
  }
`

export default PortfolioItem
