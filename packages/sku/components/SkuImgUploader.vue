<template>
  <div :class="b()">
    <!-- 头部 -->
    <van-uploader
      :disabled="!!paddingImg"
      :after-read="afterReadFile"
      :max-size="maxSize * 1024 * 1024"
      @oversize="$toast($t('maxSize', maxSize))"
    >
      <div :class="b('header')">
        <div v-if="paddingImg">{{ $t('uploading') }}</div>
        <template v-else>
          <icon name="photograph" />
          <span class="label">{{ $t(value ? 'rephoto' : 'photo') }}</span> {{ $t('or') }}
          <icon name="photo" />
          <span class="label">{{ $t(value ? 'reselect' : 'select') }}</span>
        </template>
      </div>
    </van-uploader>
    <!-- 图片列表区域 -->
    <div class="van-clearfix" v-if="paddingImg || imgList.length > 0">
      <!-- 已有的图片,图片右上角显示删除按钮 -->
      <div
        v-for="(img, index) in imgList"
        :class="b('img')"
      >
        <img :src="img">
        <icon name="clear" :class="b('delete')" @click="$emit('input', '')" />
      </div>
      <!-- 正在上传的图片,有上传等待提示 -->
      <div v-if="paddingImg" :class="b('img')">
        <img :src="paddingImg">
        <loading :class="b('uploading')" type="spinner" color="black" />
      </div>
    </div>
  </div>
</template>

<script>
import VanUploader from '../../uploader';
import create from '../../utils/create';

export default create({
  name: 'sku-img-uploader',

  components: {
    VanUploader
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
    }
  },

  methods: {
    afterReadFile(file) {
      // 上传文件
      this.paddingImg = file.content;
      this.uploadImg(file.file, file.content).then(img => {
        this.$emit('input', img);
        this.$nextTick(() => {
          this.paddingImg = '';
        });
      }).catch(() => {
        this.paddingImg = '';
      });
    }
  }
});
</script>
