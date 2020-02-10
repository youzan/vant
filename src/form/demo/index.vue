<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="username"
          :rules="[{ required: true, message: 'username is required' }]"
          placeholder="username"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="password"
          :rules="[{ required: true, message: 'password is required' }]"
          placeholder="password"
        />
        <van-field
          name="agree"
          label="agree"
          :rules="[{ required: true, message: 'need agree' }]"
        >
          <van-checkbox v-model="agree" slot="input" shape="square" />
        </van-field>
        <van-button type="primary">submit</van-button>
      </van-form>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {},
    'en-US': {},
  },

  data() {
    return {
      username: '',
      password: '',
      agree: true,
    };
  },

  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-form {
  .van-button {
    margin: 15px 0 0 15px;
  }
}
</style>
