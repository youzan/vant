<template>
  <demo-block :title="t('insertButton')">
    <van-field
      v-model="sms"
      center
      clearable
      :label="t('sms')"
      :placeholder="t('smsPlaceholder')"
    >
      <template #button>
        <van-button size="small" type="primary">
          {{ t('sendSMS') }}
        </van-button>
      </template>
    </van-field>
  </demo-block>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    sms: '短信验证码',
    sendSMS: '发送验证码',
    insertButton: '插入按钮',
    smsPlaceholder: '请输入短信验证码',
  },
  'en-US': {
    sms: 'SMS',
    sendSMS: 'Send SMS',
    insertButton: 'Insert Button',
    smsPlaceholder: 'SMS',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const sms = ref('');

    return { t, sms };
  },
};
</script>
