<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-pagination 
        v-model="currentPage1" 
        :totalItems="24" 
        :itemsPerPage="5"
        :previousText= "$t('prevText')" 
        :nextText= "$t('nextText')" 
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-pagination 
        v-model="currentPage2"
        :pageCount="12"
        :previousText= "$t('prevText')" 
        :nextText= "$t('nextText')" 
        mode="simple" 
        size="small" 
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-pagination 
        forceEllipses
        v-model="currentPage3" 
        :totalItems="125" 
        :showPageSize="3" 
        :previousText= "$t('prevText')" 
        :nextText= "$t('nextText')" 
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '简单模式',
      title3: '',
      prevText: '上一页',
      nextText: '下一页'
    },
    'en-US': {
      title2: 'Simple Mode',
      title3: 'Show ellipses',
      prevText: 'Prev',
      nextText: 'Next'
    }
  },

  data() {
    return {
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
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

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
