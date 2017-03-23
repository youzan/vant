/**
 * Created by tsxuehu on 17/1/4.
 */
var config = {

    "bem": {
        "shortcuts": {"component": "b", "modifier": "m", "descendent": "e"},
        "separators": {"descendent": "__", "modifier": "--"}
    }/*,
    "autoprefixer": {"browsers": ["ie > 8", "last 2 versions"]},
    "rem": {"browsers": ["ie > 8", "last 2 versions"]}*/
};
// https://github.com/trysound/postcss-easy-import
var partialImport = require("postcss-easy-import")();

// 这不是bem，虽然名字叫bem，其实它是suit
// https://github.com/saladcss/saladcss-bem
var bem = require("saladcss-bem")(config.bem);

// https://github.com/jonathantneal/precss
var precss = require("precss")();

// https://github.com/postcss/autoprefixer
var autoprefixer = require("autoprefixer")();

module.exports = function (webpack) {
  // 顺序很重要
  return [
    partialImport,
    bem,
    precss,
    autoprefixer
  ];
};
