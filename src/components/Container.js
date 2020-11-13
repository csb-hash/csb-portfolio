import styled, { css } from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10%;

  ${props =>
    props.narrow &&
    css`
      margin: 4rem auto;
      padding: 0 15%;
    `}
`

export default Container
