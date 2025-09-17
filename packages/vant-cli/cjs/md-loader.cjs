const hljs = require('highlight.js');
const MarkdownIt = require('markdown-it');

function markdownCardWrapper(htmlCode) {
  const group = htmlCode
    .replace(/<h3/g, ':::<h3')
    .replace(/<h2/g, ':::<h2')
    .split(':::');

  return group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        return `<div class="van-doc-card">${fragment}</div>`;
      }

      return fragment;
    })
    .join('');
}

function markdownHighlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    // https://github.com/highlightjs/highlight.js/issues/2277
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
  }
  return '';
}

const initMarkdownIt = () => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: false,
    highlight: markdownHighlight,
  });

  const { slugify } = require('transliteration');
  const markdownItAnchor = require('markdown-it-anchor');

  markdownLinkOpen(md);

  md.use(markdownItAnchor, {
    level: 2,
    slugify,
  });

  return md;
};

const md = initMarkdownIt();

const markdownToJs = (raw) => {
  let html = md.render(raw);
  html = markdownCardWrapper(html);

  return `
  import { openBlock, createElementBlock } from 'vue';

const _hoisted_1 = ['innerHTML'];
const html = ${JSON.stringify(html)};

export default {
  setup() {
    return { html: '' };
  },
  render() {
    return (
      openBlock(),
      createElementBlock(
        'div',
        {
          class: 'van-doc-markdown-body',
          innerHTML: html,
        },
        null,
        8 /* PROPS */,
        _hoisted_1,
      )
    );
  },
};
  `
};

// add target="_blank" to all links
function markdownLinkOpen(md) {
  const defaultRender = md.renderer.rules.link_open;

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const aIndex = tokens[idx].attrIndex('target');

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']); // add new attribute
    }

    if (defaultRender) {
      return defaultRender(tokens, idx, options, env, self);
    }

    return self.renderToken(tokens, idx, options);
  };
}

module.exports = function (raw) {
  return markdownToJs(raw);
};
