/**
 * Created by tsxuehu on 17/1/4.
 */
var config = {

    "bem": {
        "shortcuts": {"component": "c", "modifier": "m", "descendent": "d"},
        "separators": {"descendent": "-", "modifier": "--"}
    }/*,
    "autoprefixer": {"browsers": ["ie > 8", "last 2 versions"]},
    "rem": {"browsers": ["ie > 8", "last 2 versions"]}*/
};
// https://github.com/trysound/postcss-easy-import
var partialImport = require("postcss-easy-import");

// 这不是bem，虽然名字叫bem，其实它是suit
// https://github.com/saladcss/saladcss-bem
var bem = require("saladcss-bem")(config.bem);

// https://github.com/jonathantneal/precss
var precss = require("precss")();

// https://github.com/adam-h/postcss-sass-color-functions
var sassColor = require("postcss-sass-color-functions")();

// eleme的组件---
// https://npmjs.com/package/postcss-css-reset
// http://elemefe.github.io/postcss-salad/
var reset = require("postcss-css-reset")();

// eleme的组件---
// https://npmjs.com/package/postcss-utils
// http://elemefe.github.io/postcss-salad/
var utils = require("postcss-utils")();

// https://github.com/postcss/postcss-calc
var calc = require("postcss-calc")();

// https://github.com/maximkoretskiy/postcss-initial
var initial = require("postcss-initial")();

// https://github.com/trysound/postcss-inline-svg
var inlineSvg = require("postcss-inline-svg")();

// https://github.com/jonathantneal/postcss-short
var short = require("postcss-short")();

// eleme的组件---
// https://github.com/baiyaaaaa/postcss-shape
// http://elemefe.github.io/postcss-salad/
var shape = require("postcss-shape")();

// https://github.com/robwierzbowski/node-pixrem
var rem = require("pixrem")();

// https://github.com/postcss/autoprefixer
var autoprefixer = require("autoprefixer")();

// https://github.com/jo-asakura/postcss-neat
var neat = require("postcss-neat")();

module.exports = function (webpack) {
  // 顺序很重要
  return [partialImport({ addDependencyTo: webpack }), bem, precss, sassColor, reset,
      utils, calc, initial, inlineSvg, short, shape, rem, autoprefixer, neat];
};
