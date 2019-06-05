<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-uploader :after-read="afterRead" />
    </demo-block>

    <demo-block :title="$t('preview')">
      <van-uploader
        v-model="fileList"
        multiple
      />
    </demo-block>

    <demo-block :title="$t('maxCount')">
      <van-uploader
        v-model="fileList2"
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
      preview: '图片预览',
      maxCount: '限制上传数量',
      uploadStyle: '自定义上传样式'
    },
    'en-US': {
      upload: 'Upload Image',
      preview: 'Preview Image',
      maxCount: 'Max Count',
      uploadStyle: 'Upload Style'
    }
  },

  data() {
    return {
      fileList: [],
      fileList2: []
    };
  },

  methods: {
    afterRead(file) {
      console.log(file);
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
