import React from "react"
import styled from "styled-components"
import { getTextColor } from "../templates/Layout"

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${getTextColor};
  margin-bottom: 1rem;
  opacity: 0.5;
  &.active {
    opacity: 1;
    border-bottom: 2px solid ${getTextColor};
  }
`

const Filter = ({ name, setFilter, currentFilter }) => {
  const clickHandler = () => {
    if (currentFilter === name) {
      setFilter("")
    } else {
      setFilter(name)
    }
  }

  return (
    <Button
      name={name}
      className={currentFilter === name ? "active" : undefined}
      onclick={clickHandler}
    >
      {name}
    </Button>
  )
}

export default Filter
