<script setup lang="ts">
import VanField from '..';
import VanCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    label: '文本',
    top: '顶部对齐',
    center: '居中对齐',
    left: '左对齐',
    right: '右对齐',
    labelAlign: '输入框文本位置',
  },
  'en-US': {
    label: 'Label',
    top: 'Align Top',
    center: 'Align Center',
    left: 'Align Left',
    right: 'Align Right',
    labelAlign: 'Label Align',
  },
});

const value = ref('');
</script>

<template>
  <demo-block :title="t('labelAlign')">
    <van-cell-group inset>
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('top')"
        label-align="top"
      />
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('left')"
        label-align="left"
      />
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('center')"
        label-align="center"
      />
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('right')"
        label-align="right"
      />
    </van-cell-group>
  </demo-block>
</template>
