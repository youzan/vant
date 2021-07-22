<template>
  <div id="docsearch" />
</template>

<script>
import '@docsearch/css';
import docsearch from '@docsearch/js';

export default {
  name: 'VanDocSearch',

  props: {
    lang: String,
    searchConfig: Object,
  },

  watch: {
    lang() {
      this.initDocsearch();
    },
  },

  mounted() {
    this.initDocsearch();
  },

  methods: {
    initDocsearch() {
      if (this.searchConfig) {
        docsearch({
          ...this.searchConfig,
          container: '#docsearch',
        });
      }
    },
  },
};
</script>

<style lang="less">
@import '../../common/style/var';

#docsearch {
  display: inline-block;
  vertical-align: middle;
}

.DocSearch-Button {
  height: 32px;
  background: #f7f8fa;

  &:hover {
    box-shadow: none;
  }
}

.DocSearch-Search-Icon {
  width: 18px;
  height: 18px;
}

.DocSearch-Button-Key {
  font-size: 12px;
}
</style>
