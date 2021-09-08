<script setup lang="ts">
import VanField from '..';
import VanCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    message: '留言',
    placeholder: '请输入留言',
    showWordLimit: '显示字数统计',
  },
  'en-US': {
    message: 'Message',
    placeholder: 'Message',
    showWordLimit: 'Show Word Limit',
  },
});

const value = ref('');
</script>

<template>
  <demo-block :title="t('showWordLimit')">
    <van-cell-group inset>
      <van-field
        v-model="value"
        autosize
        show-word-limit
        rows="2"
        type="textarea"
        maxlength="50"
        :label="t('message')"
        :placeholder="t('placeholder')"
      />
    </van-cell-group>
  </demo-block>
</template>
