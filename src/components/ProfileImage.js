import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Image = styled(Img)`
  margin: 0;
  margin-left: auto;
  margin-right: 10px;
  padding: 0;
  max-height: 320px;
  border-radius: 8px;

  // @media (max-width: 768px) {
  //   margin: 0 auto;
  // }
`

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "santanu02.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Image
      fluid={data.profileImage.childImageSharp.fluid}
      alt="Profile Image of Santanu"
    />
  )
}

export default ProfileImage
