<script setup lang="ts">
import VanRow from '../../row';
import VanImage from '..';
import VanCol from '../../col';
import VanLoading from '../../loading';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    fitMode: '填充模式',
    round: '圆形图片',
    loading: '加载中提示',
    error: '加载失败提示',
    defaultTip: '默认提示',
    customTip: '自定义提示',
    loadFail: '加载失败',
  },
  'en-US': {
    fitMode: 'Fit Mode',
    round: 'Round',
    loading: 'Loading',
    error: 'Error',
    defaultTip: 'Default Tip',
    customTip: 'Custom Tip',
    loadFail: 'Load failed',
  },
});

const image = 'https://img.yzcdn.cn/vant/cat.jpeg';
const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const;
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-row>
      <van-image width="100" height="100" :src="image" />
    </van-row>
  </demo-block>

  <demo-block :title="t('fitMode')">
    <van-row gutter="20">
      <van-col v-for="fit in fits" span="8" :key="fit">
        <van-image :fit="fit" width="100%" height="27vw" :src="image" />
        <div class="text">{{ fit }}</div>
      </van-col>
    </van-row>
  </demo-block>

  <demo-block :title="t('round')">
    <van-row gutter="20">
      <van-col v-for="fit in fits" span="8" :key="fit">
        <van-image round :fit="fit" width="100%" height="27vw" :src="image" />
        <div class="text">{{ fit }}</div>
      </van-col>
    </van-row>
  </demo-block>

  <demo-block :title="t('loading')">
    <van-row gutter="20">
      <van-col span="8">
        <van-image width="100%" height="27vw" />
        <div class="text">{{ t('defaultTip') }}</div>
      </van-col>

      <van-col span="8">
        <van-image width="100%" height="27vw">
          <template #loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <div class="text">{{ t('customTip') }}</div>
      </van-col>
    </van-row>
  </demo-block>

  <demo-block :title="t('error')">
    <van-row gutter="20">
      <van-col span="8">
        <van-image width="100%" height="27vw" src="http://x" />
        <div class="text">{{ t('defaultTip') }}</div>
      </van-col>

      <van-col span="8">
        <van-image width="100%" height="27vw" src="http://x">
          <template #error>{{ t('loadFail') }}</template>
        </van-image>
        <div class="text">{{ t('customTip') }}</div>
      </van-col>
    </van-row>
  </demo-block>
</template>

<style lang="less">
.demo-image {
  overflow-x: hidden;
  background-color: var(--van-white);

  .van-row {
    padding: 0 var(--van-padding-md);
  }

  .van-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: var(--van-gray-7);
    font-size: 14px;
    text-align: center;
  }
}
</style>
