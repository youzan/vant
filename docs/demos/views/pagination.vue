<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-pagination 
        :total-items="totalItems" 
        :items-per-page="itemsPerPage"
        :show-page-size="showPageSize2" 
        :previous-text= "$t('prevText')" 
        :next-text= "$t('nextText')" 
        v-model="pagination1" 
        @change="pageChanged()"
      ></van-pagination>
    </demo-block>
    <demo-block :title="$t('simpleUsage')">
      <van-pagination 
        :total-items="bigTotalItems" 
        v-model="pagination3" 
        :previous-text= "$t('prevText')" 
        :next-text= "$t('nextText')" 
        @change="pageChanged3()" 
        mode="simple" 
        size="small" 
      ></van-pagination>
      <pre>Page: {{pagination3.currentPage}} / {{pagination3.numPages}}</pre>
    </demo-block>
    <demo-block :title="$t('advancedUsage')">
      <van-pagination 
        :total-items="bigTotalItems" 
        v-model="pagination2" 
        :show-page-size="showPageSize" 
        :force-ellipses="true"
        previous-text= "上一页" 
        next-text= "下一页" 
      ></van-pagination>

      <pre>Page: {{pagination2.currentPage}} / {{pagination2.numPages}}</pre>
    </demo-block>
  </demo-section>
</template>

<script>

export default {
  i18n: {
    'zh-CN': {
      simpleUsage: '简单模式',
      prevText: '上一页',
      nextText: '下一页'
    },
    'en-US': {
      simpleUsage: 'Simple Usage',
      prevText: 'Prev',
      nextText: 'Next'
    }
  },

  data() {
    return  {
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
        setPage: function (pageNo) {
            this.pagination1.currentPage = pageNo;
        },
        pageChanged: function () {
            console.log('Page changed to: ' + this.pagination1.currentPage);
        },
        pageChanged3: function () {
            console.log('Page changed to: ' + this.pagination3.currentPage);
        },
        showPageSize: 3,
        showPageSize2: 5,
        bigTotalItems: 125,
        itemsPerPage: 5
    }
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
