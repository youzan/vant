import { defineComponent, type ExtractPropTypes } from 'vue';

// Utils
import { makeNumberProp, makeNumericProp, createNamespace } from '../utils';

// Components
import { Icon } from '../icon';
import { showConfirmDialog } from '../dialog';

// Types
import { ImageCropState } from './types';

const [name, bem] = createNamespace('image-crop');

const MAX_ZOOM_RATIO = 3; // 最大缩放比
const DEFAULT_ASPECT_RATIO = 1; // 初始截取区高宽比
const BORDER_WIDTH = 1; // 截取区 border 宽度(px)
const CROP_AREA_WIDTH_RATIO = 0.75; // 截取区 border 宽度(px)

export const imageCropProps = {
  // url / base64
  modelValue: String,
  // 图片高宽比
  aspectRatio: makeNumberProp(DEFAULT_ASPECT_RATIO),
  // 图片最大宽度（px）
  cropWidth: makeNumericProp(750),
  // 清晰度
  quality: makeNumericProp(0.92),
  // 是否显示移除按钮
  deletable: Boolean,
  // 禁用裁剪
  disableCrop: Boolean,
  // 文件比例一致直接使用
  skipAlert: Boolean,
};

export type ImageCropProps = ExtractPropTypes<typeof imageCropProps>;

export default defineComponent({
  name,

  props: imageCropProps,

  emits: [
    'update:modelValue',
    'delete',
    'cancel',
    'rotate',
    'submit',
    'change',
  ],

  data(): ImageCropState {
    return {
      // readable/writable
      visible: false, // 显示裁切屏幕
      url: '', // 图片地址
      rotateFlag: 0, // 旋转方向 0 1 2 3 分别代表4个不同的方向
      fileType: '',
      top: 0, // 初始移动Y
      left: 0, // 初始移动X
      point1: undefined, // 触控点1
      point2: undefined, // 触控点2
      // readonly
      targetImage: new Image(), // 容器图片
      screenView: { width: 0, height: 0 }, // 屏幕
      cropArea: { width: 0, height: 0, left: 0, top: 0 }, // 裁剪区
      fileSize: { width: 0, height: 0, left: 0, top: 0 }, // 裁剪图片
      fileInitSize: { width: 0, height: 0 }, // 图片初始大小
      fileRealitySize: { width: 0, height: 0 }, // 图片真实大小
    };
  },

  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(val: string) {
        this.$emit('update:modelValue', val);
      },
    },

    // 图片自身高宽比
    fileHWR() {
      return this.fileRealitySize.height / this.fileRealitySize.width;
    },
  },

  watch: {
    visible(v) {
      if (v) {
        this.addEventDefault();
      } else {
        this.removeEventDefault();
      }
    },
  },

  created() {
    this.targetImage.onload = this.onImgLoad;
  },

  mounted() {
    // 外置截取区域
    document.body.appendChild(this.$refs.screenView as HTMLElement);

    // 初始化裁剪视图
    this.initCropView();
  },

  beforeUnmount() {
    // 退出销毁外置截取区域
    this.removeEventDefault();
    document.body.removeChild(this.$refs.screenView as HTMLElement);
  },

  methods: {
    /**
     * Listeners
     */
    onTouchMove(ev: TouchEvent) {
      if (ev.touches.length === 1) {
        this.move(ev);
      } else if (ev.touches.length === 2) {
        this.scale(ev);
      }
    },

    onTouchEnd(ev: TouchEvent) {
      this.top = 0;
      this.left = 0;
      this.point1 = undefined;
      this.point2 = undefined;

      ev.stopPropagation();
      return false;
    },

    // 删除
    onDelete(e: Event) {
      this.$emit('delete');
      this.value = '';
      this.reset();
      e.preventDefault();
      e.stopPropagation();
    },

    // 取消
    onCancel() {
      this.$emit('cancel');
      this.reset();
    },

    // 旋转
    onRotate() {
      this.rotateFlag++;
      this.rotateFlag %= 4;
      this.$emit('rotate', this.rotateFlag);
      this.loadImg();
    },

    // 确定
    onSubmit() {
      this.$emit('submit');
      this.value = this.getCropImage();
      this.reset();
    },

    // 选择图片
    onImageChange(evt: Event) {
      const { files } = evt.target as HTMLInputElement;
      const file = files?.[0];
      this.$emit('change', file);
      if (!file) return;

      this.setImage(file);
    },

    // 图片加载成功
    onImgLoad() {
      // 获取图片真实宽高
      this.fileRealitySize.width = this.targetImage.width;
      this.fileRealitySize.height = this.targetImage.height;

      const sameRatio = this.fileHWR === this.aspectRatio;

      // 是否跳过裁剪
      if (this.disableCrop || (sameRatio && this.skipAlert)) {
        this.initCanvas();
      } else if (sameRatio) {
        showConfirmDialog({
          title: '提示',
          message: '文件已符合规定尺寸，是否直接使用？',
        })
          .then(this.initCanvas)
          .catch(this.showCropView);
      } else {
        this.showCropView();
      }
    },
    /* ------- */

    /**
     * Actions
     */
    // 初始化裁剪视图
    initCropView() {
      const docu = document.documentElement;
      const screenWidth = (this.screenView.width = docu.clientWidth);
      const screenHeight = (this.screenView.height = docu.clientHeight);
      // 屏幕
      const $sv = this.$refs.screenView as HTMLElement;
      if ($sv) {
        $sv.style.width = screenWidth + 'px';
        $sv.style.height = screenHeight + 'px';
      }
      const $ca = this.$refs.cropArea as HTMLElement;
      if ($ca) {
        $ca.style.width = screenWidth + 'px';
        $ca.style.height = screenHeight + 'px';
      }

      // 裁剪工作区
      this.cropArea.width = Math.floor(screenWidth);
      this.cropArea.height = Math.floor(screenWidth * this.aspectRatio);
      this.cropArea.left = Math.floor((screenWidth - this.cropArea.width) / 2);
      this.cropArea.top = Math.floor((screenHeight - this.cropArea.height) / 2);

      // 视图区
      if (screenWidth / this.aspectRatio < screenHeight) {
        this.cropArea.width = Math.floor(screenWidth * CROP_AREA_WIDTH_RATIO);
        this.cropArea.height = Math.floor(
          (screenWidth * CROP_AREA_WIDTH_RATIO) / this.aspectRatio,
        );
      } else {
        const h = screenHeight * CROP_AREA_WIDTH_RATIO;
        this.cropArea.width = Math.floor(h * this.aspectRatio);
        this.cropArea.height = Math.floor(h);
      }

      this.cropArea.left = Math.floor((screenWidth - this.cropArea.width) / 2);
      this.cropArea.top = Math.floor((screenHeight - this.cropArea.height) / 2);

      const $cropBox = this.$refs.cropBox as HTMLElement;
      if ($cropBox) {
        $cropBox.style.width = this.cropArea.width + 'px';
        $cropBox.style.height = this.cropArea.height + 'px';
        $cropBox.style.top = this.cropArea.top + 'px';
        $cropBox.style.left = this.cropArea.left + 'px';
      }
    },

    // 图片加载成功之后，展示裁剪
    showCropView() {
      this.loadImg();
      this.visible = true;
      this.$nextTick(function () {
        this.file2SizePosition();
      });
    },

    setImage(img: File) {
      const blobUrl = URL.createObjectURL(img);
      this.fileType = img.type;
      this.targetImage.src = blobUrl;
    },

    // 载入图片
    loadImg() {
      // 设置图片最大宽度
      const { width } = this.fileRealitySize || {};
      const cropWidth = Number(this.cropWidth);
      let imgWidth = width > cropWidth ? cropWidth : width;
      let imgHeight = imgWidth * this.fileHWR;
      // 判断旋转方向
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      switch (this.rotateFlag) {
        case 0:
          canvas.setAttribute('width', String(imgWidth));
          canvas.setAttribute('height', String(imgHeight));
          ctx?.drawImage(this.targetImage, 0, 0, imgWidth, imgHeight);
          break;
        case 1:
          imgWidth += imgHeight;
          imgHeight = imgWidth - imgHeight;
          imgWidth -= imgHeight;
          canvas.setAttribute('width', String(imgWidth));
          canvas.setAttribute('height', String(imgHeight));
          ctx?.translate(imgWidth, 0);
          ctx?.rotate((90 * Math.PI) / 180);
          ctx?.drawImage(this.targetImage, 0, 0, imgHeight, imgWidth);
          break;
        case 2:
          canvas.setAttribute('width', String(imgWidth));
          canvas.setAttribute('height', String(imgHeight));
          ctx?.translate(imgWidth, imgHeight);
          ctx?.rotate((180 * Math.PI) / 180);
          ctx?.drawImage(this.targetImage, 0, 0, imgWidth, imgHeight);
          break;
        case 3:
          imgWidth += imgHeight;
          imgHeight = imgWidth - imgHeight;
          imgWidth -= imgHeight;
          canvas.setAttribute('width', String(imgWidth));
          canvas.setAttribute('height', String(imgHeight));
          ctx?.translate(0, imgHeight);
          ctx?.rotate((270 * Math.PI) / 180);
          ctx?.drawImage(this.targetImage, 0, 0, imgHeight, imgWidth);
          break;
      }
      this.url = canvas.toDataURL(this.fileType, this.quality);

      // 初始化设置操作图的位置和大小
      if (
        imgWidth / imgHeight >=
        this.screenView.width / this.screenView.height
      ) {
        const fz = {
          width: this.screenView.width,
          height: (imgHeight / imgWidth) * this.screenView.width,
        };
        if (fz.height < this.cropArea.height) {
          // 判断是否小于截取区
          fz.height = this.cropArea.height;
          fz.width = (imgWidth / imgHeight) * fz.height;
        }
        this.fileSize.width = fz.width;
        this.fileSize.height = fz.height;
        this.fileSize.left = 0;
        this.fileSize.top = (this.screenView.height - this.fileSize.height) / 2;
      } else {
        const fz = {
          width: (imgWidth / imgHeight) * this.screenView.height,
          height: this.screenView.height,
        };
        if (fz.width < this.cropArea.width) {
          fz.width = this.cropArea.width;
          fz.height = (imgHeight / imgWidth) * fz.width;
        }
        this.fileSize.height = fz.height;
        this.fileSize.width = fz.width;
        this.fileSize.top = 0;
        this.fileSize.left = (this.screenView.width - this.fileSize.width) / 2;
      }

      // 记录下初始宽高
      (this.fileInitSize.width = this.fileSize.width),
        (this.fileInitSize.height = this.fileSize.height),
        this.fileSizePosition();
    },

    fileSizePosition() {
      const $oi = this.$refs.backgroundImage as HTMLElement;
      if ($oi) {
        $oi.style.top = this.fileSize.top + 'px';
        $oi.style.left = this.fileSize.left + 'px';
        $oi.style.width = this.fileSize.width + 'px';
        $oi.style.height = this.fileSize.height + 'px';
      }
      this.file2SizePosition();
    },

    file2SizePosition() {
      const oi = this.$refs.backgroundImage as HTMLElement;
      const ci = this.$refs.cropImage as HTMLElement;
      const cb = this.$refs.cropBox as HTMLElement;
      if (!(oi && ci && cb)) return;

      ci.style.top = oi.offsetTop - (cb.offsetTop + BORDER_WIDTH) + 'px';
      ci.style.left = oi.offsetLeft - (cb.offsetLeft + BORDER_WIDTH) + 'px';
      ci.style.width = oi.offsetWidth + 'px';
      ci.style.height = oi.offsetHeight + 'px';
    },

    checkPosition() {
      // 缩放移动校验
      let sizeFlag = false;
      if (this.fileSize.top >= this.cropArea.top + BORDER_WIDTH) {
        // top 校验
        this.fileSize.top = this.cropArea.top + BORDER_WIDTH;
      } else if (
        this.fileSize.top + this.fileSize.height <=
        this.cropArea.top + this.cropArea.height + BORDER_WIDTH
      ) {
        this.fileSize.top =
          this.cropArea.top +
          this.cropArea.height -
          this.fileSize.height +
          BORDER_WIDTH;
      }
      if (this.fileSize.left >= this.cropArea.left + BORDER_WIDTH) {
        // left 校验
        this.fileSize.left = this.cropArea.left + BORDER_WIDTH;
      } else if (
        this.fileSize.left + this.fileSize.width <=
        this.cropArea.left + this.cropArea.width + BORDER_WIDTH
      ) {
        this.fileSize.left =
          this.cropArea.left +
          this.cropArea.width -
          this.fileSize.width +
          BORDER_WIDTH;
      }
      // 缩放大小校验
      if (this.fileSize.width <= this.cropArea.width) {
        // width 校验
        this.fileSize.width = this.cropArea.width;
        this.fileSize.height =
          (this.fileInitSize.height / this.fileInitSize.width) *
          this.fileSize.width;
      }
      if (this.fileSize.height <= this.cropArea.height) {
        this.fileSize.height = this.cropArea.height;
        this.fileSize.width =
          (this.fileInitSize.width / this.fileInitSize.height) *
          this.fileSize.height;
      }
      if (this.fileSize.width > this.fileInitSize.width * MAX_ZOOM_RATIO) {
        this.fileSize.width = this.fileInitSize.width * MAX_ZOOM_RATIO;
        this.fileSize.height =
          (this.fileInitSize.height / this.fileInitSize.width) *
          this.fileSize.width;
        sizeFlag = true;
      }
      if (this.fileSize.height > this.fileInitSize.height * MAX_ZOOM_RATIO) {
        this.fileSize.height = this.fileInitSize.height * MAX_ZOOM_RATIO;
        this.fileSize.width =
          (this.fileInitSize.width / this.fileInitSize.height) *
          this.fileSize.height;
        sizeFlag = true;
      }
      if (sizeFlag) {
        const bi = this.$refs.backgroundImage as HTMLElement;
        this.fileSize.left = bi.offsetLeft; // 阻止移动
        this.fileSize.top = bi.offsetTop;
      }
    },

    move(evt: TouchEvent) {
      if (this.top) {
        const { offsetTop, offsetLeft } = this.$refs
          .backgroundImage as HTMLElement;
        this.fileSize.top = Math.floor(
          offsetTop + evt.touches[0].clientY - this.top,
        );
        this.fileSize.left = Math.floor(
          offsetLeft + evt.touches[0].clientX - this.left,
        );
        this.checkPosition();
        this.fileSizePosition();
      }
      this.top = evt.touches[0].clientY;
      this.left = evt.touches[0].clientX;
    },

    scale(evt: TouchEvent) {
      if (this.point1) {
        const scale = this.distance(evt.touches);
        const oldSize = {
          width: this.fileSize.width,
          height: this.fileSize.height,
        };
        const newSize = {
          width: oldSize.width * scale,
          height: oldSize.height * scale,
        };
        this.fileSize.width = newSize.width;
        this.fileSize.height = newSize.height;
        const { offsetTop, offsetLeft } = this.$refs
          .backgroundImage as HTMLElement;
        this.fileSize.left = offsetLeft - (newSize.width - oldSize.width) / 2;
        this.fileSize.top = offsetTop - (newSize.height - oldSize.height) / 2;
        this.checkPosition();
        this.fileSizePosition();
      }
      this.point1 =
        JSON.stringify(evt.touches[0]).length < 3
          ? evt.touches[0]
          : JSON.parse(JSON.stringify(evt.touches[0]));
      this.point2 =
        JSON.stringify(evt.touches[1]).length < 3
          ? evt.touches[1]
          : JSON.parse(JSON.stringify(evt.touches[1]));
    },

    distance(touches: TouchList): number {
      if (!this.point1 || !this.point2) return 1;

      /* eslint-disable no-restricted-properties */
      const oldVal = Math.sqrt(
        Math.pow(touches[0].clientX - touches[1].clientX, 2) +
          Math.pow(touches[0].clientY - touches[1].clientY, 2),
      );
      const newVal = Math.sqrt(
        Math.pow(this.point1.clientX - this.point2.clientX, 2) +
          Math.pow(this.point1.clientY - this.point2.clientY, 2),
      );
      const scale = oldVal / newVal;
      return scale;
    },

    imgSizeScale() {
      const { offsetWidth } = this.$refs.backgroundImage as HTMLElement;
      let sizeScale;
      if (
        (this.cropArea.width / offsetWidth) * this.fileRealitySize.width <
        Number(this.cropWidth)
      ) {
        sizeScale = Number(
          (
            ((this.cropArea.width / offsetWidth) * this.fileRealitySize.width) /
            this.cropArea.width
          ).toFixed(15),
        );
      } else {
        sizeScale = Number(this.cropWidth) / this.cropArea.width;
      }
      return sizeScale;
    },

    // 裁剪
    getCropImage() {
      const sizeScale = this.imgSizeScale(); // 固定大小宽度比值

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.setAttribute('width', String(this.cropArea.width * sizeScale));
      canvas.setAttribute('height', String(this.cropArea.height * sizeScale));
      const $bi = this.$refs.backgroundImage as HTMLImageElement;
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = $bi;
      ctx?.drawImage(
        $bi,
        (offsetLeft - this.cropArea.left - BORDER_WIDTH) * sizeScale,
        (offsetTop - this.cropArea.top - BORDER_WIDTH) * sizeScale,
        offsetWidth * sizeScale,
        offsetHeight * sizeScale,
      );
      const base64 = canvas.toDataURL('image/jpeg', this.quality);

      return base64;
    },

    getCanvas(img: HTMLImageElement, width: number, height: number): string {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.setAttribute('width', String(width));
      canvas.setAttribute('height', String(height));
      ctx?.drawImage(img, 0, 0, width, height);
      const base64 = canvas.toDataURL('image/jpeg', this.quality);
      return base64;
    },

    // 初始化裁剪区
    initCanvas() {
      const cropWidth = Number(this.cropWidth);
      const imgWidth =
        this.fileRealitySize.width > cropWidth
          ? cropWidth
          : this.fileRealitySize.width;
      const imgHeight = imgWidth * this.fileHWR;
      const base64 = this.getCanvas(this.targetImage, imgWidth, imgHeight);
      this.value = base64;
    },

    preventDefault(e: Event) {
      e.preventDefault();
    },

    addEventDefault() {
      window.addEventListener('touchmove', this.preventDefault, {
        passive: false,
      });
    },

    removeEventDefault() {
      window.removeEventListener('touchmove', this.preventDefault, false);
    },

    reset() {
      this.visible = false;
      this.rotateFlag = 0;
      (this.$refs.inputFile as HTMLInputElement).value = ''; // 重置选取文件
      this.url = '';
      this.fileType = '';
    },
    /* ------- */

    /**
     * Template
     */
    getBtnDelete() {
      if (this.deletable) {
        return (
          <span class={bem('remove')} onClick={this.onDelete}>
            {this.$slots.delete?.() || (
              <Icon name="clear" class={bem('remove-icon')} />
            )}
          </span>
        );
      }
    },
    /* ------- */
  },

  render() {
    return (
      <div class={bem()}>
        <img class={bem('show-img')} src={this.value || ''} />
        {this.getBtnDelete()}
        {this.$slots.default?.()}
        <input
          class={bem('input-file')}
          onChange={this.onImageChange}
          ref="inputFile"
          accept="image/*"
          type="file"
        />
        <div
          v-show={this.visible}
          ref="screenView"
          class={bem('screen')}
          onTouchmove={this.onTouchMove}
          onTouchend={this.onTouchEnd}
        >
          <img
            class={bem('background-image')}
            ref="backgroundImage"
            src={this.url}
            alt=""
          />
          <div class={bem('crop-area')} ref="cropArea">
            <div class={bem('crop-box')} ref="cropBox">
              <img
                class={bem('crop-image')}
                ref="cropImage"
                src={this.url}
                alt=""
              />
            </div>
          </div>
          <div class={bem('handle')}>
            <div class={bem('cancel')} onClick={this.onCancel}>
              {this.$slots.cancel?.() || '取消'}
            </div>
            <div class={bem('rotate')} onClick={this.onRotate}>
              {this.$slots.rotate?.() || '旋转'}
            </div>
            <div class={bem('submit')} onClick={this.onSubmit}>
              {this.$slots.submit?.() || '确认'}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
