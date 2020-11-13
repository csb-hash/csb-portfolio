import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Container from "../components/Container"
import PgHeading from "../components/PgHeading"
import Button from "../components/Button"
import ProfileImage from "../components/ProfileImage"

const Section = styled.section`
  min-height: 60vh;
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-gap: 2rem;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    .about {
      grid-row: 2;
      margin: 0 0 4rem 0;
    }
  }
`

const About = () => (
  <div>
    <SEO title="About" />
    <Container>
      <PgHeading>__About</PgHeading>
      <Section>
        <div className="about">
          <p>
            Graphic designer, born and raised in Chittagong and now based id
            Dhaka Bangladesh. I simply love design and open to fresh ideas.
          </p>
          <p>Design Grad with a BA in Graphic design and Multimedia</p>
          <p>
            Currently working in <strong>Magnito Digital</strong> -a top digital
            marketing agency in the country. Prior to that I worked at{" "}
            <em>ActionAid Bangladesh</em>, <em>World Bank</em>, <em>Hootum</em>,{" "}
            <em>Shadowlit Studios</em>.
          </p>
          <p>
            A son, a brother and a loving husband. I like sugar free toast, and
            I cannot resist myself when I see &ldquo;shingara!!&rdquo;
          </p>
          <Button bottom>Download CV</Button>
        </div>
        <div>
          <ProfileImage />
        </div>
      </Section>
    </Container>
  </div>
)

export default About
