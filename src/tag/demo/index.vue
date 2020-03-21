<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-tag>{{ t('tag') }}</van-tag>
      <van-tag type="primary">{{ t('tag') }}</van-tag>
      <van-tag type="success">{{ t('tag') }}</van-tag>
      <van-tag type="danger">{{ t('tag') }}</van-tag>
      <van-tag type="warning">{{ t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="t('round')">
      <van-tag round>{{ t('tag') }}</van-tag>
      <van-tag round type="primary">{{ t('tag') }}</van-tag>
      <van-tag round type="success">{{ t('tag') }}</van-tag>
      <van-tag round type="danger">{{ t('tag') }}</van-tag>
      <van-tag round type="warning">{{ t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="t('mark')">
      <van-tag mark>{{ t('tag') }}</van-tag>
      <van-tag mark type="primary">{{ t('tag') }}</van-tag>
      <van-tag mark type="success">{{ t('tag') }}</van-tag>
      <van-tag mark type="danger">{{ t('tag') }}</van-tag>
      <van-tag mark type="warning">{{ t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="t('plain')">
      <van-tag plain>{{ t('tag') }}</van-tag>
      <van-tag plain type="primary">{{ t('tag') }}</van-tag>
      <van-tag plain type="success">{{ t('tag') }}</van-tag>
      <van-tag plain type="danger">{{ t('tag') }}</van-tag>
      <van-tag plain type="warning">{{ t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="t('customColor')">
      <van-tag color="#f2826a">{{ t('tag') }}</van-tag>
      <van-tag color="#f2826a" plain>{{ t('tag') }}</van-tag>
      <van-tag color="#7232dd">{{ t('tag') }}</van-tag>
      <van-tag color="#7232dd" plain>{{ t('tag') }}</van-tag>
      <van-tag color="#ffe1e1" text-color="#ad0000">{{ t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="t('customSize')">
      <van-tag type="success">{{ t('tag') }}</van-tag>
      <van-tag type="success" size="medium">{{ t('tag') }}</van-tag>
      <van-tag type="success" size="large">{{ t('tag') }}</van-tag>
    </demo-block>

    <demo-block :title="t('closeable')">
      <van-tag
        v-if="show.primary"
        size="medium"
        closeable
        type="primary"
        @close="close('primary')"
      >
        {{ t('tag') }}
      </van-tag>
      <van-tag
        v-if="show.success"
        size="medium"
        closeable
        type="success"
        @close="close('success')"
      >
        {{ t('tag') }}
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
      closeable: '可关闭标签',
      customColor: '自定义颜色',
      customSize: '标签大小',
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      closeable: 'Closeable',
      customColor: 'Custom Color',
      customSize: 'Custom Size',
    },
  },

  data() {
    return {
      show: {
        primary: true,
        success: true,
      },
    };
  },

  methods: {
    close(tag) {
      this.show[tag] = false;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
  background-color: @white;

  .van-tag + .van-tag {
    margin-left: @padding-xs;
  }

  .van-tag {
    &:first-of-type {
      margin-left: @padding-md;
    }
  }
}
</style>
