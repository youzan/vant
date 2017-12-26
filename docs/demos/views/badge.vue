<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-badge-group :active-key="activeKey">
        <van-badge :title="$t('title')" @click="onClick" />
        <van-badge :title="$t('title')" @click="onClick" info="8" />
        <van-badge :title="$t('title')" @click="onClick" info="99" />
        <van-badge :title="$t('title')" @click="onClick" info="199" />
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
    onClick(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="postcss">
.demo-badge {
  .van-badge-group {
    width: auto;
    margin: 0 15px;
    padding: 20px 0;
    background-color: #fff;

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
