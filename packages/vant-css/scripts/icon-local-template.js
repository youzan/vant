module.exports = (fontName, hash) => {
  return `@font-face {
  font-style: normal;
  font-weight: normal;
  font-family: '${fontName}';
  src: url('./${fontName}-${hash}.ttf') format('truetype');
}`;
};
