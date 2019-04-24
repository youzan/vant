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

    <demo-block :title="$t('name')">
      <div class="demo-uploader-container">
        <van-uploader
          name="uploader"
          :after-read="toastName"
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
      name: '标识名称',
      title2: '设置 input 属性'
    },
    'en-US': {
      name: 'Name',
      title2: 'Set input attrs'
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
    },

    toastName(file, detail) {
      this.$toast(detail.name);
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
