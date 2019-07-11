<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button
        type="primary"
        :text="$t('showOverlay')"
        style="margin-left: 15px;"
        @click="show = true"
      />

      <van-overlay
        :show="show"
        @click="show = false"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      showOverlay: '显示遮罩层'
    },
    'en-US': {
      showOverlay: 'Show Overlay'
    }
  },

  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="less">
.demo-skeleton {
  background-color: #fff;

  .van-switch {
    margin: 0 15px 10px;
  }

  .demo-preview {
    display: flex;
    padding: 0 15px;

    .demo-content {
      padding-top: 6px;

      h3 {
        margin: 0;
        font-size: 18px;
        line-height: 20px;
      }

      p {
        margin: 13px 0 0;
        font-size: 14px;
        line-height: 20px;
      }
    }

    img {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: 15px;
    }
  }
}
</style>
