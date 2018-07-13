module.exports = (fontName, ttf) => {
  return `@font-face {
  font-style: normal;
  font-weight: normal;
  font-family: '${fontName}';
  src: url('../icon/${ttf}') format('truetype');
}
`;
};
