<script setup lang="ts">
import VanSticky from '..';
import VanButton from '../../button';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    offsetTop: '吸顶距离',
    offsetBottom: '吸底距离',
    setContainer: '指定容器',
  },
  'en-US': {
    offsetTop: 'Offset Top',
    offsetBottom: 'Offset Bottom',
    setContainer: 'Set Container',
  },
});

const container = ref<Element>();
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-sticky>
      <van-button type="primary" style="margin-left: 15px">
        {{ t('basicUsage') }}
      </van-button>
    </van-sticky>
  </demo-block>

  <demo-block :title="t('offsetTop')">
    <van-sticky :offset-top="50">
      <van-button type="primary" style="margin-left: 115px">
        {{ t('offsetTop') }}
      </van-button>
    </van-sticky>
  </demo-block>

  <demo-block :title="t('setContainer')">
    <div
      ref="container"
      style="height: 150px; background-color: var(--van-background-2)"
    >
      <van-sticky :container="container">
        <van-button type="warning" style="margin-left: 215px">
          {{ t('setContainer') }}
        </van-button>
      </van-sticky>
    </div>
  </demo-block>

  <demo-block :title="t('offsetBottom')">
    <div style="height: 200px"></div>
    <van-sticky :offset-bottom="50" position="bottom">
      <van-button type="primary" style="margin-left: 15px">
        {{ t('offsetBottom') }}
      </van-button>
    </van-sticky>
  </demo-block>
</template>

<style lang="less">
.demo-sticky {
  height: 200vh;

  .van-button {
    margin-left: var(--van-padding-md);
  }
}
</style>
