import React from "react"
import styled from "styled-components"

const Menu = styled.div`
  height: 100%;
  position: fixed;
  user-select: none;
  left: 0;
  width: 250px;
  margin-top: 60px;
  transform: translateX(-250px);
  transition: transform 250ms ease-in-out;
  background: linear-gradient(180deg, #fc466b 0%, #3f5efb 100%);
`

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  li {
    list-style: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    span {
      display: block;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }

    a {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`

const MenuToggle = styled.div`
  .sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 22px;
    width: 22px;
  }
  .spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #fff;
  }
  .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
  }
  .diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
  }
  .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
  }

  input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
  }

  input[type="checkbox"] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
  }
  input[type="checkbox"]:checked ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
  }
  input[type="checkbox"]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
  }
  input[type="checkbox"]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -9px;
  }
`

const SidebarMenu = () => (
  <>
    <MenuToggle>
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1" />
        <div className="spinner horizontal" />
        <div className="spinner diagonal part-2" />
      </label>
    </MenuToggle>
    <Menu>
      <MenuList>
        <li>
          Jelena Jovanovic <span>Web Developer</span>
        </li>
        <li>
          <a href="#1">Company</a>
        </li>
        <li>
          <a href="#2">Instagram</a>
        </li>
        <li>
          <a href="#3" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="#4">YouTube</a>
        </li>
        <li>
          <a href="#5" target="_blank">
            Linkedin
          </a>
        </li>
      </MenuList>
    </Menu>
  </>
)

export default SidebarMenu
