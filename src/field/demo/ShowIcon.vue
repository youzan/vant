<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    text: '文本',
    showIcon: '显示图标',
    showClearIcon: '显示清除图标',
  },
  'en-US': {
    text: 'Text',
    showIcon: 'Show Icon',
    showClearIcon: 'Show Clear Icon',
  },
};

const t = useTranslate(i18n);
const icon1 = ref('');
const icon2 = ref('123');
</script>

<template>
  <demo-block :title="t('showIcon')">
    <van-cell-group inset>
      <van-field
        v-model="icon1"
        :label="t('text')"
        left-icon="smile-o"
        right-icon="warning-o"
        :placeholder="t('showIcon')"
      />
      <van-field
        v-model="icon2"
        clearable
        :label="t('text')"
        left-icon="music-o"
        :placeholder="t('showClearIcon')"
      />
    </van-cell-group>
  </demo-block>
</template>
