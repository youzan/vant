const fs = require('fs-extra');
const path = require('path');
const config = require('../src/config');

function template(fontName, ttf) {
  return `@font-face {
  font-weight: normal;
  font-family: '${fontName}';
  font-style: normal;
  src: url('${ttf}') format('truetype');
}
`;
}

module.exports = function encode(fontName, srcDir) {
  const ttfBase64 = fs.readFileSync(`../src/${fontName}.ttf`, 'base64');
  fs.writeFileSync(
    path.join(srcDir, 'encode.less'),
    template(config.name, `data:font/ttf;base64,${ttfBase64}`)
  );
};
