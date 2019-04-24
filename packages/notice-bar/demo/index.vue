<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-notice-bar
        :text="$t('text')"
        left-icon="volume-o"
      />
    </demo-block>

    <demo-block :title="$t('mode')">
      <van-notice-bar
        mode="closeable"
        :text="$t('text')"
      />
      <van-notice-bar
        mode="link"
        :text="$t('text')"
      />
    </demo-block>

    <demo-block :title="$t('unscrollable')">
      <van-notice-bar
        :scrollable="false"
        :text="$t('text')"
      />
    </demo-block>

    <demo-block :title="$t('wrapable')">
      <van-notice-bar
        wrapable
        :scrollable="false"
        :text="$t('text')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      unscrollable: '禁用滚动',
      mode: '通告栏模式',
      wrapable: '文本换行',
      text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。'
    },
    'en-US': {
      mode: 'Mode',
      wrapable: 'Wrapable',
      unscrollable: 'Disable scroll',
      text: 'Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.'
    }
  }
};
</script>

<style lang="less">
.demo-notice-bar {
  .van-notice-bar:not(:first-of-type) {
    margin-top: 15px;
  }
}
</style>
