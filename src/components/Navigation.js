import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import MenuItem from "./MenuItem"

const variants = {
  open: {
    pointerEvents: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    pointerEvents: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemIds = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Works",
    url: "/works",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
]

const Menu = styled(motion.ul).attrs(() => ({
  initial: "closed",
  variants,
}))`
  margin: 0;
  padding: 40px;
  position: absolute;
  top: 100px;
  width: 230px;
`

const Navigation = ({ toggle }) => (
  <Menu variants={variants}>
    {itemIds.map(item => (
      <MenuItem item={item} key={item.id} toggle={toggle} />
    ))}
  </Menu>
)

export default Navigation
