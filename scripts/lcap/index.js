const components = require('./config');
const path = require('path');
const fs = require('fs-extra');

const map = [];
const getUsage = require('vusion/lib/lcap');
const root = path.join(__dirname, '../../src');
components.forEach((component) => {
    if (component.show) {
        const targetFile = path.join(root, component.name);
        map.push(getUsage(targetFile));
    }
});
const packageJSON = require('../../package.json');
const libInfo = `${packageJSON.lcapname}@${packageJSON.lcapversion}`;
Object.values(map).forEach((item) => {
    let screenShot = JSON.parse(item.screenShot);
    screenShot = screenShot
        .filter((screen) => !screen.includes('.DS_Store'))
        .map((screen) => `https://static-vusion.163yun.com/packages/${libInfo}/src/${item.symbol.replace(/van-/g,'')}/screenshots/${screen}`);
    item.jsonSchema.screenShot = item.screenShot = screenShot.join(',');
});

Object.values(map).forEach((item) => {
    let drawings = JSON.parse(item.jsonSchema.drawings);
    drawings = drawings
        .filter((screen) => !screen.includes('.DS_Store'))
        .map((screen) => `https://static-vusion.163yun.com/packages/${libInfo}/src/${item.symbol.replace(/van-/g,'')}/drawings/${screen}`);
    item.jsonSchema.drawings = drawings.join(',');
});

fs.writeFileSync(path.join(__dirname, './usage.json'), JSON.stringify(map, null, 4));
