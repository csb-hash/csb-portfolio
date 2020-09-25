import React, { createContext } from "react"
import useToggle from "../hooks/useToggle"

const defaults = {
  isOpen: false,
}

const NavContext = createContext(defaults)

export const Provider = ({ children }) => {
  const isOpen = useToggle(false)

  return (
    <NavContext.Provider
      value={{
        isOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export default NavContext
