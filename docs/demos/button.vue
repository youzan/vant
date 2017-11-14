<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-button type="default">Default</van-button>
      <van-button type="primary">Primary</van-button>
      <van-button type="danger">Danger</van-button>
    </demo-block>
    
    <demo-block :title="$t('title2')">
      <van-button size="large">Large</van-button>
      <van-button size="normal">Normal</van-button>
      <van-button size="small">Small</van-button>
      <van-button size="mini">Mini</van-button>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-button disabled>Diabled</van-button>
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-button loading></van-button>
      <van-button loading type="primary"></van-button>
    </demo-block>

    <demo-block :title="$t('title5')">
      <van-button tag="a" href="https://www.youzan.com" target="_blank">
        {{ $t('button') }}
      </van-button>
    </demo-block>

    <demo-block :title="$t('title6')">
      <van-button type="primary" bottomAction>{{ $t('button') }}</van-button>

      <van-row>
        <van-col span="12">
          <van-button bottomAction>{{ $t('button') }}</van-button>
        </van-col>
        <van-col span="12">
          <van-button type="primary" bottomAction>{{ $t('button') }}</van-button>
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
      title3: '禁用状态',
      title4: '加载状态',
      title5: '自定义按钮标签',
      title6: '页面底部操作按钮'
    },
    'en-US': {
      title1: 'Type',
      title2: 'Size',
      title3: 'Disabled',
      title4: 'Loading',
      title5: 'Custom Tag',
      title6: 'Action Button'
    }
  }
}
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
    &--normal {
      margin-right: 10px;
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