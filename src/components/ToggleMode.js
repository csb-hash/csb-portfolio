import React from "react"
import styled, { ThemeConsumer } from "styled-components"
import { FaSun, FaMoon } from "react-icons/fa"

const Wrapper = styled.div`
  position: absolute;
  right: 1rem;
  cursor: pointer;
`

const ToggleMode = () => (
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
          <FaMoon
            onClick={() => theme.setTheme({ ...theme, mode: "dark" })}
            role="button"
            aria-label="Dark Mode"
          />
        )
      }
    </ThemeConsumer>
  </Wrapper>
)

export default ToggleMode
