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

    <demo-block :title="$t('asyncClose')">
      <van-button
        type="primary"
        plain
        @click="onClickAsyncClose"
      >
        {{ $t('asyncClose') }}
      </van-button>
    </demo-block>

    <demo-block :title="$t('componentCall')">
      <van-button
        type="danger"
        plain
        @click="show = true"
      >
        {{ $t('componentCall') }}
      </van-button>
      <van-dialog
        v-model="show"
        :title="$t('title')"
        show-cancel-button
        :lazy-render="false"
      >
        <img :src="image">
      </van-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      alert1: '提示弹窗',
      alert2: '提示弹窗（无标题）',
      confirm: '确认弹窗',
      asyncClose: '异步关闭',
      componentCall: '组件调用',
      content: '代码是写出来给人看的，附带能在机器上运行'
    },
    'en-US': {
      alert1: 'Alert',
      alert2: 'Alert without title',
      confirm: 'Confirm dialog',
      asyncClose: 'Async Close',
      componentCall: 'Component Call',
    }
  },

  data() {
    return {
      show: false,
      currentRate: 0,
      image: 'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
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

    onClickAsyncClose() {
      function beforeClose(action, done) {
        if (action === 'confirm') {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }

      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content'),
        beforeClose
      });
    }
  }
};
</script>

<style lang="less">
.demo-dialog {
  .van-doc-demo-block > .van-button {
    margin-left: 15px;
  }

  img {
    width: 100%;
    padding: 25px 20px 0;
    box-sizing: border-box;
  }
}
</style>
