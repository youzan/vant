<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    message: '留言',
    autosize: '高度自适应',
    placeholder: '请输入留言',
  },
  'en-US': {
    sms: 'SMS',
    autosize: 'Auto Resize',
    placeholder: 'Message',
  },
};

const t = useTranslate(i18n);
const value = ref('');
</script>

<template>
  <demo-block :title="t('autosize')">
    <van-cell-group inset>
      <van-field
        v-model="value"
        autosize
        rows="1"
        type="textarea"
        :label="t('message')"
        :placeholder="t('placeholder')"
      />
    </van-cell-group>
  </demo-block>
</template>
