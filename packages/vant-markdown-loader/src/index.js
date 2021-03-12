const path = require('path');
const loaderUtils = require('loader-utils');
const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const frontMatter = require('front-matter');
const highlight = require('./highlight');
const linkOpen = require('./link-open');
const cardWrapper = require('./card-wrapper');
const extractDemo = require('./extract-demo');
const sideEffectTags = require('./side-effect-tags');
const { slugify } = require('transliteration');

function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

function wrapper(content) {
  const markdownDir = path.dirname(this.resourcePath);
  let demoLinks;
  let styles;
  [content, demoLinks] = extractDemo(content);
  [content, styles] = sideEffectTags(content);
  content = cardWrapper(content);
  return `
<template>
  <section>
    ${content}
  </section>
</template>

<script>
${demoLinks
  .map((link) => {
    const absPath = path.join(markdownDir, link); // 获取 demo 文件的完整路径
    const demoFileName = path.basename(link, '.vue');
    return `import ${camelize(demoFileName)} from '${absPath}';`;
  })
  .join('\n')}

export default {
  components: {
    ${demoLinks.map((link) => camelize(path.basename(link, '.vue'))).join(',')}
  },

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
          name: this.$route.name,
          hash: '#' + event.target.id
        })
      }
    }
  },
};
</script>

${styles.join('\n')}
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

  return options.wrapper.call(this, parser.render(source), fm);
};
