const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const highlight = require('./highlight');
const { slugify } = require('transliteration');

const parser = new MarkdownIt({
  html: true,
  highlight,
}).use(markdownItAnchor, {
  level: 2,
  slugify,
});

module.exports = parser;
