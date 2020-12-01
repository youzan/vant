<template>
  <div id="docsearch" />
</template>

<script>
import '@docsearch/css';
import docsearch from '@docsearch/js';

export default {
  name: 'van-doc-search',

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
          searchParameters: {
            facetFilters: [`lang:${this.lang}`],
          },
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
</style>
