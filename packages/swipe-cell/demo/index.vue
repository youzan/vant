<template>
  <div>
    <demo-section>
      <van-notice-bar>{{ $t('tips') }}</van-notice-bar>
      <demo-block :title="$t('basicUsage')">
        <van-swipe-cell
          :right-width="65"
          :left-width="65"
        >
          <span slot="left">{{ $t('button1') }}</span>
          <van-cell-group>
            <van-cell
              :title="$t('title')"
              :value="$t('content')"
            />
          </van-cell-group>
          <span slot="right">{{ $t('button2') }}</span>
        </van-swipe-cell>
      </demo-block>

      <demo-block :title="$t('title2')">
        <van-swipe-cell
          :right-width="65"
          :left-width="65"
          :on-close="onClose"
        >
          <span slot="left">{{ $t('button1') }}</span>
          <van-cell-group>
            <van-cell
              :title="$t('title')"
              :value="$t('content')"
            />
          </van-cell-group>
          <span slot="right">{{ $t('button2') }}</span>
        </van-swipe-cell>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      button1: '选择',
      button2: '删除',
      title: '单元格',
      title2: '异步关闭',
      confirm: '确定删除吗？',
      tips: '建议在手机模式下浏览本示例'
    },
    'en-US': {
      button1: 'Select',
      button2: 'Delete',
      title: 'Cell',
      title2: 'Async close',
      confirm: 'Are you sure to delete?',
      tips: 'Please try this demo in mobile mode'
    }
  },

  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: this.$t('confirm')
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-swipe-cell {
  user-select: none;

  .van-swipe-cell {
    &__left,
    &__right {
      color: @white;
      font-size: 15px;
      width: 65px;
      height: 44px;
      display: inline-block;
      text-align: center;
      line-height: 44px;
      background-color: @red;
    }
  }
}
</style>
