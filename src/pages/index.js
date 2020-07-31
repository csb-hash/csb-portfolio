import React from "react"
import Typed from "react-typed"
import styled from "styled-components"
import Particles from "react-particles-js"
import { Link } from "gatsby"

import Container from "../components/Container"
import SEO from "../components/seo"

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`
const Intro = styled.section`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Headline = styled.h1`
  font-size: 3rem;
  margin: 0;

  .accent {
    color: #e94e1b;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`
const Text = styled.p`
  font-size: 1.3rem;
  max-width: 600px;
  margin: 2rem 0;
`

const IndexPage = () => {
  const params = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#303346",
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "rgba(255,255,255,0.1)",
        },
        polygon: {
          nb_sides: 6,
        },
      },
      opacity: {
        value: 0.1,
        random: true,
        anim: {
          enable: true,
          speed: 0.15985,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 51.3,
        random: true,
        anim: {
          enable: true,
          spped: 1,
          size_min: 40,
          sync: false,
        },
      },
      time_linked: {
        enable: false,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "remove",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
  return (
    <>
      <SEO title="Home" />
      {/* <Background params={params} /> */}
      <Intro>
        <Container>
          <Headline>
            <Typed
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={[
                "I'm <span class='accent'>Santanu</span>.",
                "I'm a <span class='accent'>graphics designer</span>.",
                "I create designs that are <span class='accent'>reflective and expressive</span>.",
              ]}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
              className="typed"
            />
          </Headline>
          <Text>
            As a Graphic Designer based in Dhaka, Bangladesh, I have 10+ years of experience in Brand Identity Design,
            Logo Design, Motion Graphics, etc with a demonstrated history of working across multiple disciplines.
            <br />
            <br />
            <strong>
              <Link to="/contact/">Get in touch</Link>
            </strong>{" "}
            to discuss how we can work together.
          </Text>
        </Container>
      </Intro>
    </>
  )
}

export default IndexPage
