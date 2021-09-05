<script setup lang="ts">
import VanButton from '..';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    type: '按钮类型',
    size: '按钮尺寸',
    icon: '图标按钮',
    loading: '加载状态',
    shape: '按钮形状',
    default: '默认按钮',
    primary: '主要按钮',
    success: '成功按钮',
    danger: '危险按钮',
    warning: '警告按钮',
    large: '大号按钮',
    normal: '普通按钮',
    small: '小型按钮',
    mini: '迷你按钮',
    plain: '朴素按钮',
    square: '方形按钮',
    round: '圆形按钮',
    hairline: '细边框',
    hairlineButton: '细边框按钮',
    loadingText: '加载中...',
    router: '页面导航',
    urlRoute: 'URL 跳转',
    vueRoute: '路由跳转',
    customColor: '自定义颜色',
    pure: '单色按钮',
    gradient: '渐变色按钮',
    blockElement: '块级元素',
  },
  'en-US': {
    type: 'Type',
    size: 'Size',
    icon: 'Icon',
    loading: 'Loading',
    shape: 'Shape',
    default: 'Default',
    primary: 'Primary',
    success: 'Success',
    danger: 'Danger',
    warning: 'Warning',
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
    mini: 'Mini',
    plain: 'Plain',
    square: 'Square',
    round: 'Round',
    hairline: 'Hairline',
    hairlineButton: 'Hairline',
    loadingText: 'Loading...',
    router: 'Router',
    urlRoute: 'URL',
    vueRoute: 'Vue Router',
    customColor: 'Custom Color',
    pure: 'Pure',
    gradient: 'Gradient',
    blockElement: 'Block Element',
  },
});
</script>

<template>
  <demo-block :title="t('type')">
    <div class="demo-button-row">
      <van-button type="primary">{{ t('primary') }}</van-button>
      <van-button type="success">{{ t('success') }}</van-button>
      <van-button type="default">{{ t('default') }}</van-button>
    </div>
    <van-button type="danger">{{ t('danger') }}</van-button>
    <van-button type="warning">{{ t('warning') }}</van-button>
  </demo-block>

  <demo-block :title="t('plain')">
    <van-button plain type="primary" :text="t('plain')" />
    <van-button plain type="success" :text="t('plain')" />
  </demo-block>

  <demo-block :title="t('hairline')">
    <van-button plain hairline type="primary" :text="t('hairlineButton')" />
    <van-button plain hairline type="success" :text="t('hairlineButton')" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-button disabled type="primary" :text="t('disabled')" />
    <van-button disabled type="success" :text="t('disabled')" />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <van-button loading type="primary" />
    <van-button loading type="primary" loading-type="spinner" />
    <van-button loading :loading-text="t('loadingText')" type="success" />
  </demo-block>

  <demo-block :title="t('shape')">
    <van-button type="primary" square :text="t('square')" />
    <van-button type="success" round :text="t('round')" />
  </demo-block>

  <demo-block :title="t('icon')">
    <van-button type="primary" icon="plus" />
    <van-button type="primary" icon="plus" :text="t('button')" />
    <van-button
      plain
      type="primary"
      icon="https://img.yzcdn.cn/vant/user-active.png"
      :text="t('button')"
    />
  </demo-block>

  <demo-block :title="t('size')">
    <van-button type="primary" size="large">{{ t('large') }}</van-button>
    <van-button type="primary" size="normal">{{ t('normal') }}</van-button>
    <van-button type="primary" size="small">{{ t('small') }}</van-button>
    <van-button type="primary" size="mini">{{ t('mini') }}</van-button>
  </demo-block>

  <demo-block :title="t('blockElement')">
    <van-button type="primary" block>{{ t('blockElement') }}</van-button>
  </demo-block>

  <demo-block :title="t('router')">
    <van-button :text="t('urlRoute')" type="primary" url="/vant/mobile.html" />
    <van-button :text="t('vueRoute')" type="primary" to="index" />
  </demo-block>

  <demo-block :title="t('customColor')">
    <van-button color="#7232dd" :text="t('pure')" />
    <van-button plain color="#7232dd" :text="t('pure')" />
    <van-button
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      :text="t('gradient')"
    />
  </demo-block>
</template>

<style lang="less">
.demo-button {
  background: var(--van-white);

  .van-button {
    &--large {
      margin-bottom: var(--van-padding-md);
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: var(--van-padding-md);
    }
  }

  .van-doc-demo-block {
    padding: 0 var(--van-padding-md);
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: var(--van-padding-sm);
  }
}
</style>
