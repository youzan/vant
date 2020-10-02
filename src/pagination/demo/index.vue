<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-pagination
        v-model="currentPage1"
        :total-items="24"
        :items-per-page="5"
        :prev-text="t('prevText')"
        :next-text="t('nextText')"
      />
    </demo-block>

    <demo-block :title="t('title2')">
      <van-pagination
        v-model="currentPage2"
        :page-count="12"
        :prev-text="t('prevText')"
        :next-text="t('nextText')"
        mode="simple"
        size="small"
      />
    </demo-block>

    <demo-block :title="t('title3')">
      <van-pagination
        v-model="currentPage3"
        force-ellipses
        :total-items="125"
        :show-page-size="3"
        :prev-text="t('prevText')"
        :next-text="t('nextText')"
      />
    </demo-block>

    <demo-block :title="t('title4')">
      <van-pagination
        v-model="currentPage4"
        :total-items="125"
        :show-page-size="5"
      >
        <template #prev-text>
          <van-icon name="arrow-left" />
        </template>
        <template #next-text>
          <van-icon name="arrow" />
        </template>
        <template #page="{ text }">{{ text }}</template>
      </van-pagination>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '简单模式',
      title3: '显示省略号',
      title4: '自定义按钮',
      prevText: '上一页',
      nextText: '下一页',
    },
    'en-US': {
      title2: 'Simple Mode',
      title3: 'Show ellipses',
      title4: 'Custom Button',
      prevText: 'Prev',
      nextText: 'Next',
    },
  },

  data() {
    return {
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-pagination {
  .van-pagination {
    width: 100%;
    margin: 5px 0;
  }

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
