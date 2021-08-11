<script setup lang="ts">
import { reactive } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
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
};

const t = useTranslate(i18n);
const state = reactive({
  text: '',
  phone: '',
  digit: '',
  number: '',
  password: '',
});
</script>

<template>
  <demo-block :title="t('customType')">
    <van-cell-group inset>
      <van-field
        v-model="state.text"
        :label="t('text')"
        :placeholder="t('textPlaceholder')"
      />
      <van-field
        v-model="state.phone"
        type="tel"
        :label="t('phone')"
        :placeholder="t('phonePlaceholder')"
      />
      <van-field
        v-model="state.digit"
        type="digit"
        :label="t('digit')"
        :placeholder="t('digitPlaceholder')"
      />
      <van-field
        v-model="state.number"
        type="number"
        :label="t('number')"
        :placeholder="t('numberPlaceholder')"
      />
      <van-field
        v-model="state.password"
        type="password"
        :label="t('password')"
        :placeholder="t('passwordPlaceholder')"
      />
    </van-cell-group>
  </demo-block>
</template>
