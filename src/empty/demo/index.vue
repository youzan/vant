<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-empty :description="t('description')" />
    </demo-block>

    <demo-block :title="t('imageType')">
      <van-tabs v-model="active">
        <van-tab name="error" :title="t('error')">
          <van-empty image="error" :description="t('description')" />
        </van-tab>
        <van-tab name="network" :title="t('network')">
          <van-empty image="network" :description="t('description')" />
        </van-tab>
        <van-tab name="search" :title="t('search')">
          <van-empty image="search" :description="t('description')" />
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="t('customImage')">
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        :description="t('description')"
      />
    </demo-block>

    <demo-block :title="t('bottomContent')">
      <van-empty :description="t('description')">
        <van-button round type="danger" class="bottom-button">
          {{ t('button') }}
        </van-button>
      </van-empty>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      error: '通用错误',
      search: '搜索提示',
      network: '网络错误',
      imageType: '图片类型',
      description: '描述文字',
      customImage: '自定义图片',
      bottomContent: '底部内容',
    },
    'en-US': {
      error: 'Error',
      search: 'Search',
      network: 'Network',
      imageType: 'Image Type',
      description: 'Description',
      customImage: 'Custom Image',
      bottomContent: 'Bottom Content',
    },
  },

  data() {
    return {
      active: 'error',
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-empty {
  background: @white;

  .custom-image {
    .van-empty__image {
      width: 90px;
      height: 90px;
    }
  }

  .bottom-button {
    width: 160px;
    height: 40px;
  }
}
</style>
