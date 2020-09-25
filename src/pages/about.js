import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Container from "../components/Container"
import PgHeading from "../components/PgHeading"
import Button from "../components/Button"
import ProfileImage from "../components/ProfileImage"

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 2fr 1fr;
    div {
      // grid-row: 2;
      margin-bottom: 4rem;
    }
    // line-height: 1;
  }
`

// const WithSidebar = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;

//   main {
//     width: 70%;
//     min-width: 280px;
//     flex-grow: 1;
//   }

//   aside {
//     width: 30%;
//     min-width: 280px;

//     ul {
//       list-style: none;
//       margin: 0;
//       padding: 0;

//       li {
//         margin-bottom: 0.5rem;
//       }
//     }

//     h2:first-of-type {
//       margin: 0 0.5rem 1rem 0;
//       display: inline-block;
//       font-size: 1rem;
//     }
//   }
// `

const About = () => (
  <div>
    <SEO title="About" />
    <Container>
      <PgHeading>__About</PgHeading>
      <Section>
        <div>
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
          <Button>Download CV</Button>
        </div>
        <ProfileImage />
      </Section>
    </Container>
  </div>
)

export default About
