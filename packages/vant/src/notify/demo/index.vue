<script setup lang="ts">
import VanCell from '../../cell';
import VanIcon from '../../icon';
import { ref } from 'vue';
import { showNotify, Notify as VanNotify, type NotifyType } from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    primary: '主要通知',
    success: '成功通知',
    danger: '危险通知',
    warning: '警告通知',
    content: '通知内容',
    notifyType: '通知类型',
    customColor: '自定义颜色',
    customNotify: '自定义配置',
    useComponent: '使用 Notify 组件',
    customDuration: '自定义时长',
    customPosition: '自定义位置',
  },
  'en-US': {
    primary: 'Primary',
    success: 'Success',
    danger: 'Danger',
    warning: 'Warning',
    content: 'Notify Message',
    notifyType: 'Notify Type',
    customColor: 'Custom Color',
    customNotify: 'Custom Notify',
    useComponent: 'Use Notify Component',
    customDuration: 'Custom Duration',
    customPosition: 'Custom Position',
  },
});

const show = ref(false);

const showBasicNotify = () => {
  showNotify(t('content'));
};

const showCustomColor = () => {
  showNotify({
    color: '#ad0000',
    message: t('customColor'),
    background: '#ffe1e1',
  });
};

const showCustomDuration = () => {
  showNotify({
    message: t('customDuration'),
    duration: 1000,
  });
};

const showCustomPosition = () => {
  showNotify({
    message: t('customPosition'),
    position: 'bottom',
  });
};

const showType = (type: NotifyType) => {
  showNotify({
    message: t('content'),
    type,
  });
};

const showComponentCall = () => {
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, 2000);
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('basicUsage')" @click="showBasicNotify" />
  </demo-block>

  <demo-block card :title="t('notifyType')">
    <van-cell is-link :title="t('primary')" @click="showType('primary')" />
    <van-cell is-link :title="t('success')" @click="showType('success')" />
    <van-cell is-link :title="t('danger')" @click="showType('danger')" />
    <van-cell is-link :title="t('warning')" @click="showType('warning')" />
  </demo-block>

  <demo-block card :title="t('customNotify')">
    <van-cell is-link :title="t('customColor')" @click="showCustomColor" />
    <van-cell
      is-link
      :title="t('customPosition')"
      @click="showCustomPosition"
    />
    <van-cell
      is-link
      :title="t('customDuration')"
      @click="showCustomDuration"
    />
  </demo-block>

  <demo-block card :title="t('useComponent')">
    <van-cell is-link :title="t('useComponent')" @click="showComponentCall" />

    <van-notify v-model:show="show" type="success">
      <van-icon name="bell" style="margin-right: 4px" />
      <span>{{ t('content') }}</span>
    </van-notify>
  </demo-block>
</template>
