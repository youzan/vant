<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-pagination 
        :totalItems="totalItems" 
        :itemsPerPage="itemsPerPage"
        :showPageSize="showPageSize2" 
        :previousText= "$t('prevText')" 
        :nextText= "$t('nextText')" 
        v-model="pagination1" 
        @change="pageChanged()"
      ></van-pagination>
      <pre>Page: {{pagination1.currentPage}} / {{pagination1.numPages}}</pre>
    </demo-block>
    <demo-block :title="$t('simpleMode')">
      <van-pagination 
        :totalItems="bigTotalItems" 
        v-model="pagination2" 
        :previousText= "$t('prevText')" 
        :nextText= "$t('nextText')" 
        mode="simple" 
        size="small" 
      ></van-pagination>
      <pre>Page: {{pagination2.currentPage}} / {{pagination2.numPages}}</pre>
    </demo-block>
    <demo-block :title="$t('advancedUsage')">
      <van-pagination 
        :totalItems="bigTotalItems" 
        v-model="pagination3" 
        :showPageSize="showPageSize" 
        :forceEllipses="true"
        :previousText= "$t('prevText')" 
        :nextText= "$t('nextText')" 
      ></van-pagination>

      <pre>Page: {{pagination3.currentPage}} / {{pagination3.numPages}}</pre>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      simpleMode: '简单模式',
      prevText: '上一页',
      nextText: '下一页'
    },
    'en-US': {
      simpleMode: 'Simple Mode',
      prevText: 'Prev',
      nextText: 'Next'
    }
  },

  data() {
    return {
      totalItems: 24,
      pagination1: {
        currentPage: 2
      },
      pagination2: {
        currentPage: 1
      },
      pagination3: {
        currentPage: 1
      },
      setPage(pageNo) {
        this.pagination1.currentPage = pageNo;
      },
      pageChanged() {
        console.log('Page changed to: ' + this.pagination1.currentPage);
      },
      showPageSize: 3,
      showPageSize2: 5,
      bigTotalItems: 125,
      itemsPerPage: 5
    };
  }
};
</script>

<style lang="postcss">
.demo-pagination {
  .van-pagination {
    margin: 5px 0;
    width: 100%;
  }

  .van-doc-demo-block {
    padding: 0 15px;
  }
}
</style>
