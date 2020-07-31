import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaFacebook, FaInstagram, FaBehance, FaYoutube, FaDribbble, FaPinterest } from "react-icons/fa"
import Menu from "./Menu"

const Foot = styled.footer`
  padding: 0 3% 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media print {
    display: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const Footer = () => (
  <Foot>
    <div>&copy; {new Date().getFullYear()} Chowdhury Santanu Barua</div>
    <nav>
      <Menu>
        <li>
          <a href="https://bd.linkedin.com/in/csbarua" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/cs.barua/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/getcsb" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/csbarua" target="_blank" rel="noopener noreferrer">
            <FaBehance />
          </a>
        </li>
        <li>
          <a href="https://www.dribble.com/csbarua" target="_blank" rel="noopener noreferrer">
            <FaDribbble />
          </a>
        </li>
        <li>
          <a href="https:www.pinterest.com/csbarua" target="_blank" rel="noopener noreferrer">
            <FaPinterest />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/csbarua" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </li>
      </Menu>
    </nav>
  </Foot>
)

export default Footer
