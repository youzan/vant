<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-uploader />
    </demo-block>

    <demo-block :title="$t('uploadStyle')">
      <van-uploader>
        <van-button
          type="primary"
          icon="photo"
        >
          {{ this.$t('upload') }}
        </van-button>
      </van-uploader>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      name: '标识名称',
      upload: '上传图片',
      uploadStyle: '自定义上传样式'
    },
    'en-US': {
      name: 'Name',
      upload: 'Upload Image',
      uploadStyle: 'Upload Style'
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
  background-color: #fff;

  .van-uploader {
    margin-left: 15px;
  }
}
</style>
