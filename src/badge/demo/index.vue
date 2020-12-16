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
    <van-badge content="5" color="#1989fa">
      <div class="child" />
    </van-badge>
    <van-badge dot color="#1989fa">
      <div class="child" />
    </van-badge>
  </demo-block>

  <demo-block :title="t('standalone')">
    <van-badge content="200" max="99" style="margin-left: 16px" />
  </demo-block>
</template>

<script lang="ts">
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    max: '最大值',
    standalone: '独立展示',
    customColor: '自定义颜色',
    customContent: '自定义徽标内容',
  },
  'en-US': {
    max: 'Max',
    standalone: 'Standalone',
    customColor: 'Custom Color',
    customContent: 'Custom Content',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    return { t };
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
    width: 40px;
    height: 40px;
    background: @gray-2;
    border-radius: 4px;
  }

  .badge-icon {
    display: block;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>
