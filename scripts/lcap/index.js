const components = require('./config');
const path = require('path');
const fs = require('fs-extra');

const map = [];
const getUsage = require('vusion/lib/lcap');
const root = path.join(__dirname, '../../src');
const root2 = path.join(__dirname, '../../src-vusion/components');
components.forEach((component) => {
    if (component.show) {
        let targetFile = path.join(root, component.name);
        if (!fs.existsSync(targetFile))
            targetFile = path.join(root2, component.name);

        map.push(getUsage(targetFile));
    }
});

const packageJSON = require('../../package.json');
const libInfo = `${packageJSON.name}@${packageJSON.version}`;
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
