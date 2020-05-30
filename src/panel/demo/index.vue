<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
      </van-panel>
    </demo-block>

    <demo-block :title="t('advancedUsage')">
      <van-panel :title="t('title')" :desc="t('desc')" :status="t('status')">
        <div>{{ t('content') }}</div>
        <template #footer>
          <van-button size="small">{{ t('button') }}</van-button>
          <van-button size="small" type="danger">
            {{ t('button') }}
          </van-button>
        </template>
      </van-panel>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="less">
.demo-panel {
  .van-panel__footer {
    text-align: right;

    .van-button {
      margin-left: 5px;
    }
  }

  .van-panel__content {
    padding: 20px;
  }
}
</style>
