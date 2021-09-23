const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '../src');
const files = fs.readdirSync(basePath);

const result = files.map((file) => {
    const componentName = file.replace(/^(\w)|-(\w)/g, (m) => m[m.length - 1].toUpperCase());

    if (fs.existsSync(path.join(basePath, file, 'index.js')) || fs.existsSync(path.join(basePath, file, 'index.tsx')))
        return `export { default as Van${componentName} } from '../../src/${file}';`;
    else
        return '';
}).join('\n');

fs.writeFileSync(path.join(__dirname, '../src-vusion/components/index.js'), result, 'utf8');