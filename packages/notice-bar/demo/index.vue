<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-notice-bar
        :text="$t('text')"
        left-icon="volume-o"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-notice-bar
        :scrollable="false"
        :text="$t('text')"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-notice-bar
        mode="closeable"
        :text="$t('text')"
      />
      <van-notice-bar
        mode="link"
        :text="$t('text')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '禁用滚动',
      title3: '通告栏模式',
      text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。'
    },
    'en-US': {
      title2: 'Disable scroll',
      title3: 'Mode',
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
