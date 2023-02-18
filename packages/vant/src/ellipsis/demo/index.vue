<script setup lang="ts">
import VanEllipsis from '..';
import { useTranslate } from '../../../docs/site';

const textCN =
  'Vant 是一个轻量、可定制的移动端组件库，于2017年开源。目前 Vant 官方提供了 Vue 2 版本、Vue 3 版本和微信小程序版本，并由社区团队维护 React 版本和支付宝小程序版本。';
const textUS =
  'Vant is a lightweight, customizable mobile component library that was open sourced in 2017. Currently Vant officially provides Vue 2 version, Vue 3 version and WeChat applet version, and the community team maintains React version and Alipay applet version.';

const t = useTranslate({
  'zh-CN': {
    text: textCN,
    expandText: '展开',
    collapseText: '收起',
    expandCollapse: '展开/收起',
    customRows: '自定义展示行数',
  },
  'en-US': {
    text: textUS,
    expandText: 'expand',
    collapseText: 'collapse',
    expandCollapse: 'Expand/Collapse',
    customRows: 'Customize Rows',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-ellipsis :content="t('text')" />
  </demo-block>

  <demo-block :title="t('expandCollapse')">
    <van-ellipsis
      :content="t('text')"
      :expand-text="t('expandText')"
      :collapse-text="t('collapseText')"
    />
  </demo-block>

  <demo-block :title="t('customRows')">
    <van-ellipsis
      rows="3"
      :content="t('text')"
      :expand-text="t('expandText')"
      :collapse-text="t('collapseText')"
    />
  </demo-block>
</template>

<style lang="less"></style>
