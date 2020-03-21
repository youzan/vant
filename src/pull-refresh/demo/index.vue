<template>
  <demo-section name="pull-refresh">
    <van-tabs>
      <van-tab :title="t('basicUsage')">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh(true)">
          <p>{{ tips }}</p>
        </van-pull-refresh>
      </van-tab>

      <van-tab :title="t('successTip')">
        <van-pull-refresh
          v-model="isLoading"
          :success-text="t('success')"
          @refresh="onRefresh(false)"
        >
          <p>{{ tips }}</p>
        </van-pull-refresh>
      </van-tab>

      <van-tab :title="t('customTips')">
        <van-pull-refresh
          v-model="isLoading"
          head-height="80"
          @refresh="onRefresh(true)"
        >
          <template #pulling="{ distance }">
            <img
              class="doge"
              src="https://b.yzcdn.cn/vant/doge.png"
              :style="{ transform: `scale(${distance / 80})` }"
            />
          </template>
          <template #loosing>
            <img src="https://b.yzcdn.cn/vant/doge.png" class="doge" />
          </template>
          <template #loading>
            <img src="https://b.yzcdn.cn/vant/doge-fire.jpg" class="doge" />
          </template>
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
      try: '下拉试试',
      text: '刷新次数',
      success: '刷新成功',
      successTip: '成功提示',
      customTips: '自定义提示',
    },
    'en-US': {
      try: 'Try it down',
      text: 'Refresh Count',
      success: 'Refresh success',
      successTip: 'Success Tip',
      customTips: 'Custom Tips',
    },
  },

  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },

  computed: {
    tips() {
      if (this.count) {
        return `${this.t('text')}: ${this.count}`;
      }

      return this.t('try');
    },
  },

  mounted() {
    this.preloadImage();
  },

  methods: {
    preloadImage() {
      // preload doge image
      const doge = new Image();
      const dogeFire = new Image();

      doge.src = 'https://b.yzcdn.cn/vant/doge.png';
      dogeFire.src = 'https://b.yzcdn.cn/vant/doge-fire.jpg';
    },

    onRefresh(showToast) {
      setTimeout(() => {
        if (showToast) {
          this.$toast(this.t('success'));
        }

        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-pull-refresh {
  background-color: @white;

  .van-pull-refresh {
    height: calc(100vh - 50px);
  }

  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }

  p {
    margin: 0;
    padding: @padding-md 0 0 @padding-md;
  }
}
</style>
