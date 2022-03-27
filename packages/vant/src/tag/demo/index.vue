<script setup lang="ts">
import VanCell from '../../cell';
import VanTag from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    type: '类型',
    mark: '标记样式',
    plain: '空心样式',
    round: '圆角样式',
    tagStyle: '样式风格',
    closeable: '可关闭标签',
    smallSize: '小号标签',
    largeSize: '大号标签',
    mediumSize: '中号标签',
    customSize: '标签大小',
    customColor: '自定义颜色',
    customBgColor: '背景颜色',
    customTextColor: '文字颜色',
    customPlainColor: '空心颜色',
  },
  'en-US': {
    mark: 'Mark style',
    plain: 'Plain style',
    round: 'Round style',
    tagStyle: 'Tag Style',
    closeable: 'Closeable',
    smallSize: 'Small Size',
    largeSize: 'Large Size',
    mediumSize: 'Medium Size',
    customColor: 'Custom Color',
    customSize: 'Custom Size',
    customBgColor: 'Background Color',
    customTextColor: 'Text Color',
    customPlainColor: 'Plain Color',
  },
});

const show = ref(true);
const close = () => {
  show.value = false;
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell :title="`primary ${t('type')}`">
      <template #value>
        <van-tag type="primary">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="`success ${t('type')}`">
      <template #value>
        <van-tag type="success">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="`danger ${t('type')}`">
      <template #value>
        <van-tag type="danger">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="`warning ${t('type')}`">
      <template #value>
        <van-tag type="warning">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
  </demo-block>

  <demo-block card :title="t('tagStyle')">
    <van-cell :title="t('plain')">
      <template #value>
        <van-tag plain type="primary">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="t('round')">
      <template #value>
        <van-tag round type="primary">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="t('mark')">
      <template #value>
        <van-tag mark type="primary">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="t('closeable')">
      <template #value>
        <van-tag
          closeable
          :show="show"
          size="medium"
          type="primary"
          @close="close"
        >
          {{ t('tag') }}
        </van-tag>
      </template>
    </van-cell>
  </demo-block>

  <demo-block card :title="t('customSize')">
    <van-cell :title="t('smallSize')">
      <template #value>
        <van-tag type="primary">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="t('mediumSize')">
      <template #value>
        <van-tag type="primary" size="medium">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="t('largeSize')">
      <template #value>
        <van-tag type="primary" size="large">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
  </demo-block>

  <demo-block card :title="t('customColor')">
    <van-cell :title="t('customBgColor')">
      <template #value>
        <van-tag color="#7232dd">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="t('customTextColor')">
      <template #value>
        <van-tag color="#ffe1e1" text-color="#ad0000">{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
    <van-cell :title="t('customPlainColor')">
      <template #value>
        <van-tag color="#7232dd" plain>{{ t('tag') }}</van-tag>
      </template>
    </van-cell>
  </demo-block>
</template>

<style lang="less">
.demo-tag {
  .van-tag + .van-tag {
    margin-left: var(--van-padding-xs);
  }
}
</style>
