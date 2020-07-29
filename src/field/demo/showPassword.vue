<!--
 * @Author: last order
 * @Date: 2020-07-29 14:23:34
 * @LastEditTime: 2020-07-29 16:09:44
-->
<template>
  <demo-block :title="t('showPassword')">
    <van-cell-group>
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('placeholder')"
        show-password
      />
    </van-cell-group>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '密码',
      placeholder: '可切换状态的密码输入框',
    },
    'en-US': {
      label: 'Password',
      placeholder: 'toggle input icon',
    },
  },

  data() {
    return {
      value: '',
    };
  },
};
</script>
