import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { getTextColor } from "../utils/colors"

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

const Svg = styled.svg`
  path {
    stroke: ${getTextColor};
  }
`

const Button = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: relative;
  top: 17px;
  left: 240px;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`

const MenuToggle = ({ toggle }) => (
  <Button onClick={toggle}>
    <Svg width="16" height="16" viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </Svg>
  </Button>
)

export default MenuToggle
