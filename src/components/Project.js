import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

const Item = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  img {
    transition: transform 0.3s ease !important;
  }
  &:hover img {
    transform: scale(1.1);
  }
  &:hover div {
    opacity: 1;
  }
`

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  // transform: translateY(-20%);
  text-shadow: hoff voff blur #000;
  pointer-events: none;
  opacity: 0;
  background-color: #6b8e23;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div {
    margin: 0;
    padding: 10px;
    color: #eee;
  }
`

const Project = ({ data: { title, slug, featuredImage, category } }) => (
  <Item>
    <Link to={`/portfolio/${slug}`}>
      <Img fluid={featuredImage.fluid} />
      <Overlay>
        <div>{title}</div>
        <div>
          <small>{category}</small>
        </div>
      </Overlay>
    </Link>
  </Item>
)

export default Project
