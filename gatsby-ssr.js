import React from "react"
import PropTypes from "prop-types"
import Layout from "./src/templates/Layout"

/* eslint-disable import/prefer-default-export  */
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

/* eslint-disable react/require-default-props */
wrapPageElement.propTypes = {
  element: PropTypes.shape(),
  props: PropTypes.shape(),
}
