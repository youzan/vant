<template>
  <demo-section>
    <u-list-view v-model="value" :data-source="list"></u-list-view>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      errorInfo: '错误提示',
      errorText: '请求失败，点击重新加载',
      pullRefresh: '下拉刷新',
      finishedText: '没有更多了',
    },
    'en-US': {
      errorInfo: 'Error Info',
      errorText: 'Request failed. Click to reload',
      pullRefresh: 'PullRefresh',
      finishedText: 'Finished',
    },
  },

  data() {
    return {
      value: 'cpp',
      list: [
          { text: 'Batch', value: 'bat' },
          { text: 'C', value: 'c' },
          { text: 'C#', value: 'csharp' },
          { text: 'C++', value: 'cpp' },
          { text: 'CSS', value: 'css' },
          { text: 'Clojure', value: 'clojure' },
          { text: 'CoffeeScript', value: 'coffeescript' },
          { text: 'Coq', value: 'coq' },
          { text: 'Diff', value: 'diff' },
          { text: 'Dockerfile', value: 'dockerfile' },
          { text: 'F#', value: 'fshape' },
          { text: 'Go', value: 'go' },
          { text: 'Groovy', value: 'groovy' },
          { text: 'HLSL', value: 'hlsl' },
          { text: 'HTML', value: 'html' },
          { text: 'Handlebars', value: 'Handlebars' },
          { text: 'Ignore', value: 'ignore' },
          { text: 'Ini', value: 'ini' },
          { text: 'JSON', value: 'json' },
          { text: 'Java', value: 'java' },
          { text: 'JavaScript', value: 'javascript' },
          { text: 'Jinja', value: 'jinja' },
          { text: 'Jupyter', value: 'jupyter' },
          { text: 'Less', value: 'less' },
          { text: 'Log', value: 'log' },
          { text: 'Lua', value: 'lua' },
          { text: 'Makefile', value: 'makefile' },
          { text: 'Markdown', value: 'markdown' },
          { text: 'Objective-C', value: 'objective-c' },
          { text: 'Objective-C++', value: 'objective-cpp' },
          { text: 'PHP', value: 'php' },
          { text: 'Perl', value: 'perl' },
          { text: 'PowerShell', value: 'powershell' },
          { text: 'Properties', value: 'properties' },
          { text: 'Pug', value: 'jade' },
          { text: 'Python', value: 'python' },
          { text: 'R', value: 'r' },
          { text: 'Razor', value: 'razor' },
          { text: 'Ruby', value: 'ruby' },
          { text: 'Rust', value: 'rust' },
          { text: 'SCSS', value: 'scss' },
          { text: 'SQL', value: 'sql' },
          { text: 'SVG', value: 'svg' },
          { text: 'Shaderlab', value: 'shaderlab' },
          { text: 'Shell Script', value: 'shellscript' },
          { text: 'Swift', value: 'swift' },
          { text: 'TypeScript', value: 'typescript' },
          { text: 'Visual Basic', value: 'vb' },
          { text: 'Vue', value: 'vue' },
          { text: 'XML', value: 'xml' },
          { text: 'XSL', value: 'xsl' },
          { text: 'YAML', value: 'yaml' },
      ],
  };
  },

  methods: {
    onLoad(index) {
      const list = this.list[index];
      list.loading = true;

      setTimeout(() => {
        if (list.refreshing) {
          list.items = [];
          list.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? '0' + text : text);
        }

        list.loading = false;
        list.refreshing = false;

        // show error info in second demo
        if (index === 1 && list.items.length === 10 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }

        if (list.items.length >= 40) {
          list.finished = true;
        }
      }, 1000);
    },

    onRefresh(index) {
      this.list[index].finished = false;
      this.onLoad(index);
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-list {
  .van-cell {
    text-align: center;
  }

  .page-desc {
    margin: 0;
    padding: 5px 0;
    color: @gray-7;
    font-size: 14px;
    text-align: center;

    &--text {
      margin: 0;
    }

    &--option {
      margin: 12px;
    }
  }

  .van-checkbox__label {
    color: @gray-7;
  }
}
</style>
