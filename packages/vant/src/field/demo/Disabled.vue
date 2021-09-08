<script setup lang="ts">
import VanField from '..';
import VanCellGroup from '../../cell-group';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    text: '文本',
    disabled: '禁用输入框',
    inputReadonly: '输入框只读',
    inputDisabled: '输入框已禁用',
  },
  'en-US': {
    text: 'Text',
    inputReadonly: 'Input Readonly',
    inputDisabled: 'Input Disabled',
  },
});
</script>

<template>
  <demo-block :title="t('disabled')">
    <van-cell-group inset>
      <van-field
        :model-value="t('inputReadonly')"
        :label="t('text')"
        readonly
      />
      <van-field
        :model-value="t('inputDisabled')"
        :label="t('text')"
        disabled
      />
    </van-cell-group>
  </demo-block>
</template>
