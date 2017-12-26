<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-field v-model="value" :placeholder="$t('usernamePlaceholder')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-cell-group>
        <van-field
          v-model="username"
          :label="$t('username')"
          icon="clear"
          :placeholder="$t('usernamePlaceholder')"
          required
          @click-icon="username = ''"
        />

        <van-field
          v-model="password"
          type="password"
          :label="$t('password')"
          :placeholder="$t('passwordPlaceholder')"
          required
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-cell-group>
        <van-field :value="$t('inputDisabled')" :label="$t('username')" disabled />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-cell-group>
        <van-field :label="$t('username')" :placeholder="$t('usernamePlaceholder')" error />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title5')">
      <van-cell-group>
        <van-field
          v-model="message"
          :label="$t('message')"
          type="textarea"
          :placeholder="$t('messagePlaceholder')"
          rows="1"
          autosize
        />
      </van-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '自定义类型',
      title3: '禁用输入框',
      title4: '错误提示',
      title5: '高度自适应',
      username: '用户名',
      password: '密码',
      message: '留言',
      usernamePlaceholder: '请输入用户名',
      passwordPlaceholder: '请输入密码',
      messagePlaceholder: '请输入留言',
      inputDisabled: '输入框已禁用'
    },
    'en-US': {
      title2: 'Custom type',
      title3: 'Disabled',
      title4: 'Error info',
      title5: 'Auto resize',
      username: 'Username',
      password: 'Password',
      message: 'Message',
      usernamePlaceholder: 'Username',
      passwordPlaceholder: 'Password',
      messagePlaceholder: 'Message',
      inputDisabled: 'Disabled'
    }
  },

  data() {
    return {
      value: '',
      password: '',
      username: '',
      message: ''
    };
  }
};
</script>

<style lang="postcss">
.demo-field {
  padding-bottom: 30px;
}
</style>
