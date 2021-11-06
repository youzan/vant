const fs = require('fs');
const vant = require('vant');

const filter = Object.keys(vant).filter(
  (e) =>
    ![
      '__esModule',
      'default',
      'install',
      'version',
      'Lazyload',
      'Toast',
      'Notify',
      'Dialog',
      'Locale',
      'ImagePreview',
    ].includes(e)
);
let text = '';
const importText = [];

function addImport(name) {
  importText.push(name);
  if (vant[name].props) {
    importText.push(`${name}Props`);
  }
}

function getImportText() {
  return `import {${importText.toString()}} from 'vant' \n`;
}
function addComponent(name) {
  if (vant[name].props) {
    return `export const V${name} = (props:${name}Props) => <${name} {...props}/> \n`;
  } 
    return `export const V${name} = (props:any) => <${name} {...props}/> \n`;
  
}
filter.forEach((e) => {
  addImport(e);
  text = addComponent(e);
});
text = getImportText() + text;
fs.writeFileSync('./src/vantLib/index.tsx', text);
