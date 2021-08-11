<script setup lang="ts">
import { useTranslate } from '@demo/use-translate';
import { Toast } from '../../toast';

const i18n = {
  'zh-CN': {
    useSlot: '使用插槽',
  },
  'en-US': {
    useSlot: 'Use Slot',
  },
};

const t = useTranslate(i18n);
const onClickLeft = () => Toast(t('back'));
const onClickRight = () => Toast(t('button'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-nav-bar
      :title="t('title')"
      :left-text="t('back')"
      :right-text="t('button')"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </demo-block>

  <demo-block :title="t('useSlot')">
    <van-nav-bar :title="t('title')" :left-text="t('back')" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </demo-block>
</template>
