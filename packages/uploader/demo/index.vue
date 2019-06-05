<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-uploader preview />
    </demo-block>

    <demo-block :title="$t('maxCount')">
      <van-uploader
        preview
        multiple
        :max-count="2"
      />
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
      upload: '上传图片',
      maxCount: '上传数量限制',
      uploadStyle: '自定义上传样式'
    },
    'en-US': {
      upload: 'Upload Image',
      maxCount: 'Max Count',
      uploadStyle: 'Upload Style'
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
