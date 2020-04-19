<template>
  <demo-block :title="t('customType')">
    <van-field
      v-model="text"
      :label="t('text')"
      :placeholder="t('textPlaceholder')"
    />
    <van-field
      v-model="phone"
      type="tel"
      :label="t('phone')"
      :placeholder="t('phonePlaceholder')"
    />
    <van-field
      v-model="digit"
      type="digit"
      :label="t('digit')"
      :placeholder="t('digitPlaceholder')"
    />
    <van-field
      v-model="number"
      type="number"
      :label="t('number')"
      :placeholder="t('numberPlaceholder')"
    />
    <van-field
      v-model="password"
      type="password"
      :label="t('password')"
      :placeholder="t('passwordPlaceholder')"
    />
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      digit: '整数',
      phone: '手机号',
      number: '数字',
      customType: '自定义类型',
      smsPlaceholder: '请输入短信验证码',
      textPlaceholder: '请输入文本',
      digitPlaceholder: '请输入整数',
      phonePlaceholder: '请输入手机号',
      numberPlaceholder: '请输入数字（支持小数）',
    },
    'en-US': {
      text: 'Text',
      digit: 'Digit',
      phone: 'Phone',
      number: 'Number',
      customType: 'Custom Type',
      smsPlaceholder: 'SMS',
      textPlaceholder: 'Text',
      digitPlaceholder: 'Digit',
      phonePlaceholder: 'Phone',
      numberPlaceholder: 'Number',
    },
  },

  data() {
    return {
      text: '',
      phone: '',
      digit: '',
      number: '',
      password: '',
    };
  },
};
</script>
