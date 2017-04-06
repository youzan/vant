var markdownIt = require('markdown-it');
var markdownItContainer = require('markdown-it-container');
var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var chalk = require('chalk');
var striptags = require('./strip-tags');
var navs = require('../docs/nav.config.json');
navs = navs['zh-CN'];

var parser = markdownIt('default', {
  html: true
});

var renderVueTemplate = function (html, componentName) {
  var $ = cheerio.load(html, {
    decodeEntities: false,
    lowerCaseAttributeNames: false,
    lowerCaseTags: false
  });

  var output = {
    style: $.html('style'),
    script: $.html('script'),
    'example-block': $.html('example-block')
  };
  var result;

  $('style').remove();
  $('script').remove();

  var script = '';
  if (output.script) {
    script = output.script.replace('<script>', '<script>\nimport Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);');
  } else {
    script = '<script>\nimport Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);</script>';
  }

  result = `<template><section class="demo-${componentName}"><h1 class="demo-title">${componentName}</h1>` + output['example-block'] + '</section></template>\n' +
    output.style + '\n' +
    script;

  return result;
}

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

parser.use(markdownItContainer, 'demo', {
  validate: function(params) {
    return params.trim().match(/^demo\s*(.*)$/);
  },

  render: function(tokens, idx) {
    var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
    if (tokens[idx].nesting === 1) {
      var description = (m && m.length > 1) ? m[1] : '';
      var content = tokens[idx + 1].content;
      var html = convert(striptags.strip(content, ['script', 'style']));

      return `<example-block title="${description}">
                ${html}
              </example-block>\n`;
    }
    return '';
  }
});

var docsDir = path.resolve(__dirname, '../docs');
var components = [];
for (var i = 0; i < navs.length; i++) {
  var navItem = navs[i];

  if (!navItem.showInMobile) continue;

  if (!navItem.groups) {
    components.push(navs[i]);
  } else {
    for (var j = 0; j < navItem.groups.length; j++) {
      components = components.concat(navItem.groups[j].list);
    }
  }
}
for (var i = 0; i < components.length; i++) {
  var item = components[i];
  var itemMdFile = `${docsDir}/examples-docs${item.path}.md`;
  if (!fs.existsSync(itemMdFile)) {
    continue;
  }

  var itemMd = fs.readFileSync(`${docsDir}/examples-docs${item.path}.md`).toString();
  var content = parser.render(itemMd);
  var result = renderVueTemplate(content, item.path.slice(1));

  var exampleVueName = `${docsDir}/examples-dist/${item.path}.vue`;

  // 新建一个文件
  if (!fs.existsSync(exampleVueName)) {
    fs.closeSync(fs.openSync(exampleVueName, 'w'));
  }
  fs.writeFileSync(exampleVueName, result, {
    encoding: 'utf8'
  });
}

console.log(chalk.green('generate examples success!'));

