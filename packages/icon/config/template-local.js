module.exports = (fontName, ttf) => {
  return `@font-face {
  font-style: normal;
  font-weight: normal;
  font-family: '${fontName}';
  src: url('./${ttf}') format('truetype');
}
`;
};
