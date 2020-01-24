<template>
  <div>
    <demo-section>
      <demo-block :title="$t('basicUsage')">
        <van-swipe-cell>
          <template #left>
            <van-button square type="primary" :text="$t('select')" />
          </template>
          <van-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <template #right>
            <van-button square type="danger" :text="$t('delete')" />
            <van-button square type="primary" :text="$t('collect')" />
          </template>
        </van-swipe-cell>
      </demo-block>

      <demo-block :title="$t('beforeClose')">
        <van-swipe-cell :before-close="beforeClose">
          <template #left>
            <van-button square type="primary" :text="$t('select')" />
          </template>
          <van-cell
            :border="false"
            :title="$t('title')"
            :value="$t('content')"
          />
          <template #right>
            <van-button square type="danger" :text="$t('delete')" />
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
      confirm: '确定删除吗？',
      beforeClose: '异步关闭',
    },
    'en-US': {
      select: 'Select',
      delete: 'Delete',
      collect: 'Collect',
      title: 'Cell',
      confirm: 'Are you sure to delete?',
      beforeClose: 'Before Close',
    },
  },

  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog
            .confirm({
              message: this.$t('confirm'),
            })
            .then(() => {
              instance.close();
            });
          break;
      }
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-swipe-cell {
  user-select: none;
}
</style>
