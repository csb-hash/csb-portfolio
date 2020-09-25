import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Container from "../components/Container"
import SEO from "../components/seo"
import Button from "../components/Button"

const Intro = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  @media (max-width: 768px) {
    min-height: 75vh;
  }
`

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin: 0;

  span {
    color: #ffab00;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`
const Text = styled.p`
  // line-height: 2;
  font-size: 1rem;
  max-width: 600px;
  margin: 2rem 0 5rem 0;
`

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Intro>
        <Container>
          <Headline>
            Hi there! <br />
            I&apos;m <span>Santanu</span>, a Graphic Designer.
          </Headline>
          <Text>
            Based in Dhaka, Bangladesh, I have 10+ years of experience in Brand
            Identity Design, Logo Design, Motion Graphics, etc with a
            demonstrated history of working across multiple disciplines.
            <br />
            <br />
            <strong>
              <Link to="/contact/">Get in touch</Link>
            </strong>{" "}
            to discuss how we can work together.
            <br />
            <br />
            <Button href="/works">View My Works</Button>
          </Text>
        </Container>
      </Intro>
    </>
  )
}

export default IndexPage
