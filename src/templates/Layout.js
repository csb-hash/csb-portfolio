import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import theme from "styled-theming"

import useTheme from "../hooks/useTheme"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const getBackground = theme("mode", {
  light: "#d6deeb",
  dark: "#011627",
})

export const getTextColor = theme("mode", {
  light: "#011627",
  dark: "#d6deeb",
})

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration,
    },
  },
}

const Style = createGlobalStyle`
  body {
    background-color: ${getBackground};
    color: ${getTextColor};
    font-family: 'Open Sans Condensed';
    font-size: 1.25rem;
    margin: 0px;
    transition: 0.5s;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.5s;
  }

  .menu-background {
    background: ${getTextColor}
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 95vh;
`

const Main = styled(motion.main).attrs(() => ({
  initil: "initial",
  variants,
}))`
  flex-grow: 1;
`

const Layout = ({ children, location }) => {
  const colorTheme = useTheme()

  return (
    <ThemeProvider theme={colorTheme}>
      <>
        <Style />
        <Wrapper>
          <Header />
          <AnimatePresence>
            <Main
              key={location?.pathname}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {children}
            </Main>
          </AnimatePresence>
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
