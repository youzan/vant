<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-badge-group
        :active-key="activeKey"
        @change="onChange"
      >
        <van-badge :title="$t('title')" />
        <van-badge
          :title="$t('title')"
          info="8"
        />
        <van-badge
          :title="$t('title')"
          info="99"
        />
        <van-badge
          :title="$t('title')"
          info="99+"
        />
      </van-badge-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名称'
    }
  },

  data() {
    return {
      activeKey: 0
    };
  },

  methods: {
    onChange(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-badge {
  .van-badge-group {
    width: auto;
    margin: 0 15px;
    padding: 20px 0;
    background-color: @white;

    &::after {
      display: none;
    }
  }

  .van-badge {
    width: 85px;
    margin: 0 auto;
  }
}
</style>
