<script setup lang="ts">
import VanNavBar from '..';
import VanIcon from '../../icon';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    useSlot: '使用插槽',
  },
  'en-US': {
    useSlot: 'Use Slot',
  },
});

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
