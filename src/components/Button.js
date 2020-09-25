import React from "react"
import styled from "styled-components"

import { getSecondaryText, getTextColor } from "../utils/colors"

const StyledButton = styled.a`
  background: ${getSecondaryText};
  font-weight: 600;
  border: 0;
  outline: 0;
  text-transform: uppercase;
  color: ${getTextColor};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  transition: 0.2s;
  display: inline-block;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background: ${getSecondaryText};
  }
`
const Button = props => {
  const { children, href, rel, target } = props

  return (
    <StyledButton
      href={href}
      target={target || undefined}
      rel={rel || target === "_blank" ? "noopener noreferer" : undefined}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
