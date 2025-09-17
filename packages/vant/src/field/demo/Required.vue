<script setup lang="ts">
import VanField from '..';
import VanCellGroup from '../../cell-group';
import VanForm from '../../form';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    phone: '手机号',
    required: '必填星号',
    autoRequired: '自动展示星号',
    phonePlaceholder: '请输入手机号',
    usernamePlaceholder: '请输入用户名',
  },
  'en-US': {
    phone: 'Phone',
    required: 'Required',
    autoRequired: 'Auto Required',
    phonePlaceholder: 'Phone',
    usernamePlaceholder: 'Username',
  },
});

const phone = ref('123');
const username = ref('');
</script>

<template>
  <demo-block :title="t('required')">
    <van-cell-group inset>
      <van-field
        v-model="username"
        required
        :label="t('username')"
        :placeholder="t('usernamePlaceholder')"
      />
      <van-field
        v-model="phone"
        required
        :label="t('phone')"
        :placeholder="t('phonePlaceholder')"
      />
    </van-cell-group>
  </demo-block>

  <demo-block :title="t('autoRequired')">
    <van-cell-group inset>
      <van-form required="auto">
        <van-field
          v-model="username"
          :rules="[{ required: true }]"
          :label="t('username')"
          :placeholder="t('usernamePlaceholder')"
        />
        <van-field
          v-model="phone"
          :rules="[{ required: false }]"
          :label="t('phone')"
          :placeholder="t('phonePlaceholder')"
        />
      </van-form>
    </van-cell-group>
  </demo-block>
</template>
