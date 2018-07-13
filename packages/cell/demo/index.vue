<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-cell :title="$t('cell')" :value="$t('content')" />
        <van-cell :title="$t('cell')" :value="$t('content')" :label="$t('desc')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-cell-group>
        <van-cell :value="$t('content')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-cell-group>
        <van-cell :title="$t('cell')" icon="location" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-cell-group>
        <van-cell :title="$t('cell')" is-link />
        <van-cell :title="$t('cell')" is-link :value="$t('content')" />
        <van-cell :title="$t('cell')" is-link arrow-direction="down" :value="$t('content')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <van-cell-group>
        <van-cell :value="$t('content')" icon="shop" is-link>
          <template slot="title">
            <span class="van-cell-text">{{ $t('cell') }}</span>
            <van-tag type="danger">{{ $t('tag') }}</van-tag>
          </template>
        </van-cell>
        <van-cell :title="$t('cell')" icon="location" is-link />
        <van-cell :title="$t('cell')">
          <van-icon slot="right-icon" name="search" class="van-cell__right-icon" />
        </van-cell>
      </van-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      title2: '只设置 value',
      title3: '展示图标',
      title4: '展示箭头'
    },
    'en-US': {
      cell: 'Cell title',
      title2: 'Value only',
      title3: 'Left Icon',
      title4: 'Link'
    }
  }
};
</script>

<style lang="postcss">
.demo-cell {
  .van-cell-text {
    margin-right: 5px;
  }

  .van-cell-text,
  .van-tag--danger {
    vertical-align: middle;
  }
}
</style>
