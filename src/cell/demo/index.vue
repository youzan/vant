<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-cell-group>
        <van-cell :title="t('cell')" :value="t('content')" />
        <van-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="t('insetGrouped')">
      <van-cell-group inset>
        <van-cell :title="t('cell')" :value="t('content')" />
        <van-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="t('largeSize')">
      <van-cell :title="t('cell')" :value="t('content')" size="large" />
      <van-cell
        :title="t('cell')"
        :value="t('content')"
        size="large"
        :label="t('desc')"
      />
    </demo-block>

    <demo-block :title="t('showIcon')">
      <van-cell :title="t('cell')" :value="t('content')" icon="location-o" />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('valueOnly')">
      <van-cell :value="t('content')" />
    </demo-block>

    <demo-block :title="t('showArrow')">
      <van-cell :title="t('cell')" is-link />
      <van-cell :title="t('cell')" is-link :value="t('content')" />
      <van-cell
        :title="t('cell')"
        is-link
        arrow-direction="down"
        :value="t('content')"
      />
    </demo-block>

    <demo-block :title="t('router')">
      <van-cell :title="t('urlRoute')" is-link url="/vant/mobile.html" />
      <van-cell :title="t('vueRoute')" is-link to="index" />
    </demo-block>

    <demo-block :title="t('groupTitle')">
      <van-cell-group :title="`${t('group')} 1`">
        <van-cell :title="t('cell')" :value="t('content')" />
      </van-cell-group>
      <van-cell-group :title="`${t('group')} 2`">
        <van-cell :title="t('cell')" :value="t('content')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="t('useSlots')">
      <van-cell :value="t('content')" is-link>
        <template #title>
          <span class="custom-title">{{ t('cell') }}</span>
          <van-tag type="danger">{{ t('tag') }}</van-tag>
        </template>
      </van-cell>

      <van-cell icon="shop-o" :title="t('cell')">
        <template #right-icon>
          <van-icon name="search" class="search-icon" />
        </template>
      </van-cell>
    </demo-block>

    <demo-block :title="t('verticalCenter')">
      <van-cell
        center
        :title="t('cell')"
        :value="t('content')"
        :label="t('desc')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      useSlots: '使用插槽',
      insetGrouped: '卡片风格',
      verticalCenter: '垂直居中',
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      useSlots: 'Use Slots',
      insetGrouped: 'Inset Grouped',
      verticalCenter: 'Vertical center',
    },
  },
};
</script>

<style lang="less">
.demo-cell {
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
