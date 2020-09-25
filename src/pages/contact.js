import React from "react"
import styled from "styled-components"
import { FaWhatsapp, FaTelegramPlane, FaSkype } from "react-icons/fa"

import SEO from "../components/seo"
import Container from "../components/Container"
import PgHeading from "../components/PgHeading"
import { getTextColor } from "../utils/colors"

const Email = styled.section`
  h1 {
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 2.3rem;
    }
    @media (max-width: 490px) {
      font-size: 1.5rem;
    }
  }
  p {
    // line-height: 1;
  }
`

const Social = styled.section`
  margin: 2rem 0;
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    margin: 0;
    padding: 0.2rem;
    display: flex;
    align-items: flex-start;
    color: ${getTextColor};
    span {
      margin-right: 1rem;
      font-size: 1.5rem;
      svg {
        fill: ${getTextColor};
      }
    }
  }
`

const contact = () => {
  return (
    <div>
      <SEO title="Contact" />
      <Container>
        <PgHeading>__Contact</PgHeading>
        <Email>
          <h1>santanu@csbarua.com</h1>
          <p>
            Got a question or comment about my work?
            <br />
            Reach out and Let&apos;s talk. I look forward to hearing from you.{" "}
          </p>
          <p>Let&apos;s make something great!</p>
        </Email>
        <Social>
          <h1>Find me on</h1>
          <p>
            <span>
              <FaWhatsapp />
            </span>
            +(880) 1914 207809
          </p>
          <p>
            <span>
              <FaTelegramPlane />
            </span>
            @csbarua
          </p>
          <p>
            <span>
              <FaSkype />
            </span>
            csbarua
          </p>
        </Social>
      </Container>
    </div>
  )
}

export default contact
