import storage from "local-storage-fallback"
import { useState, useEffect } from "react"

const useTheme = (defaultTheme = { mode: "light" }) => {
  function getInitialTheme() {
    const savedTheme = storage.getItem("colorTheme")
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme
  }

  const [colorTheme, setColorTheme] = useState(getInitialTheme)

  useEffect(() => {
    storage.setItem("colorTheme", JSON.stringify(colorTheme))
  }, [colorTheme])

  return {
    ...colorTheme,
    setTheme: ({ setTheme, ...colourTheme }) => setColorTheme(colourTheme),
  }
}

export default useTheme
