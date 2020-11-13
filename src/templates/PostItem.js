import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"
import Container from "../components/Container"
import { getTextColor, getBackground } from "../utils/colors"

const Hero = styled.div`
  position: relative;
  overflow: hidden;
`

const Image = styled(Img)`
  margin: 0;
  padding: 0;
  max-height: 320px;
  opacity: 0.5;
  filter: blur(2px);
  -webkit-filter: blur(2px);
`

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  margin: 0 10%;
  padding: 0.5rem;
  font-size: 4rem;
  font-weight: 200;
  background: ${getBackground};
  color: ${getTextColor};
`

const Meta = styled.p`
  font-wight: 200;
  margin-top: 0;
  padding: 0;
  // display: flex;
  // justify-content: flex-end;
`

const Tag = styled.p`
  font-wight: 200;
  margin: 0;
  padding: 0;
  // display: flex;
  // justify-content: flex-end;
`

const Tags = styled.span`
  margin: 0.2rem;
  font-style: italic;
`

const Summary = styled.p`
  // font-size: 1.3rem;
  font-style: italic;
  font-weight: 300;
`

const Body = styled.p`
  font-weight: 300;
  margin-top: 2rem;
`

const PostItem = ({ data }) => {
  const {
    title,
    slug,
    tags,
    summary,
    body: { json: body },
    featuredImage,
    createdAt,
    updatedAt,
  } = data.contentfulPost

  return (
    <>
      <SEO title={title} />
      <Hero>
        <Image fluid={featuredImage.fluid} alt={title} />
        <Title>{title}</Title>
      </Hero>
      <Container style={{ margin: "3rem 0", padding: "0 20%" }}>
        <Meta>
          <strong>Posted: </strong>
          <em>{createdAt}</em>
          <strong> Updated: </strong>
          <em>{updatedAt}</em>
        </Meta>
        <Tag>
          {tags && tags.length > 0 ? (
            <span>
              Tags:{" "}
              {tags.map((tag, i) => (
                <Tags key={i}>{tag}</Tags>
              ))}
              <br />
            </span>
          ) : null}
        </Tag>
        <Summary style={{ marginTop: "3rem" }}>{summary}</Summary>
        <Body>{documentToReactComponents(body)}</Body>
      </Container>
    </>
  )
}

/* eslint-disable-next-line import/prefer-default-export */
export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }

    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      tags
      summary
      body {
        json
      }
      featuredImage {
        fluid(maxWidth: 1920, quality: 70) {
          ...GatsbyContentfulFluid
        }
      }
      createdAt(fromNow: true)
      updatedAt(fromNow: true)
    }
  }
`

export default PostItem
