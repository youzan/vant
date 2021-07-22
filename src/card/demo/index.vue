<template>
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
            {{ t('tag') }}
          </van-tag>
          <van-tag plain type="danger">{{ t('tag') }}</van-tag>
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
</template>

<script lang="ts">
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    title: '商品名称',
    discountInfo: '营销信息',
    customContent: '自定义内容',
  },
  'en-US': {
    discountInfo: 'Discount Info',
    customContent: 'Custom Content',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);

    return {
      t,
      imageURL: 'https://img.yzcdn.cn/vant/ipad.jpeg',
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
