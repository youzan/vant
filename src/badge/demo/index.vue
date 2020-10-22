<template>
  <demo-block :title="t('basicUsage')">
    <van-badge content="5">
      <div class="child" />
    </van-badge>
    <van-badge dot>
      <div class="child" />
    </van-badge>
  </demo-block>

  <demo-block :title="t('max')">
    <van-badge content="20" max="9">
      <div class="child" />
    </van-badge>
    <van-badge content="200" max="99">
      <div class="child" />
    </van-badge>
  </demo-block>

  <demo-block :title="t('customColor')">
    <van-badge content="5" :color="BLUE">
      <div class="child" />
    </van-badge>
    <van-badge dot :color="BLUE">
      <div class="child" />
    </van-badge>
  </demo-block>

  <demo-block :title="t('standalone')">
    <van-badge content="200" max="99" style="margin-left: 16px;" />
  </demo-block>
</template>

<script>
import { BLUE } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      max: '最大值',
      standalone: '独立展示',
      customColor: '自定义颜色',
    },
    'en-US': {
      max: 'Max',
      standalone: 'Standalone',
      customColor: 'Custom Color',
    },
  },

  data() {
    return {
      BLUE,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-badge {
  background-color: @white;

  .van-badge__wrapper {
    margin-left: @padding-md;
  }

  .child {
    width: 36px;
    height: 36px;
    background: @gray-2;
    border-radius: 4px;
  }
}
</style>
