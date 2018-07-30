<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <div class="demo-button-row">
        <van-button type="default">{{ $t('default') }}</van-button>
        <van-button type="primary">{{ $t('primary') }}</van-button>
      </div>
      <van-button type="warning">{{ $t('warning') }}</van-button>
      <van-button type="danger">{{ $t('danger') }}</van-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <div class="demo-button-row">
        <van-button type="default" plain>{{ $t('default') }}</van-button>
        <van-button type="primary" plain>{{ $t('primary') }}</van-button>
      </div>
      <van-button type="warning" plain>{{ $t('warning') }}</van-button>
      <van-button type="danger" plain>{{ $t('danger') }}</van-button>
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
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮'
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
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain'
    }
  }
};
</script>

<style lang="postcss">
.demo-button {
  .van-button {
    user-select: none;

    &--large {
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

  &-row {
    margin-bottom: 10px;
  }
}
</style>
