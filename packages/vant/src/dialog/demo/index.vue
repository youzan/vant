<script setup lang="ts">
import VanCell from '../../cell';
import { showDialog, showConfirmDialog, Dialog as VanDialog } from '..';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';
import type { DialogAction } from '../types';

const t = useTranslate({
  'zh-CN': {
    title: '标题',
    alert1: '提示弹窗',
    alert2: '提示弹窗（无标题）',
    confirm: '确认弹窗',
    content1: '代码是写出来给人看的，附带能在机器上运行。',
    content2: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
    content3:
      '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
    beforeClose: '异步关闭',
    roundButton: '圆角按钮样式',
    useComponent: '使用 Dialog 组件',
  },
  'en-US': {
    title: 'Title',
    alert1: 'Alert',
    alert2: 'Alert without title',
    confirm: 'Confirm dialog',
    content1:
      'The frequency of people swearing during code reading is the only measure of code quality.',
    content2:
      'Life is far more than just spinning and busy to the limit, and human experiences are much broader and richer than this.',
    content3:
      'If the solution is ugly, then there must be a better solution, but it has not been discovered yet.',
    beforeClose: 'Before Close',
    roundButton: 'Round Button Style',
    useComponent: 'Use Dialog Component',
  },
});

const show = ref(false);
const image = cdnURL('apple-3.jpeg');

const onClickAlert = () => {
  showDialog({
    title: t('title'),
    message: t('content1'),
  });
};

const onClickAlert2 = () => {
  showDialog({
    message: t('content2'),
  });
};

const onClickRound = () => {
  showDialog({
    theme: 'round-button',
    title: t('title'),
    message: t('content1'),
  });
};

const onClickRound2 = () => {
  showDialog({
    theme: 'round-button',
    message: t('content2'),
  });
};

const onClickConfirm = () => {
  showConfirmDialog({
    title: t('title'),
    message: t('content3'),
  });
};

const onClickBeforeClose = () => {
  const beforeClose = (action: DialogAction) =>
    new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(action === 'confirm'), 1000);
    });

  showConfirmDialog({
    title: t('title'),
    message: t('content3'),
    beforeClose,
  });
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('alert1')" @click="onClickAlert" />
    <van-cell is-link :title="t('alert2')" @click="onClickAlert2" />
    <van-cell is-link :title="t('confirm')" @click="onClickConfirm" />
  </demo-block>

  <demo-block card :title="t('roundButton')">
    <van-cell is-link :title="t('alert1')" @click="onClickRound" />
    <van-cell is-link :title="t('alert2')" @click="onClickRound2" />
  </demo-block>

  <demo-block card :title="t('beforeClose')">
    <van-cell is-link :title="t('beforeClose')" @click="onClickBeforeClose" />
  </demo-block>

  <demo-block card :title="t('useComponent')">
    <van-cell is-link :title="t('useComponent')" @click="show = true" />
    <van-dialog
      v-model:show="show"
      :title="t('title')"
      show-cancel-button
      :lazy-render="false"
    >
      <img :src="image" />
    </van-dialog>
  </demo-block>
</template>

<style lang="less">
.demo-dialog {
  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
}
</style>
