import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { getTextColor } from "../templates/Layout"

const Listing = styled.article`
  border-bottom: 1px solid ${getTextColor};
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  break-inside: avoid;

  h1 {
    margin: 0 0 0 0.5rem;
  }

  h2 {
    font-weight: normal;
    font-size: 1rem;
    margin: 0 0 0 0.5rem;
  }
`

const Job = ({
  children,
  title,
  company: { name: companyName, url: companyUrl },
  location,
  from,
  to,
  role,
}) => (
  <Listing>
    <h1>{title}</h1>
    <h2>
      <strong>
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
      </strong>{" "}
      (in {location})
    </h2>
    {children}
    <small>
      {from} to {to}
    </small>
    <p>{role}</p>
  </Listing>
)

Job.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
}

export default Job
