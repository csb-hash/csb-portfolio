import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

const Card = styled.div`
  border-radius: 8px;
  // box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 540px;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
`

const Feature = styled.div`
  max-height: 220px;
`

const Image = styled(Img)`
  margin: 0;
  padding: 0;
  max-height: 220px;
  border-radius: 8px 8px 0 0;
`
const Content = styled.div`
  margin: 0;
  padding: 0.5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 2rem;
`
const Summary = styled.p`
  font-wight: 300;
  flex: 1;
`

const Meta = styled.p`
  font-wight: 300;
  font-size: 0.9rem;
  margin-top: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;

  em {
    margin-left: 12px;
  }
`

const Tag = styled.p`
  font-wight: 200;
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`

const Tags = styled.span`
  margin: 0.2rem;
  font-style: italic;
`

const Post = ({
  data: { title, slug, summary, featuredImage, createdAt, tags },
}) => {
  return (
    <Card>
      <Feature>
        <Image fluid={featuredImage.fluid} alt={title} />
      </Feature>
      <Content>
        <Link to={`/blog/${slug}`}>
          <Title>{title}</Title>
        </Link>
        <Summary>{summary}</Summary>
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
        <Meta>
          Posted: <em>{createdAt}</em>
        </Meta>
      </Content>
    </Card>
  )
}

export default Post
