<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
        <van-cell
          :title="$t('cell')"
          :value="$t('content')"
          :label="$t('desc')"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('largeSize')">
      <van-cell
        :title="$t('cell')"
        :value="$t('content')"
        size="large"
      />
      <van-cell
        :title="$t('cell')"
        :value="$t('content')"
        size="large"
        :label="$t('desc')"
      />
    </demo-block>

    <demo-block :title="$t('showIcon')">
      <van-cell
        :title="$t('cell')"
        :value="$t('content')"
        icon="location-o"
      />
    </demo-block>

    <demo-block :title="$t('valueOnly')">
      <van-cell :value="$t('content')" />
    </demo-block>

    <demo-block :title="$t('showArrow')">
      <van-cell
        :title="$t('cell')"
        is-link
      />
      <van-cell
        :title="$t('cell')"
        is-link
        :value="$t('content')"
      />
      <van-cell
        :title="$t('cell')"
        is-link
        arrow-direction="down"
        :value="$t('content')"
      />
    </demo-block>

    <demo-block :title="$t('router')">
      <van-cell
        :title="$t('cell')"
        is-link
        url="//youzan.github.io/vant/mobile.html"
      />
      <van-cell
        :title="$t('cell')"
        is-link
        to="index"
      />
    </demo-block>

    <demo-block :title="$t('groupTitle')">
      <van-cell-group :title="`${$t('group')} 1`">
        <van-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
      </van-cell-group>
      <van-cell-group :title="`${$t('group')} 2`">
        <van-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-cell
        :value="$t('content')"
        icon="shop-o"
        is-link
      >
        <template slot="title">
          <span class="custom-text">{{ $t('cell') }}</span>
          <van-tag type="danger">{{ $t('tag') }}</van-tag>
        </template>
      </van-cell>
      <van-cell
        :title="$t('cell')"
        icon="location-o"
        is-link
      />
      <van-cell :title="$t('cell')">
        <van-icon
          slot="right-icon"
          name="search"
          class="custom-icon"
        />
      </van-cell>
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
      router: '页面跳转'
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router'
    }
  }
};
</script>

<style lang="less">
.demo-cell {
  .custom-text {
    margin-right: 5px;
    vertical-align: middle;
  }

  .custom-icon {
    line-height: 24px;
  }
}
</style>
