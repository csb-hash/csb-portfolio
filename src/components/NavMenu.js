import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

// import colors from "../utils/colors"

const Nav = styled.nav`
  background-color: transparent;
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
    opacity: 0;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`

const NavListItem = styled.li`
  margin: 0 0 0 1rem;
  line-height: 2;

  a {
    padding: 4px 10px;

    &:active {
      font-weight: 500;
    }

    &:active,
    &:hover,
    &:focus {
      background-color: #ffc400;
      color: #333333;
      border-radius: 4px;
    }
  }
`

const NavMenu = () => {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <Link to="/about">About</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/works">Works</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/blog">Blog</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/contact">Contact</Link>
        </NavListItem>
      </NavList>
    </Nav>
  )
}

export default NavMenu
