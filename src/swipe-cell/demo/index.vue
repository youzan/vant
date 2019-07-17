<template>
  <div>
    <demo-section>
      <van-notice-bar>{{ $t('tips') }}</van-notice-bar>
      <demo-block :title="$t('basicUsage')">
        <van-swipe-cell>
          <template #left>
            <van-button
              square
              type="primary"
              :text="$t('select')"
            />
          </template>
          <van-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <template #right>
            <van-button
              square
              type="danger"
              :text="$t('delete')"
            />
            <van-button
              square
              type="primary"
              :text="$t('collect')"
            />
          </template>
        </van-swipe-cell>
      </demo-block>

      <demo-block :title="$t('title2')">
        <van-swipe-cell :on-close="onClose">
          <template #left>
            <van-button
              square
              type="primary"
              :text="$t('select')"
            />
          </template>
          <van-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <template #right>
            <van-button
              square
              type="danger"
              :text="$t('delete')"
            />
          </template>
        </van-swipe-cell>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      select: '选择',
      delete: '删除',
      collect: '收藏',
      title: '单元格',
      title2: '异步关闭',
      confirm: '确定删除吗？',
      tips: '建议在手机模式下浏览本示例'
    },
    'en-US': {
      select: 'Select',
      delete: 'Delete',
      collect: 'Collect',
      title: 'Cell',
      title2: 'Async close',
      confirm: 'Are you sure to delete?',
      tips: 'Please try this demo in mobile mode'
    }
  },

  methods: {
    onClose(clickPosition, instance, detail) {
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
