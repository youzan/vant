<template>
  <demo-block :title="$t('fieldType')">
    <van-form @submit="onSubmit">
      <van-field name="checkbox" :label="$t('checkbox')">
        <van-checkbox v-model="checkbox" slot="input" shape="square" />
      </van-field>

      <van-field name="switch" :label="$t('switch')">
        <van-switch v-model="switchChecked" slot="input" size="24" />
      </van-field>

      <van-field name="rate" :label="$t('rate')">
        <van-rate v-model="rate" slot="input" />
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
      rate: '评分',
      submit: '提交',
      switch: '开关',
      checkbox: '复选框',
      fieldType: '表单项类型',
      requireCheckbox: '请勾选复选框',
    },
    'en-US': {
      rate: 'Rate',
      submit: 'Submit',
      switch: 'Switch',
      checkbox: 'Checkbox',
      fieldType: 'Field Type',
      requireCheckbox: 'Checkbox is required',
    },
  },

  data() {
    return {
      rate: 3,
      checkbox: false,
      switchChecked: false,
    };
  },

  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>
