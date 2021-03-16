const path = require('path');
const loaderUtils = require('loader-utils');
const frontMatter = require('front-matter');
const parser = require('./md-parser');
const linkOpen = require('./link-open');
const cardWrapper = require('./card-wrapper');
const extractDemo = require('./extract-demo');
const sideEffectTags = require('./side-effect-tags');

function camelize(str) {
  return `-${str}`.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

const sharedVueOptions = `mounted() {
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
`;

function wrapper(content) {
  let demoLinks;
  [content, demoLinks] = extractDemo.call(this, content);
  content = cardWrapper(content);

  // 不包含 demo-code 的 md 文件，直接使绑定 HTML
  if (demoLinks.length === 0) {
    content = escape(content);

    return `
<script>
import { h } from 'vue';

const content = unescape(\`${content}\`);

export default {
${sharedVueOptions}

  render() {
    return h('section', { innerHTML: content });
  }
};
</script>
`;
  }

  // 包含 demo-code 的 md 文件，需要走模版渲染
  let styles;
  [content, styles] = sideEffectTags(content);

  return `
<template>
  <section v-once>
    ${content}
  </section>
</template>

<script>
${demoLinks
  .map((link) => {
    return `import DemoCode${camelize(
      path.basename(link, '.vue')
    )} from '${link}';`;
  })
  .join('\n')}

export default {
  components: {
    ${demoLinks
      .map((link) => `DemoCode${camelize(path.basename(link, '.vue'))}`)
      .join(',')}
  },

${sharedVueOptions}
};
</script>

${styles.join('\n')}
`;
}

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
