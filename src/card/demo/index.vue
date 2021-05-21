<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-card
        num="2"
        price="2.00"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="t('discountInfo')">
      <van-card
        num="2"
        price="2.00"
        origin-price="10.00"
        :tag="t('tag')"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="t('customContent')">
      <van-card
        num="2"
        price="2.00"
        :desc="t('desc')"
        :title="t('title')"
        :thumb="imageURL"
      >
        <template #tags>
          <div>
            <van-tag plain type="danger" style="margin-right: 5px">
              标签
            </van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
        </template>

        <template #footer>
          <div>
            <van-button round size="mini">
              {{ t('button') }}
            </van-button>
            <van-button round size="mini">
              {{ t('button') }}
            </van-button>
          </div>
        </template>
      </van-card>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '商品名称',
      discountInfo: '营销信息',
      customContent: '自定义内容',
    },
    'en-US': {
      discountInfo: 'Discount Info',
      customContent: 'Custom Content',
    },
  },

  data() {
    return {
      imageURL: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-card {
  background-color: @white;
}
</style>
