<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
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
      text: '刷新次数',
      success: '刷新成功'
    },
    'en-US': {
      text: 'Refresh Count',
      success: 'Refresh success'
    }
  },

  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast(this.$t('success'));
        this.isLoading = false;
        this.count++;
      }, 500);
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
