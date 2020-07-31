import React, { useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion, useCycle } from "framer-motion"

import useDimensions from "../hooks/useDimensions"
import Navigation from "./Navigation"
import MenuToggle from "./MenuToggle"
import ToggleMode from "./ToggleMode"

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
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const Background = styled(motion.div).attrs(() => ({
  initial: "closed",
  sidebar,
}))`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`

const Toggler = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: auto;
  z-index: 1;
`

const Head = styled.header`
  padding: 1rem 3%;
  display: flex;
  justify-content: center;

  h1 {
    margin: 0;
    line-height: 1;

    @media screen and (max-width: 375px) {
      font-size: 1.25rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  @media print {
    display: none;
  }
`

const ThemeToggle = styled(ToggleMode)`
  position: absolute;
  right: 0;
`

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <Head>
      <Toggler initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
        <Background className="menu-background" variants={sidebar} />
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </Toggler>
      <Link to="/">
        <h1>csbarua</h1>
      </Link>
      <ThemeToggle />
    </Head>
  )
}

export default Header
