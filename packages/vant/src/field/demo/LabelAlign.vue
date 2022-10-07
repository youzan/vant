<script setup lang="ts">
import VanField from '..';
import VanCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    text: '手机号',
    labelAlign: '输入框文本位置',
    alignPlaceHolder: '请输入手机号',
  },
  'en-US': {
    text: 'Tel',
    labelAlign: 'Label Align',
    alignPlaceHolder: 'Please input tel number',
  },
});

const value = ref('');
</script>

<template>
  <demo-block :title="t('labelAlign')">
    <van-cell-group inset>
      <van-field
        v-model="value"
        :label="t('text')"
        :placeholder="t('alignPlaceHolder')"
        label-align="top"
      />
    </van-cell-group>
  </demo-block>
</template>
