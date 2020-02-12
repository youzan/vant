<template>
  <demo-block :title="$t('title')">
    <van-form validate-first @sumbit="onSubmit" @failed="onFailed">
      <van-field
        v-model="phone"
        name="phone"
        :label="$t('phone')"
        :rules="phoneRules"
        :placeholder="$t('phone')"
      />
      <van-field
        v-model="code"
        name="code"
        :label="$t('code')"
        :rules="codeRules"
        :placeholder="$t('code')"
      />
      <div style="margin: 16px 16px 0;">
        <van-button round block type="info" native-type="submit">
          {{ $t('submit') }}
        </van-button>
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
      validating: '验证中...',
      requireCode: '请输入验证码',
      requirePhone: '请输入手机号',
      incorrectCode: '验证码错误',
      incorrectPhone: '手机号格式错误',
    },
    'en-US': {
      code: 'Code',
      phone: 'Phone',
      title: 'Validate Rules',
      submit: 'Submit',
      validating: 'Validating...',
      requireCode: 'Code is required',
      requirePhone: 'Phone is required',
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
    this.phoneRules = [
      { required: true, message: this.$t('requirePhone') },
      {
        validator: this.phoneValidator,
        message: this.$t('incorrectPhone'),
      },
    ];

    this.codeRules = [
      { required: true, message: this.$t('requireCode') },
      {
        validator: this.codeValidator,
        message: this.$t('incorrectCode'),
      },
    ];
  },

  methods: {
    phoneValidator(val) {
      return /1\d{10}/.test(val);
    },

    codeValidator(val) {
      return new Promise(resolve => {
        this.$toast.loading(this.$t('validating'));

        setTimeout(() => {
          this.$toast.clear();
          resolve(/\d{6}/.test(val));
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
