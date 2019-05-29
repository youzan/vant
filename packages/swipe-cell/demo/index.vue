<template>
  <div>
    <demo-section>
      <van-notice-bar>{{ $t('tips') }}</van-notice-bar>
      <demo-block :title="$t('basicUsage')">
        <van-swipe-cell>
          <van-button
            square
            slot="left"
            type="danger"
            :text="$t('button1')"
          />
          <van-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <van-button
            square
            slot="right"
            type="danger"
            :text="$t('button2')"
          />
        </van-swipe-cell>
      </demo-block>

      <demo-block :title="$t('title2')">
        <van-swipe-cell :on-close="onClose">
          <van-button
            square
            slot="left"
            type="danger"
            :text="$t('button1')"
          />
          <van-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <van-button
            square
            slot="right"
            type="danger"
            :text="$t('button2')"
          />
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
}
</style>
