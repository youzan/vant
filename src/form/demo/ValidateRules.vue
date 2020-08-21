<template>
  <demo-block :title="t('title')">
    <van-form validate-first @sumbit="onSubmit" @failed="onFailed">
      <van-field
        v-model="value1"
        name="pattern"
        :label="t('label')"
        :rules="[{ pattern, message: t('message') }]"
        :placeholder="t('pattern')"
      />
      <van-field
        v-model="value2"
        name="validator"
        :label="t('label')"
        :rules="[{ validator, message: t('message') }]"
        :placeholder="t('validator')"
      />
      <van-field
        v-model="value3"
        name="asyncValidator"
        :label="t('label')"
        :rules="[{ validator: asyncValidator, message: t('message') }]"
        :placeholder="t('asyncValidator')"
      />
      <div style="margin: 16px 16px 0;">
        <van-button round block type="primary" native-type="submit">
          {{ t('submit') }}
        </van-button>
      </div>
    </van-form>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '文本',
      title: '校验规则',
      submit: '提交',
      message: '请输入正确内容',
      pattern: '正则校验',
      validator: '函数校验',
      validating: '验证中...',
      asyncValidator: '异步函数校验',
    },
    'en-US': {
      label: 'Label',
      title: 'Validate Rules',
      submit: 'Submit',
      message: 'Error message',
      pattern: 'Use pattern',
      validator: 'Use validator',
      validating: 'Validating...',
      asyncValidator: 'Use async validator',
    },
  },

  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/,
    };
  },

  methods: {
    validator(val) {
      return /1\d{10}/.test(val);
    },

    asyncValidator(val) {
      return new Promise((resolve) => {
        this.$toast.loading(this.t('validating'));

        setTimeout(() => {
          this.$toast.clear();
          resolve(val === '1234');
        }, 1000);
      });
    },

    onSubmit(values) {
      console.log('submit', values);
    },

    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
};
</script>
