<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-sidebar
        :active-key="activeKey1"
        @change="onChange('activeKey1', $event)"
      >
        <van-sidebar-item :title="$t('title')" />
        <van-sidebar-item :title="$t('title')" />
        <van-sidebar-item :title="$t('title')" />
      </van-sidebar>
    </demo-block>

    <demo-block :title="$t('showBadge')">
      <van-sidebar
        :active-key="activeKey2"
        @change="onChange('activeKey2', $event)"
      >
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
  },

  methods: {
    onChange(name, key) {
      this[name] = key;
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sidebar {
  .van-sidebar {
    width: auto;
    margin: 0 15px;
    padding: 20px 0;
    background-color: @white;

    &::after {
      display: none;
    }
  }

  .van-sidebar-item {
    width: 85px;
    margin: 0 auto;
  }
}
</style>
