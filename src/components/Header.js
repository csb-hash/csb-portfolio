import { Link } from "gatsby"
import { motion, useCycle } from "framer-motion"
import React, { useRef } from "react"
import styled from "styled-components"
import useDimensions from "../hooks/useDimensions"
import { getTextColor, getBackground } from "../utils/colors"
import Logo from "./Logo"
import MenuToggle from "./MenuToggle"
import Navigation from "./Navigation"
import NavMenu from "./NavMenu"
import ThemeToggle from "./ThemeToggle"

const sidebar = {
  open: (height = 1080) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(0px at 40px 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const HeaderBar = styled.header`
  // position: fixed;
  width: 100%;
  // top: 0;
  height: 15vh;
  overflow: hidden;
  padding: 0.5rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  // box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    justify-content: center;
  }
`
const Toggler = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: auto;
  opacity: 0;
  z-index: 1;

  @media (max-width: 768px) {
    opacity: 1;
  }
`

const Background = styled(motion.div).attrs(() => ({
  initial: "closed",
  sidebar,
}))`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: ${getBackground};
`

const ToggleMode = styled(ThemeToggle)`
  position: absolute;
  right: 0;
`

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <HeaderBar>
      <Toggler
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <Background variants={sidebar} />
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
      </Toggler>
      <Logo />
      <NavMenu />
      <ToggleMode />
    </HeaderBar>
  )
}

export default Header
