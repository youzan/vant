<script setup lang="ts">
import VanField from '..';
import VanCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    phone: '手机号',
    errorInfo: '错误提示',
    phoneError: '手机号格式错误',
    phonePlaceholder: '请输入手机号',
  },
  'en-US': {
    phone: 'Phone',
    errorInfo: 'Error Info',
    phoneError: 'Invalid phone',
    phonePlaceholder: 'Phone',
  },
});

const phone = ref('123');
const username = ref('');
</script>

<template>
  <demo-block :title="t('errorInfo')">
    <van-cell-group inset>
      <van-field
        v-model="username"
        error
        required
        :label="t('username')"
        :placeholder="t('usernamePlaceholder')"
      />
      <van-field
        v-model="phone"
        required
        :label="t('phone')"
        :placeholder="t('phonePlaceholder')"
        :error-message="t('phoneError')"
      />
    </van-cell-group>
  </demo-block>
</template>
