import React from "react"
import styled from "styled-components"
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaBehance,
  FaDribbble,
} from "react-icons/fa"
import FooterMenu from "./FooterMenu"

const Foot = styled.footer`
  padding: 0 10%;
  height: 5vh;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }
`

const Copy = styled.div`
  font-weight: 300;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const Footer = () => (
  <Foot>
    <Copy>&copy; {new Date().getFullYear()} | Chowdhury Santanu Barua</Copy>
    <FooterMenu>
      <ul>
        <li>
          <a
            href="https://bd.linkedin.com/in/csbarua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cs.barua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/getcsb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/csbarua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
        </li>
        <li>
          <a
            href="https://www.dribble.com/csbarua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble />
          </a>
        </li>
      </ul>
    </FooterMenu>
  </Foot>
)

export default Footer
