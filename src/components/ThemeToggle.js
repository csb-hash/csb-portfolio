import React from "react"
import { FaRegMoon, FaSun } from "react-icons/fa"
import styled, { ThemeConsumer } from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  right: 2rem;
  cursor: pointer;

  // @media (max-width: 768px) {
  //   position: absolute;
  //   top: 34px;
  //   left: 10%;
  //   opacity: 0.3;
  // }
`

const ThemeToggle = () => (
  <Wrapper>
    <ThemeConsumer>
      {theme =>
        theme.mode === "dark" ? (
          <FaSun
            onClick={() => theme.setTheme({ ...theme, mode: "light" })}
            role="button"
            aria-label="Light Mode"
          />
        ) : (
          <FaRegMoon
            onClick={() => theme.setTheme({ ...theme, mode: "dark" })}
            role="button"
            aria-label="Dark Mode"
          />
        )
      }
    </ThemeConsumer>
  </Wrapper>
)

export default ThemeToggle
