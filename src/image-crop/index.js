import { createNamespace } from '../utils';
import Icon from '../icon';
import Dialog from '../dialog';

const [createComponent, bem] = createNamespace('image-crop');
const MAX_ZOOM_RATIO = 3; // 最大缩放比
const DEFAULT_ASPECT_RATIO = 1; // 初始截取区高宽比
const BORDER_WIDTH = 1; // 截取区 border 宽度(px)
const CROP_AREA_WIDTH_RATIO = 0.75; // 截取区 border 宽度(px)

export default createComponent({
  props: {
    // url / base64
    value: {
      type: String,
    },
    // 图片高宽比
    aspectRatio: {
      type: Number,
      default: DEFAULT_ASPECT_RATIO,
    },
    // 图片最大宽度（px）
    cropWidth: {
      type: Number,
      default: 750,
    },
    // 清晰度
    quality: {
      type: Number,
      default: 0.92,
    },
    // 是否显示移除按钮
    deletable: {
      type: Boolean,
      default: false,
    },
    // 禁用裁剪
    disableCrop: {
      type: Boolean,
      default: false,
    },
    // 文件比例一致直接使用
    skipAlert: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      // readable/writable
      visible: false, // 截图状态
      rotateFlag: 0, // 旋转方向 0 1 2 3 分别代表4个不同的方向
      top: null, // 初始移动Y
      left: null, // 初始移动X
      url: null, // 图片地址
      fileType: null,
      point1: null, // 触控点1
      point2: null, // 触控点2

      // readonly
      targetImage: new Image(), // 容器图片
      screenView: { width: 0, height: 0 }, // 屏幕
      cropArea: { width: 0, height: 0, left: 0, top: 0 }, // 裁剪区
      fileSize: { width: 0, height: 0, top: 0, left: 0 }, // 裁剪图片
      fileInitSize: { width: 0, height: 0 }, // 图片初始大小
      fileRealitySize: { width: 0, height: 0 }, // 图片真实大小
    };
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

  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },

    // 图片自身高宽比
    fileHWR() {
      return this.fileRealitySize.height / this.fileRealitySize.width;
    },
  },

  created() {
    this.targetImage.onload = this.onImgLoad;
  },

  mounted() {
    // 外置截取区域
    document.body.appendChild(this.$refs.screenView);

    // 初始化裁剪视图
    this.initCropView();
  },

  beforeDestroy() {
    // 退出销毁外置截取区域
    this.removeEventDefault();
    document.body.removeChild(this.$refs.screenView);
  },

  methods: {
    /**
     * Listeners
     */
    onTouchMove(ev) {
      if (ev.touches.length === 1) {
        this.move(ev);
      } else if (ev.touches.length === 2) {
        this.scale(ev);
      }
    },

    onTouchEnd(ev) {
      this.top = null;
      this.left = null;
      this.point1 = null;
      this.point2 = null;

      ev.stopPropagation();
      return false;
    },

    // 删除
    onDelete(e) {
      this.$emit('delete');
      this.currentValue = null;
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
      this.currentValue = this.getCropImage();
      this.reset();
    },

    // 选择图片
    onImageChange(evt) {
      const file = evt.target.files[0];
      this.$emit('change', file);
      if (!file) return;

      const blobUrl = URL.createObjectURL(file);
      this.fileType = file.type;
      this.targetImage.src = blobUrl;
    },

    // 图片加载成功
    onImgLoad() {
      // 获取图片真实宽高
      this.fileRealitySize.width = this.targetImage.width;
      this.fileRealitySize.height = this.targetImage.height;

      const sameRatio = this.fileHWR === this.aspectRatio;

      // 是否跳过裁剪
      if (this.disableCrop || (sameRatio && this.skipCrop)) {
        this.initCanvas();
      } else if (sameRatio) {
        Dialog.confirm({
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
      this.screenView.width = docu.clientWidth;
      this.screenView.height = docu.clientHeight;
      // 屏幕
      const $screenView = this.$refs.screenView;
      if ($screenView) {
        $screenView.style.width = this.screenView.width + 'px';
        $screenView.style.height = this.screenView.height + 'px';
      }
      const $cropArea = this.$refs.cropArea;
      if ($cropArea) {
        $cropArea.style.width = this.screenView.width + 'px';
        $cropArea.style.height = this.screenView.height + 'px';
      }
      // 裁剪工作区
      this.cropArea = {
        width: Math.floor(this.screenView.width),
        height: Math.floor(this.screenView.width * this.aspectRatio),
        left: Math.floor((this.screenView.width - this.cropArea.width) / 2),
        top: Math.floor((this.screenView.height - this.cropArea.height) / 2),
      };
      // 视图区
      if (
        (this.screenView.width * CROP_AREA_WIDTH_RATIO) / this.aspectRatio <
        this.screenView.height * CROP_AREA_WIDTH_RATIO
      ) {
        // 判断宽高
        this.cropArea = {
          width: Math.floor(this.screenView.width * CROP_AREA_WIDTH_RATIO),
          height: Math.floor(
            (this.screenView.width * CROP_AREA_WIDTH_RATIO) / this.aspectRatio
          ),
        };
      } else {
        this.cropArea = {
          width: Math.floor(
            this.screenView.height * CROP_AREA_WIDTH_RATIO * this.aspectRatio
          ),
          height: Math.floor(this.screenView.height * CROP_AREA_WIDTH_RATIO),
        };
      }

      this.cropArea.left = Math.floor(
        (this.screenView.width - this.cropArea.width) / 2
      );
      this.cropArea.top = Math.floor(
        (this.screenView.height - this.cropArea.height) / 2
      );

      const $cropBox = this.$refs.cropBox;
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

    // 载入图片
    loadImg() {
      // 设置图片最大宽度
      const { width } = this.fileRealitySize || {};
      let imgWidth = width > this.cropWidth ? this.cropWidth : width;
      let imgHeight = imgWidth * this.fileHWR;
      // 判断旋转方向
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      switch (this.rotateFlag) {
        case 0:
          canvas.setAttribute('width', imgWidth);
          canvas.setAttribute('height', imgHeight);
          ctx.drawImage(this.targetImage, 0, 0, imgWidth, imgHeight);
          break;
        case 1:
          imgWidth += imgHeight;
          imgHeight = imgWidth - imgHeight;
          imgWidth -= imgHeight;
          canvas.setAttribute('width', imgWidth);
          canvas.setAttribute('height', imgHeight);
          ctx.translate(imgWidth, 0);
          ctx.rotate((90 * Math.PI) / 180);
          ctx.drawImage(this.targetImage, 0, 0, imgHeight, imgWidth);
          break;
        case 2:
          canvas.setAttribute('width', imgWidth);
          canvas.setAttribute('height', imgHeight);
          ctx.translate(imgWidth, imgHeight);
          ctx.rotate((180 * Math.PI) / 180);
          ctx.drawImage(this.targetImage, 0, 0, imgWidth, imgHeight);
          break;
        case 3:
          imgWidth += imgHeight;
          imgHeight = imgWidth - imgHeight;
          imgWidth -= imgHeight;
          canvas.setAttribute('width', imgWidth);
          canvas.setAttribute('height', imgHeight);
          ctx.translate(0, imgHeight);
          ctx.rotate((270 * Math.PI) / 180);
          ctx.drawImage(this.targetImage, 0, 0, imgHeight, imgWidth);
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
      this.fileInitSize = {
        width: this.fileSize.width,
        height: this.fileSize.height,
      };

      this.fileSizePosition();
    },

    fileSizePosition() {
      const $oi = this.$refs.backgroundImage;
      if ($oi) {
        $oi.style.top = this.fileSize.top + 'px';
        $oi.style.left = this.fileSize.left + 'px';
        $oi.style.width = this.fileSize.width + 'px';
        $oi.style.height = this.fileSize.height + 'px';
      }
      this.file2SizePosition();
    },

    file2SizePosition() {
      const oi = this.$refs.backgroundImage;
      const ci = this.$refs.cropImage;
      const cb = this.$refs.cropBox;
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
        this.fileSize.left = this.$refs.backgroundImage.offsetLeft; // 阻止移动
        this.fileSize.top = this.$refs.backgroundImage.offsetTop;
      }
    },

    move(evt) {
      if (this.top) {
        this.fileSize.top = Math.floor(
          this.$refs.backgroundImage.offsetTop +
            evt.touches[0].clientY -
            this.top
        );
        this.fileSize.left = Math.floor(
          this.$refs.backgroundImage.offsetLeft +
            evt.touches[0].clientX -
            this.left
        );
        this.checkPosition();
        this.fileSizePosition();
      }
      this.top = evt.touches[0].clientY;
      this.left = evt.touches[0].clientX;
    },

    scale(evt) {
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
        this.fileSize.left =
          this.$refs.backgroundImage.offsetLeft -
          (newSize.width - oldSize.width) / 2;
        this.fileSize.top =
          this.$refs.backgroundImage.offsetTop -
          (newSize.height - oldSize.height) / 2;
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

    distance(touches) {
      /* eslint-disable no-restricted-properties */
      const oldVal = Math.sqrt(
        Math.pow(touches[0].clientX - touches[1].clientX, 2) +
          Math.pow(touches[0].clientY - touches[1].clientY, 2)
      );
      const newVal = Math.sqrt(
        Math.pow(this.point1.clientX - this.point2.clientX, 2) +
          Math.pow(this.point1.clientY - this.point2.clientY, 2)
      );
      const scale = oldVal / newVal;
      return scale;
    },

    imgSizeScale() {
      let sizeScale;
      if (
        (this.cropArea.width / this.$refs.backgroundImage.offsetWidth) *
          this.fileRealitySize.width <
        this.cropWidth
      ) {
        sizeScale = Number(
          (
            ((this.cropArea.width / this.$refs.backgroundImage.offsetWidth) *
              this.fileRealitySize.width) /
            this.cropArea.width
          ).toFixed(15)
        );
      } else {
        sizeScale = this.cropWidth / this.cropArea.width;
      }
      return sizeScale;
    },

    // 裁剪
    getCropImage() {
      const sizeScale = this.imgSizeScale(); // 固定大小宽度比值

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.setAttribute('width', this.cropArea.width * sizeScale);
      canvas.setAttribute('height', this.cropArea.height * sizeScale);
      ctx.drawImage(
        this.$refs.backgroundImage,
        (this.$refs.backgroundImage.offsetLeft -
          this.cropArea.left -
          BORDER_WIDTH) *
          sizeScale,
        (this.$refs.backgroundImage.offsetTop -
          this.cropArea.top -
          BORDER_WIDTH) *
          sizeScale,
        this.$refs.backgroundImage.offsetWidth * sizeScale,
        this.$refs.backgroundImage.offsetHeight * sizeScale
      );
      const base64 = canvas.toDataURL('image/jpeg', this.quality);

      return base64;
    },

    getCanvas(img, width, height) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      ctx.drawImage(img, 0, 0, width, height);
      const base64 = canvas.toDataURL('image/jpeg', this.quality);
      return base64;
    },

    // 初始化裁剪区
    initCanvas() {
      const imgWidth =
        this.fileRealitySize.width > this.cropWidth
          ? this.cropWidth
          : this.fileRealitySize.width;
      const imgHeight = imgWidth * this.fileHWR;
      const base64 = this.getCanvas(this.targetImage, imgWidth, imgHeight);
      this.currentValue = base64;
    },

    preventDefault(e) {
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
      this.$refs.inputFile.value = ''; // 重置选取文件
      this.url = null;
      this.fileType = null;
    },
    /* ------- */

    /**
     * Template
     */
    getBtnDelete() {
      if (this.deletable) {
        return (
          <span class={bem('remove')} onClick={this.onDelete}>
            {this.$slots.delete || (
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
        {this.$slots.default}
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
          ontouchmove={this.onTouchMove}
          ontouchend={this.onTouchEnd}
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
              {this.$slots.cancel || '取消'}
            </div>
            <div class={bem('rotate')} onClick={this.onRotate}>
              {this.$slots.rotate || '旋转'}
            </div>
            <div class={bem('submit')} onclick={this.onSubmit}>
              {this.$slots.submit || '确认'}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
