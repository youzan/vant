<template>
  <demo-block :title="t('basicUsage')">
    <van-form>
      <van-field required drole="other">
        <template #title>
          <van-text text="名称"></van-text>
        </template>
        <template #input>
          <van-fieldtextarea :value.sync="xx" :maxlength="10" :autosize="{maxHeight: 100, minHeight: 50}" placeholder="请输入" clearable></van-fieldtextarea>
        </template>
      </van-field>
      <div style="margin: 16px 16px 0">
        <van-button round block="blockb" type="info" native-type="submit" text="提交">
        </van-button>
      </div>
    </van-form>

    <!-- <van-fieldtextarea :value.sync="xxx" :maxlength="10" :autosize="{ maxHeight: 100, minHeight: 50 }" placeholder="请输入" clearable></van-fieldtextarea> -->
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      submit: '提交',
      username: '用户名',
      password: '密码',
      requireUsername: '请填写用户名',
      requirePassword: '请填写密码',
    },
    'en-US': {
      submit: 'Submit',
      username: 'Username',
      password: 'Password',
      requireUsername: 'Username is required',
      requirePassword: 'Password is required',
    },
  },

  data() {
    return {
      username: '',
      username666:'',
      password: '',
      xx: '',
      xxx: ''
    };
  },

  methods: {
    onSubmit(values) {
      console.log(4344343434);
      console.log('submit', values);
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
};
</script>
