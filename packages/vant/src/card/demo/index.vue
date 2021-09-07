<script setup lang="ts">
import VanCard from '..';
import VanTag from '../../tag';
import VanButton from '../../button';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    title: '商品名称',
    discountInfo: '营销信息',
    customContent: '自定义内容',
  },
  'en-US': {
    discountInfo: 'Discount Info',
    customContent: 'Custom Content',
  },
});

const imageURL = 'https://img.yzcdn.cn/vant/ipad.jpeg';
</script>

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

<style lang="less">
.demo-card {
  background-color: var(--van-white);
}
</style>
