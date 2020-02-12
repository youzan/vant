<template>
  <demo-block :title="$t('title')">
    <van-form validate-first @sumbit="onSubmit" @failed="onFailed">
      <van-field
        v-model="phone"
        name="phone"
        :label="$t('phone')"
        :rules="rules.phone"
        :placeholder="$t('phone')"
      />
      <van-field
        v-model="code"
        name="code"
        :label="$t('code')"
        :rules="rules.code"
        :placeholder="$t('code')"
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
      code: '验证码',
      phone: '手机号',
      title: '校验规则',
      submit: '提交',
      required: '请输入手机号',
      validating: '验证中...',
      incorrectCode: '验证码错误',
      incorrectPhone: '手机号格式错误',
    },
    'en-US': {
      code: 'Code',
      phone: 'Phone',
      title: 'Validate Rules',
      submit: 'Submit',
      validating: 'Validating...',
      incorrectCode: 'Incorrect code',
      incorrectPhone: 'Incorrect phone',
    },
  },

  data() {
    return {
      code: '',
      phone: '',
    };
  },

  created() {
    this.rules = {
      phone: [
        { required: true, message: this.$t('required') },
        {
          validator: val => /1\d{10}/.test(val),
          message: this.$t('incorrectPhone'),
        },
      ],
      code: [
        {
          validator: val =>
            new Promise(resolve => {
              this.$toast.loading(this.$t('validating'));

              setTimeout(() => {
                this.$toast.clear();
                resolve(/\d{6}/.test(val));
              }, 1000);
            }),
          message: this.$t('incorrectCode'),
        },
      ],
    };
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
