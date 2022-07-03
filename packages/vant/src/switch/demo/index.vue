<script setup lang="ts">
import VanSwitch from '..';
import VanCell from '../../cell';
import VanIcon from '../../icon';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { showConfirmDialog } from '../../dialog';

const t = useTranslate({
  'zh-CN': {
    title: '标题',
    confirm: '提醒',
    message: '是否切换开关？',
    withCell: '搭配单元格使用',
    customSize: '自定义大小',
    customNode: '自定义按钮',
    customColor: '自定义颜色',
    asyncControl: '异步控制',
  },
  'en-US': {
    title: 'Title',
    confirm: 'Confirm',
    message: 'Are you sure to toggle switch?',
    withCell: 'Inside a Cell',
    customSize: 'Custom Size',
    customNode: 'Custom Node',
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
  showConfirmDialog({
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
    <van-switch v-model="checked2" size="22px" />
  </demo-block>

  <demo-block :title="t('customColor')">
    <van-switch
      v-model="checked3"
      active-color="#ee0a24"
      inactive-color="#dcdee0"
    />
  </demo-block>

  <demo-block :title="t('customNode')">
    <van-switch v-model="checked3">
      <template #node>
        <div class="icon-wrapper">
          <van-icon :name="checked3 ? 'success' : 'cross'" />
        </div>
      </template>
    </van-switch>
  </demo-block>

  <demo-block :title="t('asyncControl')">
    <van-switch :model-value="checked4" @update:model-value="onUpdateValue" />
  </demo-block>

  <demo-block :title="t('withCell')">
    <van-cell center :title="t('title')">
      <template #right-icon>
        <van-switch v-model="checked5" />
      </template>
    </van-cell>
  </demo-block>
</template>

<style lang="less">
.demo-switch {
  .van-switch {
    margin-left: var(--van-padding-md);
  }

  .icon-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 18px;

    .van-icon {
      line-height: 32px;
    }

    .van-icon-success {
      color: var(--van-blue);
    }

    .van-icon-cross {
      color: var(--van-gray-5);
    }
  }
}
</style>
