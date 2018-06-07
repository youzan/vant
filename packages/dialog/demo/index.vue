<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-button @click="onClickAlert">Alert</van-button>
      <van-button @click="onClickAlert2">{{ $t('alert2') }}</van-button>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-button @click="onClickConfirm">Confirm</van-button>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-button @click="show = true">{{ $t('advancedUsage') }}</van-button>
      <van-dialog
        v-model="show"
        show-cancel-button
        :before-close="beforeClose"
      >
        <van-field
          v-model="username"
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
        />
        <van-field
          v-model="password"
          type="password"
          :label="$t('password')"
          :placeholder="$t('passwordPlaceholder')"
        />
      </van-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '消息提示',
      title2: '消息确认',
      alert2: '无标题 Alert'
    },
    'en-US': {
      title1: 'Alert dialog',
      title2: 'Confirm dialog',
      alert2: 'Alert without title'
    }
  },

  data() {
    return {
      show: false,
      username: '',
      password: ''
    };
  },

  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    onClickAlert2() {
      this.$dialog.alert({
        message: this.$t('content')
      });
    },

    onClickConfirm() {
      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-dialog {
  .van-doc-demo-block > .van-button {
    margin: 15px;
  }
}
</style>
