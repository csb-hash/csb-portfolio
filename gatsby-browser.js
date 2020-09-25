import React from "react"
import PropTypes from "prop-types"
import Layout from "./src/templates/Layout"

import "typeface-montserrat"

const transitionDelay = 500

/* eslint-disable import/prefer-default-export  */
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}

/* eslint-disable react/require-default-props */
wrapPageElement.propTypes = {
  element: PropTypes.shape(),
  props: PropTypes.shape(),
}
