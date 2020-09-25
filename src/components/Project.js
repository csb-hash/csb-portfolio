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
  background-color: #7c37ad44;

  margin: 0;
  padding: 10px;
  font-weight: 700;
  color: #fffff0;
`

const Project = ({ data: { title, slug, featuredImage } }) => (
  <Item>
    <Link to={`/portfolio/${slug}`}>
      <Img fluid={featuredImage.fluid} />
      <Overlay>{title}</Overlay>
    </Link>
  </Item>
)

export default Project
