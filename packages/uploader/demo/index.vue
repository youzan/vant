<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="demo-uploader-container">
        <van-uploader
          :max-size="102400"
          @oversize="logContent('oversize')"
          :before-read="beforeRead(1)"
        >
          <van-icon name="photograph" />
        </van-uploader>
      </div>
    </demo-block>

    <demo-block :title="$t('title2')">
      <div class="demo-uploader-container">
        <van-uploader
          accept="image/gif, image/jpeg"
          multiple
          :max-size="36000"
          @oversize="logContent"
        >
          <van-icon name="photograph" />
        </van-uploader>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '设置 input 属性'
    },
    'en-US': {
      title2: 'Set input attr'
    }
  },

  methods: {
    logContent(file) {
      console.log(file);
    },

    beforeRead(index) {
      return file => {
        console.log(index, file);
      };
    }
  }
};
</script>

<style lang="less">
.demo-uploader {
  &-container {
    padding: 10px 20px;
    font-size: 20px;
  }
}
</style>
