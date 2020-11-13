// import { Link } from "gatsby"
// import { motion, useCycle } from "framer-motion"
import React, { useRef } from "react"
import styled from "styled-components"
// import useDimensions from "../hooks/useDimensions"
// import { getTextColor } from "../utils/colors"
import Logo from "./Logo"
// import MenuToggle from "./MenuToggle"
// import Navigation from "./Navigation"
import NavMenu from "./NavMenu"
import ThemeToggle from "./ThemeToggle"

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
  z-index: 1;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

// const Toggler = styled(motion.nav)`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 300px;
//   opacity: 0;
//   // z-index: -1;

//   @media (max-width: 768px) {
//     opacity: 1;
//   }
// `

// const sidebar = {
//   open: (height = 1080) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: `circle(0px at 265px 43px)`,
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// }

// const Background = styled(motion.div).attrs(() => ({
//   initial: "closed",
//   sidebar,
// }))`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 300px;
//   background: ${getTextColor};
// `

const Header = () => {
  // const [isOpen, toggleOpen] = useCycle(false, true)
  // const containerRef = useRef(null)
  // const { height } = useDimensions(containerRef)

  return (
    <HeaderBar>
      <Logo />
      <NavMenu />
      <ThemeToggle />
      {/* <Toggler */}
      {/*   initial={false} */}
      {/*   animate={isOpen ? "open" : "closed"} */}
      {/*   custom={height} */}
      {/*   ref={containerRef} */}
      {/* > */}
      {/*   <Background variants={sidebar} /> */}
      {/*   <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} /> */}
      {/*   <Navigation toggle={() => toggleOpen()} /> */}
      {/* </Toggler> */}
    </HeaderBar>
  )
}

export default Header
