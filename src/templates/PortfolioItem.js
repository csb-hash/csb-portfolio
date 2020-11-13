import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from "../components/seo"
import Container from "../components/Container"
// import Button from "../components/Button"

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 200;
`

const Summary = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
`

const Description = styled.p`
  font-weight: 300;
  margin-top: 2rem;
`

const About = styled.div`
  margin-top: 2rem;

  p {
    display: grid;
    grid-template-columns: 100px 1fr;

    strong {
      font-weight: 400;
    }
  }
`

const Image = styled(Img)`
  margin: 0;
  padding: 0;
  max-height: 580px;
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
    description: { json: description },
    featuredImage,
    category,
    platform,
    when,
  } = data.contentfulProject
  const { previous, next } = pageContext

  return (
    <>
      <SEO title={title} description={description} />
      <Image fluid={featuredImage.fluid} alt={title} />
      <Container narrow>
        <Title>{title}</Title>
        <Summary>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.{" "}
        </Summary>
        <Description>{documentToReactComponents(description)}</Description>
        <About>
          <p>
            <div>
              <strong>Client</strong>
            </div>
            <div>{client}</div>
          </p>
          <p>
            <div>
              <strong>Date</strong>
            </div>
            <div>{when}</div>
          </p>
          <p>
            <div>
              <strong>Category</strong>
            </div>
            <div>{category}</div>
          </p>
          <p>
            <div>
              <strong>Platform</strong>
            </div>
            <div>{platform}</div>
          </p>
        </About>
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
        json
      }
      featuredImage {
        fluid(maxWidth: 1920, quality: 70) {
          ...GatsbyContentfulFluid
        }
      }
      when(formatString: "MMMM Do YYYY")
    }
  }
`

export default PortfolioItem
