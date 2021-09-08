<script setup lang="ts">
import VanCell from '../../cell';
import VanIcon from '../../icon';
import { Notify } from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { NotifyType } from '../Notify';

const VanNotify = Notify.Component;

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
    componentCall: '组件调用',
    customDuration: '自定义时长',
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
    componentCall: 'Component Call',
    customDuration: 'Custom Duration',
  },
});

const show = ref(false);

const showNotify = () => {
  Notify(t('content'));
};

const showCustomColor = () => {
  Notify({
    color: '#ad0000',
    message: t('customColor'),
    background: '#ffe1e1',
  });
};

const showCustomDuration = () => {
  Notify({
    message: t('customDuration'),
    duration: 1000,
  });
};

const showType = (type: NotifyType) => {
  Notify({
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
    <van-cell is-link :title="t('basicUsage')" @click="showNotify" />
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
      :title="t('customDuration')"
      @click="showCustomDuration"
    />
  </demo-block>

  <demo-block card :title="t('componentCall')">
    <van-cell is-link :title="t('componentCall')" @click="showComponentCall" />

    <van-notify v-model:show="show" type="success">
      <van-icon name="bell" style="margin-right: 4px" />
      <span>{{ t('content') }}</span>
    </van-notify>
  </demo-block>
</template>
