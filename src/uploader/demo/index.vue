<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-uploader :after-read="afterRead" />
    </demo-block>

    <demo-block :title="t('preview')">
      <van-uploader v-model="fileList" multiple accept="*" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <van-uploader :after-read="afterRead" disabled />
    </demo-block>

    <demo-block v-if="!isWeapp" :title="t('status')">
      <van-uploader v-model="statusFileList" :after-read="afterReadFailed" />
    </demo-block>

    <demo-block :title="t('maxCount')">
      <van-uploader v-model="fileList2" multiple :max-count="2" />
    </demo-block>

    <demo-block :title="t('uploadStyle')">
      <van-uploader>
        <van-button type="primary" icon="photo">
          {{ this.t('upload') }}
        </van-button>
      </van-uploader>
    </demo-block>

    <demo-block :title="t('beforeRead')">
      <van-uploader v-model="fileList3" :before-read="beforeRead" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      status: '上传状态',
      failed: '上传失败',
      upload: '上传文件',
      preview: '文件预览',
      disabled: '禁用',
      maxCount: '限制上传数量',
      uploading: '上传中...',
      beforeRead: '上传前校验',
      uploadStyle: '自定义上传样式',
      invalidType: '请上传 jpg 格式图片',
    },
    'en-US': {
      status: 'Upload Status',
      failed: 'Failed',
      upload: 'Upload File',
      preview: 'Preview File',
      disabled: 'Disabled',
      maxCount: 'Max Count',
      uploading: 'Uploading...',
      beforeRead: 'Before Read',
      uploadStyle: 'Upload Style',
      invalidType: 'Please upload an image in jpg format',
    },
  },

  data() {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
      ],
      fileList2: [{ url: 'https://img.yzcdn.cn/vant/sand.jpg' }],
      fileList3: [],
      statusFileList: [],
    };
  },

  created() {
    this.statusFileList.push(
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        status: 'uploading',
        message: this.t('uploading'),
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        status: 'failed',
        message: this.t('failed'),
      }
    );
  },

  methods: {
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        this.$toast(this.t('invalidType'));
        return false;
      }

      return true;
    },

    afterRead(file, detail) {
      console.log(file, detail);
    },

    afterReadFailed(item) {
      item.status = 'uploading';
      item.message = this.t('uploading');

      setTimeout(() => {
        item.status = 'failed';
        item.message = this.t('failed');
      }, 1000);
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-uploader {
  background-color: @white;

  .van-uploader {
    margin-left: @padding-md;
  }
}
</style>
