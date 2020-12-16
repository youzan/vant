<template>
  <demo-block :title="t('basicUsage')">
    <van-uploader :after-read="afterRead" />
  </demo-block>

  <demo-block :title="t('preview')">
    <van-uploader v-model="fileList" multiple accept="*" />
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('status')">
    <van-uploader v-model="statusFileList" :after-read="afterReadFailed" />
  </demo-block>

  <demo-block :title="t('maxCount')">
    <van-uploader v-model="fileList2" multiple :max-count="2" />
  </demo-block>

  <demo-block :title="t('maxSize')">
    <van-uploader
      v-model="fileList4"
      multiple
      :max-size="500 * 1024"
      @oversize="onOversize"
    />
  </demo-block>

  <demo-block :title="t('customUpload')">
    <van-uploader>
      <van-button type="primary" icon="plus">
        {{ t('upload') }}
      </van-button>
    </van-uploader>
  </demo-block>

  <demo-block :title="t('previewCover')">
    <van-uploader v-model="previewCoverFiles">
      <template #preview-cover="{ file }">
        <div class="preview-cover van-ellipsis">{{ file.name }}</div>
      </template>
    </van-uploader>
  </demo-block>

  <demo-block :title="t('beforeRead')">
    <van-uploader v-model="fileList3" :before-read="beforeRead" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-uploader :after-read="afterRead" disabled />
  </demo-block>

  <demo-block :title="t('customPreviewImage')">
    <van-uploader v-model="fileList5" multiple accept="*" :deletable="false" />
  </demo-block>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Toast from '../../toast';

const i18n = {
  'zh-CN': {
    status: '上传状态',
    failed: '上传失败',
    upload: '上传文件',
    preview: '文件预览',
    maxSize: '限制上传大小',
    disabled: '禁用文件上传',
    maxCount: '限制上传数量',
    uploading: '上传中...',
    imageName: '图片名称',
    beforeRead: '上传前置处理',
    overSizeTip: '文件大小不能超过 500kb',
    invalidType: '请上传 jpg 格式图片',
    customUpload: '自定义上传样式',
    previewCover: '自定义预览样式',
    customPreviewImage: '自定义单个图片预览',
    deleteMessage: '删除前置处理',
  },
  'en-US': {
    status: 'Upload Status',
    failed: 'Failed',
    upload: 'Upload File',
    preview: 'Preview File',
    maxSize: 'Max Size',
    disabled: 'Disable Uploader',
    maxCount: 'Max Count',
    uploading: 'Uploading...',
    imageName: 'Image Name',
    beforeRead: 'Before Read',
    overSizeTip: 'File size cannot exceed 500kb',
    invalidType: 'Please upload an image in jpg format',
    customUpload: 'Custom Upload Area',
    previewCover: 'Preview Cover',
    customPreviewImage: 'Custom single prevew image',
    deleteMessage: 'Before Delete',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
      ],
      fileList2: [{ url: 'https://img.yzcdn.cn/vant/sand.jpg' }],
      fileList3: [],
      fileList4: [{ url: 'https://img.yzcdn.cn/vant/sand.jpg' }],
      fileList5: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        {
          url: 'https://img.yzcdn.cn/vant/sand.jpg',
          deletable: true,
          beforeDelete: () => {
            Toast(t('deleteMessage'));
          },
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          deletable: true,
          imageFit: 'contain',
          previewSize: 120,
        },
      ],
      statusFileList: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: t('uploading'),
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: t('failed'),
        },
      ],
      previewCoverFiles: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          file: {
            name: t('imageName'),
          },
        },
      ],
    });

    const beforeRead = (file) => {
      if (file.type !== 'image/jpeg') {
        Toast(t('invalidType'));
        return false;
      }
      return true;
    };

    const afterRead = (file, detail) => {
      console.log(file, detail);
    };

    const afterReadFailed = (item) => {
      item.status = 'uploading';
      item.message = t('uploading');

      setTimeout(() => {
        item.status = 'failed';
        item.message = t('failed');
      }, 1000);
    };

    const onOversize = (file, detail) => {
      console.log(file, detail);
      Toast(t('overSizeTip'));
    };

    return {
      ...toRefs(state),
      t,
      afterRead,
      beforeRead,
      onOversize,
      afterReadFailed,
    };
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

  .preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
