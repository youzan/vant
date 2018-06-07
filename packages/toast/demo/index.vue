<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-button @click="showToast">{{ $t('title1') }}</van-button>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-button @click="showLoadingToast">{{ $t('title2') }}</van-button>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-button @click="showSuccessToast">{{ $t('success') }}</van-button>
      <van-button @click="showFailToast">{{ $t('fail') }}</van-button>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-button @click="showCustomizedToast">{{ $t('advancedUsage') }}</van-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      loading: '加载中',
      title1: '文字提示',
      title2: '加载提示',
      title3: '成功/失败提示',
      success: '成功提示',
      fail: '失败提示',
      text1: '我是提示文案，建议不超过十五字~',
      text2: '成功文案',
      text3: '失败文案',
      text4: second => `倒计时 ${second} 秒`
    },
    'en-US': {
      title1: 'Text',
      title2: 'Loading',
      title3: 'Success/Fail',
      success: 'Success',
      fail: 'Fail',
      text1: 'Some messages',
      text2: 'Success',
      text3: 'Fail',
      text4: second => `${second} seconds`
    }
  },

  methods: {
    showToast() {
      this.$toast(this.$t('text1'));
    },

    showLoadingToast() {
      this.$toast.loading({ mask: true, message: this.$t('loading') + '...' });
    },

    showSuccessToast() {
      this.$toast.success(this.$t('text2'));
    },

    showFailToast() {
      this.$toast.fail(this.$t('text3'));
    },

    showCustomizedToast(duration) {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: this.$t('text4', 3)
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = this.$t('text4', second);
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    }
  }
};
</script>

<style lang="postcss">
.demo-toast {
  .van-button {
    margin-left: 15px;
  }
}
</style>
