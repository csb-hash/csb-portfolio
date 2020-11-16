import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { getBackground, getTextColor } from "../utils/colors"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Item = styled(motion.li).attrs(() => ({
  initial: "closed",
  variants,
}))`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
`

const StyledLink = styled(Link)`
  color: ${getTextColor};
  font-weight: 500;
`

const MenuItem = ({ item: { title, url }, toggle }) => {
  return (
    <Item
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      <StyledLink to={url} onClick={toggle}>
        {title}
      </StyledLink>
    </Item>
  )
}

export default MenuItem
