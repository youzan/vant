<template>
  <demo-block :title="t('insertButton')">
    <van-field
      v-model="sms"
      center
      :label="t('sms')"
      :placeholder="t('smsPlaceholder')"
    >
      <template #input>
        <van-fieldinput :value.sync="sms2" clearable></van-fieldinput>
      </template>
    </van-field>
    <van-field
      v-model="sms5"
      center
      :label="t('sms')"
      :placeholder="t('smsPlaceholder')"
    >
      <template #input>
        <van-fieldtextarea :value.sync="sms222" clearable show-word-limit maxlength="100"  autosize></van-fieldtextarea>
      </template>
    </van-field>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      sms: '短信验证码',
      sendSMS: '发送验证码',
      insertButton: '新input',
      smsPlaceholder: '请输入短信验证码',
    },
    'en-US': {
      sms: 'SMS',
      sendSMS: 'Send SMS',
      insertButton: 'new input',
      smsPlaceholder: 'SMS',
    },
  },

  data() {
    return {
      sms: '',
      sms2: '',
      sms5: '',
      sms222: ''
    };
  },
};
</script>
