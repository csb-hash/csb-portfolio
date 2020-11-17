import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import Container from "../components/Container"
import SEO from "../components/seo"

// const Hero = styled.div`
//   position: relative;
//   overflow: hidden;
// `

const Content = styled(Container)`
  margin: 4rem auto;

  @media (min-width: 768px) {
    margin: 4rem auto;
    padding: 0 15%;
  }
`

const Image = styled(Img)`
  margin: 0;
  padding: 0;
  max-height: 360px;
  // opacity: 0.5;
  // filter: blur(2px);
  // -webkit-filter: blur(2px);
`

const Title = styled.h1`
  font-size: 4rem;
  // font-weight: 200;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-width: 490px) {
    font-weight: 1.5rem;
  }
`

const Meta = styled.p`
  font-wight: 200;
  margin-top: 0;
  padding: 0;
  display: flex;
  align-items: center;
  // justify-content: space-between;
`

const Author = styled.div``

const Avatar = styled(Img)`
  margin: 0 1rem 0 0;
  padding: 0;
  height: 64px;
  width: 64px;
  border-radius: 50%;
`

const Date = styled.div`
  em {
    margin: 0 0.5rem;
  }
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
  border-left: 3px solid;
  border-right: 3px solid;
  border-radius: 12px;
  margin: 2.5rem 0;
  padding: 2rem;
  font-style: italic;
  font-weight: 300;
`

const Text = ({ children }) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
    [MARKS.ITALIC]: text => <em>{text}</em>,
    [MARKS.UNDERLINE]: text => <span className="underline">{text}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

const Body = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 2rem;

  p {
    line-height: 1.8;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  .underline {
    text-decoration: underline;
  }
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

  const { author } = data.site.siteMetadata
  const { avatar } = data

  return (
    <>
      <SEO title={title} />
      <Container>
        <Title>{title}</Title>
        <Meta>
          <Avatar
            fluid={avatar.childImageSharp.fluid}
            alt="Avatar of Santanu"
          />
          <div>
            <Author>{author}</Author>
            <Date>
              Posted: <em>{createdAt}</em> {" / "}
              Updated: <em>{updatedAt}</em>
            </Date>
          </div>
        </Meta>
        <Image fluid={featuredImage.fluid} alt={title} />
      </Container>
      <Content>
        <Summary>{summary}</Summary>
        <Body>{documentToReactComponents(body, options)}</Body>
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
      </Content>
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

    avatar: file(relativePath: { eq: "santanu02.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
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
