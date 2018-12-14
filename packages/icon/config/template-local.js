module.exports = (fontName, ttf) => `@font-face {
  font-style: normal;
  font-weight: normal;
  font-family: '${fontName}';
  src: url('./${ttf}') format('truetype');
}
`;
