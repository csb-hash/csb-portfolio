import React, { createContext, useState } from "react"

const defaults = {
  darkMode: false,
  changeMod: () => {},
}

const DarkModeContext = createContext(defaults)

const Provider = ({ children }) => {
  const [darkMode, toggleDarkMode] = useState(defaults.darkMode)

  const changeMode = currentMode => {
    try {
      toggleDarkMode(!currentMode)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <DarkModeContext.Provider
      value={{
        ...defaults,
        darkMode,
        changeMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export default Provider
