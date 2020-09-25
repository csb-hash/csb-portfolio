import React from "react"
import styled, { ThemeProvider } from "styled-components"
// import { motion, AnimatePresence } from "framer-motion"

import GlobalStyles from "../components/GlobalStyles"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useTheme from "../hooks/useTheme"

// const duration = 0.5

// const variants = {
//   initial: {
//     opacity: 0,
//   },
//   enter: {
//     opacity: 1,
//     transition: {
//       duration,
//       delay: duration,
//       when: "beforeChildren",
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       duration,
//     },
//   },
// }

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex: auto;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;

  // @media (max-width: 768px) {
  //   min-height: 100vh;
  // }
`

// const Main = styled(motion.main).attrs(() => ({
//   initial: "initial",
//   variants,
// }))`
//   width: 100%;
//   padding: 0;
//   margin: 0;
//   flex-grow: 1;
// `

const Main = styled.main`
  width: 100%;
  padding: 0;
  margin: 0;
  flex-grow: 1;

  @media (min-width: 768px) {
    z-index: 1;
  }
`

const Layout = ({ children }) => {
  const colorTheme = useTheme()

  return (
    <ThemeProvider theme={colorTheme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
