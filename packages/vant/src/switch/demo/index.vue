<script setup lang="ts">
import VanSwitch from '..';
import VanCell from '../../cell';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { Dialog } from '../../dialog';

const t = useTranslate({
  'zh-CN': {
    title: '标题',
    confirm: '提醒',
    message: '是否切换开关？',
    withCell: '搭配单元格使用',
    customSize: '自定义大小',
    customColor: '自定义颜色',
    asyncControl: '异步控制',
  },
  'en-US': {
    title: 'Title',
    confirm: 'Confirm',
    message: 'Are you sure to toggle switch?',
    withCell: 'Inside a Cell',
    customSize: 'Custom Size',
    customColor: 'Custom Color',
    asyncControl: 'Async Control',
  },
});

const checked = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
const checked4 = ref(true);
const checked5 = ref(true);

const onUpdateValue = (checked: boolean) => {
  Dialog.confirm({
    title: t('title'),
    message: t('message'),
  }).then(() => {
    checked4.value = checked;
  });
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-switch v-model="checked" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-switch v-model="checked" disabled />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <van-switch v-model="checked" loading />
  </demo-block>

  <demo-block :title="t('customSize')">
    <van-switch v-model="checked2" size="24px" />
  </demo-block>

  <demo-block :title="t('customColor')">
    <van-switch
      v-model="checked3"
      active-color="#ee0a24"
      inactive-color="#dcdee0"
    />
  </demo-block>

  <demo-block :title="t('asyncControl')">
    <van-switch :model-value="checked4" @update:model-value="onUpdateValue" />
  </demo-block>

  <demo-block :title="t('withCell')">
    <van-cell center :title="t('title')">
      <template #right-icon>
        <van-switch v-model="checked5" size="24" />
      </template>
    </van-cell>
  </demo-block>
</template>

<style lang="less">
.demo-switch {
  .van-switch {
    margin-left: var(--van-padding-md);
  }
}
</style>
