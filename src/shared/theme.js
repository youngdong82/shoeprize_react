const calcRem = (size) => `${size / 16}rem`

const colors = {
  black: "#000000",
  black_pale: '#333333',
  gray_pale: "#F4F4F4",
  gray: "#E0E0E0",
  gray_dark: "#959595",
  gray_deepdark: "#666666",
  yellow: "#FFCA00",
};

const fontSize = {
  font_15: calcRem(15),
  font_14: calcRem(14),
  font_13: calcRem(13),
  font_12: calcRem(12),
}
  /* Font weight */
const fontWeight = {
  bold: 700,
  semi_bold: 600,
  medium: 500,
  regular: 400,
}

const theme = {
  colors,
  fontSize,
  fontWeight
}

export default theme;