<template>
  <div class="van-sku-img-uploader">
    <!-- 头部 -->
    <van-uploader
      :disabled="!canUpload"
      :beforeRead="beforeReadFile"
      :afterRead="afterReadFile"
      accept="image/*">
      <div class="van-sku-img-uploader__header">
        <div v-if="paddingImg">{{ $t('uploading') }}</div>
        <template v-else>
          <van-icon name="photograph"></van-icon>
          <span class="label">{{ getPhotoText(value) }}</span> {{ $t('or') }}
          <van-icon name="photo"></van-icon>
          <span class="label">{{ getPicText(value) }}</span>
        </template>
      </div>
    </van-uploader>
    <!-- 图片列表区域 -->
    <div class="van-sku-img-uploader__imglist" v-if="paddingImg || imgList.length > 0">
      <!-- 已有的图片,图片右上角显示删除按钮 -->
      <template v-for="img, index in imgList">
        <div class="van-sku-img-uploader__img-container" :key="index">
          <span class="van-sku-img-uploader__delete-picture" @click="deleteImg(index)">
            <van-icon name="clear"></van-icon>
          </span>
          <img :src="img"/>
        </div>
      </template>
      <!-- 正在上传的图片,有上传等待提示 -->
      <template v-if="paddingImg">
        <div class="van-sku-img-uploader__img-container">
          <img :src="paddingImg"/>
          <van-loading class="van-sku-img-uploader__uploading" type="spinner" color="black" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon';
import Uploader from '../../uploader';
import Loading from '../../loading';
import { create } from '../../utils';

export default create({
  name: 'van-sku-img-uploader',

  components: {
    'van-uploader': Uploader,
    'van-icon': Icon,
    'van-loading': Loading
  },

  props: {
    value: String,
    uploadImg: {
      type: Function,
      required: true
    },
    maxSize: {
      type: Number,
      default: 6
    }
  },

  data() {
    return {
      // 正在上传的图片base 64
      paddingImg: ''
    };
  },
  computed: {
    imgList() {
      return this.value && !this.paddingImg ? [this.value] : [];
    },
    canUpload() {
      // 判断当前是否允许上传图片
      if (this.paddingImg) return false;
      return true;
    }
  },

  methods: {
    getPhotoText(value) {
      return value ? this.$t('rephoto') : this.$t('photo');
    },

    getPicText(value) {
      return value ? this.$t('reselect') : this.$t('select');
    },
    beforeReadFile(file) {
      // 拦截非图片的文件，以及大小限制
      if (file.size > this.maxSize * 1024 * 1024) {
        Toast(this.$t('maxSize', this.maxSize));
        return false;
      }
      return true;
    },
    afterReadFile(file) {
      // 上传文件
      this.paddingImg = file.content;
      this.uploadImg(file.file).then(img => {
        this.updateImg(img);
        this.$nextTick(() => {
          this.paddingImg = '';
        });
      });
    },
    deleteImg(index) {
      this.$emit('input', '');
    },
    updateImg(img) {
      this.$emit('input', img);
    }
  }
});
</script>
