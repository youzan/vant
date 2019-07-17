<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-sidebar v-model="activeKey1">
        <van-sidebar-item :title="$t('title')" />
        <van-sidebar-item :title="$t('title')" />
        <van-sidebar-item :title="$t('title')" />
      </van-sidebar>
    </demo-block>

    <demo-block :title="$t('showBadge')">
      <van-sidebar v-model="activeKey2">
        <van-sidebar-item
          :title="$t('title')"
          info="8"
        />
        <van-sidebar-item
          :title="$t('title')"
          info="99"
        />
        <van-sidebar-item
          :title="$t('title')"
          info="99+"
        />
      </van-sidebar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名称',
      showBadge: '显示徽标'
    },
    'en-US': {
      showBadge: 'Show Badge'
    }
  },

  data() {
    return {
      activeKey1: 0,
      activeKey2: 0
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sidebar {
  background-color: @white;

  .van-sidebar {
    margin-left: 15px;
  }
}
</style>
