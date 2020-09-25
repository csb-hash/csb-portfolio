import React from "react"
import styled from "styled-components"
import { getTextColor, getSecondaryText } from "../utils/colors"

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${getTextColor};
  margin: 0 0.3rem;
  padding: 4px 10px;
  opacity: 0.5;
  &.active {
    opacity: 1;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: ${getSecondaryText};
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
      onClick={clickHandler}
    >
      {name}
    </Button>
  )
}

export default Filter
