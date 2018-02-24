<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <p class="page-desc">{{ $t('text') }}</p>
      <van-waterfall v-model="loading" :disabled="disabled" immediate-check @reach-bottom="onReachBottom">
        <van-cell v-for="item in list" :key="item" :title="item + ''" />
      </van-waterfall>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '当即将滚动到元素底部时，会自动加载更多'
    },
    'en-US': {
      text: 'This list will load items will scroll to bottom.'
    }
  },

  data() {
    return {
      list: [],
      loading: false,
      disabled: false
    };
  },

  methods: {
    onReachBottom() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.disabled = true;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="postcss">
.demo-waterfall {
  .van-cell {
    text-align: center;
  }

  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
}
</style>
