import styled from "styled-components"

const FooterMenu = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  // @media (max-width: 768px) {
  //   justify-items: center;
  //   justify-content: center;
  // }

  // @media (max-width: 490px) {
  //   justify-items: left;
  // }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;

    li {
      margin: 0 1.25rem;

      &:last-child {
        margin-right: 10px;
      }

      @media (max-width: 490px) {
        margin: 0 0.5rem;
      }

      a {
        // margin: 0.25rem;
        &::after {
          content: "";
          display: block;
          height: 5px;
          width: 0%;
          margin-top: -5px;
          background: #ffab00;
          transition: all 0.5s ease 0s;
        }
        &:hover {
          border-bottom: none;
          &::after {
            width: 250%;
          }
        }
      }
      svg {
        // margin-left: 1.5rem;
      }
    }
  }
`

export default FooterMenu
