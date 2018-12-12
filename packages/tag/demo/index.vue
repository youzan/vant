<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-tag>{{ $t('tag') }}</van-tag>
      <van-tag type="danger">{{ $t('tag') }}</van-tag>
      <van-tag type="primary">{{ $t('tag') }}</van-tag>
      <van-tag type="success">{{ $t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="$t('plain')">
      <van-tag plain>{{ $t('tag') }}</van-tag>
      <van-tag
        round
        plain
        type="danger"
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag
        round
        plain
        type="primary"
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag
        plain
        type="success"
      >
        {{ $t('tag') }}
      </van-tag>
    </demo-block>

    <demo-block :title="$t('round')">
      <van-tag round>{{ $t('tag') }}</van-tag>
      <van-tag
        round
        type="danger"
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag
        round
        type="primary"
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag
        round
        type="success"
      >
        {{ $t('tag') }}
      </van-tag>
    </demo-block>

    <demo-block :title="$t('mark')">
      <van-tag mark>{{ $t('tag') }}</van-tag>
      <van-tag
        mark
        type="danger"
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag
        mark
        type="primary"
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag
        mark
        type="success"
      >
        {{ $t('tag') }}
      </van-tag>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-tag color="#f2826a">{{ $t('tag') }}</van-tag>
      <van-tag
        color="#f2826a"
        plain
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag color="#7232dd">{{ $t('tag') }}</van-tag>
      <van-tag
        color="#7232dd"
        plain
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag
        color="#ffe1e1"
        text-color="#ad0000"
      >
        {{ $t('tag') }}
      </van-tag>
    </demo-block>

    <demo-block :title="$t('customSize')">
      <van-tag type="danger">{{ $t('tag') }}</van-tag>
      <van-tag
        type="danger"
        size="medium"
      >
        {{ $t('tag') }}
      </van-tag>
      <van-tag
        type="danger"
        size="large"
      >
        {{ $t('tag') }}
      </van-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      customColor: '自定义颜色',
      customSize: '标签大小'
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      customColor: 'Custom Color',
      customSize: 'Custom Size'
    }
  }
};
</script>

<style lang="less">
.demo-tag {
  .van-tag + .van-tag {
    margin-left: 10px;
  }

  .van-tag {
    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
