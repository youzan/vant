<template>
  <demo-block :title="$t('title')">
    <van-form>
      <van-field
        v-model="value"
        :label="$t('phone')"
        :rules="rules"
        :placeholder="$t('phone')"
        @submit="onSubmit"
        @failed="onFailed"
      />
      <div style="margin: 16px 16px 0;">
        <van-button type="info" round block>{{ $t('submit') }}</van-button>
      </div>
    </van-form>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      phone: '手机号',
      title: '校验规则',
      submit: '提交',
      required: '请输入手机号',
      incorrectFormat: '手机号格式错误',
    },
    'en-US': {
      phone: 'Phone',
      title: 'Validate Rules',
      submit: 'Submit',
      required: 'Phone is required',
      incorrectFormat: 'Incorrect format',
    },
  },

  data() {
    return {
      value: '',
    };
  },

  created() {
    this.rules = [
      { required: true, message: this.$t('required') },
      {
        validator: val => /1\d{10}/.test(val),
        message: this.$t('incorrectFormat'),
      },
    ];
  },

  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },

    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
};
</script>
