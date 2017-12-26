<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-button @click="onClickAlert">Alert</van-button>
      <van-button @click="onClickAlert2">{{ $t('alert2') }}</van-button>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-button @click="onClickConfirm">Confirm</van-button>
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

  methods: {
    onClickAlert() {
      Dialog.alert({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    onClickAlert2() {
      Dialog.alert({
        message: this.$t('content')
      });
    },

    onClickConfirm() {
      Dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content')
      });
    }
  }
};
</script>

<style lang="postcss">
.demo-dialog {
  .van-button {
    margin: 15px;
  }
}
</style>
