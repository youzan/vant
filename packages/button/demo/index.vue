<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-button type="default">{{ $t('default') }}</van-button>
      <van-button type="primary">{{ $t('primary') }}</van-button>
      <van-button type="danger">{{ $t('danger') }}</van-button>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-button size="large">{{ $t('large') }}</van-button>
      <van-button size="normal">{{ $t('normal') }}</van-button>
      <van-button size="small">{{ $t('small') }}</van-button>
      <van-button size="mini">{{ $t('mini') }}</van-button>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-button disabled>{{ $t('disabled') }}</van-button>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-button loading />
      <van-button loading type="primary" />
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-button tag="a" href="https://www.youzan.com" target="_blank">
        {{ $t('button') }}
      </van-button>
    </demo-block>

    <demo-block :title="$t('title5')">
      <van-button type="primary" bottom-action>{{ $t('button') }}</van-button>

      <van-row>
        <van-col span="12">
          <van-button bottom-action>{{ $t('button') }}</van-button>
        </van-col>
        <van-col span="12">
          <van-button type="primary" bottom-action>{{ $t('button') }}</van-button>
        </van-col>
      </van-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '按钮类型',
      title2: '按钮尺寸',
      title3: '加载状态',
      title4: '自定义按钮标签',
      title5: '页面底部操作按钮',
      default: '默认按钮',
      primary: '主要按钮',
      danger: '危险按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮'
    },
    'en-US': {
      title1: 'Type',
      title2: 'Size',
      title3: 'Loading',
      title4: 'Custom Tag',
      title5: 'Action Button',
      default: 'Default',
      primary: 'Primary',
      danger: 'Danger',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini'
    }
  }
};
</script>

<style lang="postcss">
.demo-button {
  .van-button {
    user-select: none;

    &--large,
    &--bottom-action {
      margin-bottom: 15px;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: 10px;
    }

    .van-loading {
      margin: 0 18px;
    }
  }

  .van-doc-demo-block {
    padding: 0 15px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
