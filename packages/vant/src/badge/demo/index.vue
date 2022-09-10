<script setup lang="ts">
import VanBadge from '..';
import VanIcon from '../../icon';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    max: '最大值',
    standalone: '独立展示',
    customColor: '自定义颜色',
    customContent: '自定义徽标内容',
    customPosition: '自定义徽标位置',
  },
  'en-US': {
    max: 'Max',
    standalone: 'Standalone',
    customColor: 'Custom Color',
    customContent: 'Custom Content',
    customPosition: 'Custom Position',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-badge content="5">
      <div class="child" />
    </van-badge>
    <van-badge content="10">
      <div class="child" />
    </van-badge>
    <van-badge content="Hot">
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
    <van-badge content="50" max="20">
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
    <van-badge content="10" color="#1989fa">
      <div class="child" />
    </van-badge>
    <van-badge dot color="#1989fa">
      <div class="child" />
    </van-badge>
  </demo-block>

  <demo-block :title="t('customContent')">
    <van-badge>
      <div class="child" />
      <template #content>
        <van-icon name="success" class="badge-icon" />
      </template>
    </van-badge>
    <van-badge>
      <div class="child" />
      <template #content>
        <van-icon name="cross" class="badge-icon" />
      </template>
    </van-badge>
    <van-badge>
      <div class="child" />
      <template #content>
        <van-icon name="down" class="badge-icon" />
      </template>
    </van-badge>
  </demo-block>

  <demo-block :title="t('customPosition')">
    <van-badge content="10" position="top-left">
      <div class="child" />
    </van-badge>
    <van-badge content="10" position="bottom-left">
      <div class="child" />
    </van-badge>
    <van-badge content="10" position="bottom-right">
      <div class="child" />
    </van-badge>
  </demo-block>

  <demo-block :title="t('standalone')">
    <van-badge content="20" style="margin-left: 16px" />
    <van-badge content="200" max="99" style="margin-left: 16px" />
  </demo-block>
</template>

<style lang="less">
.demo-badge {
  background-color: var(--van-background-2);

  .van-badge__wrapper {
    margin-left: var(--van-padding-md);
  }

  .child {
    width: 40px;
    height: 40px;
    background: var(--van-gray-2);
    border-radius: 4px;
  }

  .badge-icon {
    display: block;
    margin-left: 0;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>
