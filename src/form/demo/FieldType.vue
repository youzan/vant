<template>
  <demo-block :title="$t('fieldType')">
    <van-form>
      <van-field
        name="checkbox"
        :label="$t('checkbox')"
        :rules="[{ required: true, message: $t('requireCheckbox') }]"
      >
        <van-checkbox v-model="checkbox" slot="input" shape="square" />
      </van-field>
      <div style="margin: 16px;">
        <van-button type="info" round block>{{ $t('submit') }}</van-button>
      </div>
    </van-form>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      submit: '提交',
      checkbox: '复选框',
      fieldType: '表单项类型',
      requireCheckbox: '请勾选复选框',
    },
    'en-US': {
      submit: 'Submit',
      checkbox: 'Checkbox',
      fieldType: 'Field Type',
      requireCheckbox: 'Checkbox is required',
    },
  },

  data() {
    return {
      checkbox: false,
    };
  },
};
</script>
