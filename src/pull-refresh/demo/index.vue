<template>
  <demo-section name="pull-refresh">
    <van-tabs>
      <van-tab :title="$t('basicUsage')">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh(true)">
          <p>{{ tips }}</p>
        </van-pull-refresh>
      </van-tab>

      <van-tab :title="$t('successTip')">
        <van-pull-refresh
          v-model="isLoading"
          :success-text="$t('success')"
          @refresh="onRefresh(false)"
        >
          <p>{{ tips }}</p>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '刷新次数',
      success: '刷新成功',
      successTip: '刷新成功提示',
      try: '下拉试试'
    },
    'en-US': {
      text: 'Refresh Count',
      success: 'Refresh success',
      successTip: 'Success Tip',
      try: 'Try it down'
    }
  },

  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  computed: {
    tips() {
      if (this.count) {
        return `${this.$t('text')}: ${this.count}`;
      }

      return this.$t('try');
    }
  },

  methods: {
    onRefresh(showToast) {
      setTimeout(() => {
        if (showToast) {
          this.$toast(this.$t('success'));
        }

        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-pull-refresh {
  background-color: @white;

  .van-pull-refresh {
    &,
    &__track {
      height: calc(100vh - 50px);
    }
  }

  p {
    margin: 0;
    padding: @padding-md 0 0 @padding-md;
  }
}
</style>
