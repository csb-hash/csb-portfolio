import theme from "styled-theming"

const colors = {
  background: "#fff",
  backgroundDark: "#183153",
  text: "#333333",
  textDark: "#FFFFF0",
  primary: "#7c37ad",
  primaryLight: "#ae66df",
  primaryDark: "#4b007d",
  secondary: "#ffc400",
  secondaryLight: "#ffd740",
  secondaryDark: "#ffab00",
}

export default colors

// textDark #d6deeb; text #011627

export const getBackground = theme("mode", {
  light: colors.background,
  dark: colors.backgroundDark,
})

export const getTextColor = theme("mode", {
  light: colors.text,
  dark: colors.textDark,
})

export const getSecondaryText = theme("mode", {
  light: colors.secondary,
  dark: colors.secondaryDark,
})
