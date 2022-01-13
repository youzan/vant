<template>
  <demo-section>
    <van-for-components>
      <template #default="scope">
        <van-row gutter="0">
          <van-col span="24">
            <van-button type="primary" :text="scope.item"></van-button>
          </van-col>
        </van-row>
      </template>
    </van-for-components>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '类型',
      mark: '标记样式',
      plain: '空心样式',
      round: '圆角样式',
      tagStyle: '样式风格',
      closeable: '可关闭标签',
      smallSize: '小号标签',
      largeSize: '大号标签',
      mediumSize: '中号标签',
      customSize: '标签大小',
      customColor: '自定义颜色',
      customBgColor: '背景颜色',
      customTextColor: '文字颜色',
      customPlainColor: '空心颜色',
    },
    'en-US': {
      mark: 'Mark style',
      plain: 'Plain style',
      round: 'Round style',
      tagStyle: 'Tag Style',
      closeable: 'Closeable',
      smallSize: 'Small Size',
      largeSize: 'Large Size',
      mediumSize: 'Medium Size',
      customColor: 'Custom Color',
      customSize: 'Custom Size',
      customBgColor: 'Background Color',
      customTextColor: 'Text Color',
      customPlainColor: 'Plain Color',
    },
  },

  data() {
    return {
      show: true,
    };
  },

  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
}
</style>
