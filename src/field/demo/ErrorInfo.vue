<template>
  <demo-block :title="t('errorInfo')">
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
  </demo-block>
</template>

<script>
export default {
  i18n: {
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
  },

  data() {
    return {
      phone: '123',
      username: '',
    };
  },
};
</script>
