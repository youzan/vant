<template>
  <demo-section>
    <demo-block :title="$t('alert1')">
      <van-button
        type="primary"
        plain
        @click="onClickAlert"
      >
        {{ $t('alert1') }}
      </van-button>
      <van-button
        type="primary"
        plain
        @click="onClickAlert2"
      >
        {{ $t('alert2') }}
      </van-button>
    </demo-block>

    <demo-block :title="$t('confirm')">
      <van-button
        type="primary"
        plain
        @click="onClickConfirm"
      >
        {{ $t('confirm') }}
      </van-button>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-button
        type="danger"
        plain
        @click="show = true"
      >
        {{ $t('advancedUsage') }}
      </van-button>
      <van-dialog
        v-model="show"
        show-cancel-button
        :lazy-render="false"
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
      alert1: '消息提示',
      alert2: '无标题提示',
      confirm: '消息确认',
      content: '有赞是一家零售科技公司，致力于成为商家服务领域里最被信任的引领者'
    },
    'en-US': {
      alert1: 'Alert',
      alert2: 'Alert without title',
      confirm: 'Confirm dialog'
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

<style lang="less">
.demo-dialog {
  .van-doc-demo-block > .van-button {
    margin-left: 15px;
  }
}
</style>
