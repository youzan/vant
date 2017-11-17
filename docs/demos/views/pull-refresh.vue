<template>
  <van-pull-refresh v-model="isLoading">
    <demo-section name="pull-refresh" background="#fff">
      <demo-block :title="$t('basicUsage')">
        <p>{{ $t('text') }}: {{ count }}</p>
      </demo-block>
    </demo-section>
  </van-pull-refresh>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '刷新次数'
    },
    'en-US': {
      text: 'Refresh Count'
    }
  },

  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  watch: {
    isLoading() {
      if (this.isLoading) {
        setTimeout(() => {
          Toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-pull-refresh {
  p {
    margin: 10px 0 0 15px;
  }
}
</style>
