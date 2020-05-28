const loaderUtils = require('loader-utils');
const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const frontMatter = require('front-matter');
const highlight = require('./highlight');
const linkOpen = require('./link-open');
const cardWrapper = require('./card-wrapper');
const { slugify } = require('transliteration');

function wrapper(content) {
  content = cardWrapper(content);
  content = escape(content);

  return `
import { h } from 'vue';

const content = unescape(\`${content}\`);

export default {
  mounted() {
    const anchors = [].slice.call(this.$el.querySelectorAll('h2, h3, h4, h5'));

    anchors.forEach(anchor => {
      anchor.addEventListener('click', this.scrollToAnchor);
    });
  },

  methods: {
    scrollToAnchor(event) {
      if (event.target.id) {
        this.$router.push({
          path: this.$route.path,
          hash: event.target.id
        })
      }
    }
  },

  render() {
    return h('section', { innerHTML: content });
  }
};
`;
}

const parser = new MarkdownIt({
  html: true,
  highlight,
}).use(markdownItAnchor, {
  level: 2,
  slugify,
});

module.exports = function (source) {
  let options = loaderUtils.getOptions(this) || {};
  this.cacheable && this.cacheable();

  options = {
    wrapper,
    linkOpen: true,
    ...options,
  };

  let fm;

  if (options.enableMetaData) {
    fm = frontMatter(source);
    source = fm.body;
  }

  if (options.linkOpen) {
    linkOpen(parser);
  }

  return options.wrapper(parser.render(source), fm);
};
