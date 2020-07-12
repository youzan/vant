import { createNamespace } from '../utils';
import Icon from '../icon';
import Dialog from '../dialog';

const [createComponent, bem] = createNamespace('image-crop');

export default createComponent({
  props: {
    // url / base64
    value: {
      type: String,
    },
    // 图片宽高比例
    aspectRatio: {
      type: Number,
      default: 1,
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
    // 文件比例一致时跳过裁剪直接使用
    skipCrop: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      // readable/writable
      state: 1, // 截图状态
      rotateFlag: 0, // 旋转方向 0 1 2 3 分别代表4个不同的方向
      top: null, // 初始移动Y
      left: null, // 初始移动X
      url: null, // 图片地址
      fileType: null,
      point1: null, // 触控点1
      point2: null, // 触控点2
      // readonly
      targetImage: new Image(), // 容器图片
      maxSize: 3, // 最大缩放比
      initViewWidth: 74 / 100, // 初始截取区宽度比例
      borderWidth: 1, // 截取区border
      view: { width: 0, height: 0 }, // 屏幕
      fileSize: { width: 0, height: 0, top: 0, left: 0 }, // 图片
      fileInitSize: { width: 0, height: 0 }, // 图片初始大小
      fileRealitySize: { width: 0, height: 0 }, // 图片真实大小
      viewBox: { width: 0, height: 0, left: 0, top: 0 }, // 截取区
    };
  },

  watch: {
    state(newVal) {
      if (newVal === 2) {
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
    // 图片真实宽高比例
    fileRealityAspectRatio() {
      return this.fileRealitySize.width / this.fileRealitySize.height;
    },
    // 图片真实高宽比例
    fileRealityAspectRatioX() {
      return this.fileRealitySize.height / this.fileRealitySize.width;
    },
  },

  mounted() {
    // 外置截取区域
    document.body.appendChild(this.$refs.fileView);
    this.$nextTick(() => {
      this.initViewSize();
    });
  },

  beforeDestroy() {
    // 退出销毁外置截取区域
    document.removeEventListener('touchmove', this.preventDefault, false);
    document.body.removeChild(this.$refs.fileView);
  },

  methods: {
    imageChange(evt) {
      // 加载文件
      const file = evt.target.files[0];
      this.$emit('change', file);
      if (!file) return;
      const tempUrl = URL.createObjectURL(file);
      this.fileType = file.type;
      // 渲染图片
      this.targetImage.onload = async () => {
        // 获取图片真实宽高
        this.fileRealitySize.width = this.targetImage.width;
        this.fileRealitySize.height = this.targetImage.height;

        const showView = () => {
          this.loadImg();
          setTimeout(() => {
            this.state = 2;
            this.$nextTick(function () {
              this.file2SizePosition();
            });
          });
        };

        const sameRatio = this.fileRealityAspectRatio === this.aspectRatio;
        // 是否跳过裁剪
        if (this.disableCrop || (sameRatio && this.skipCrop)) {
          this.initCanvas();
        } else if (sameRatio) {
          Dialog.confirm({
            title: '提示',
            message: '文件已符合规定尺寸，是否直接使用？',
          })
            .then(() => {
              this.initCanvas();
            })
            .catch(() => {
              showView();
            });
        } else {
          showView();
        }
      };
      this.targetImage.src = tempUrl;
    },
    loadImg() {
      // 设置图片最大宽度
      let imgWidth =
        this.fileRealitySize.width > this.cropWidth
          ? this.cropWidth
          : this.fileRealitySize.width;
      let imgHeight = imgWidth * this.fileRealityAspectRatioX;
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
      if (imgWidth / imgHeight >= this.view.width / this.view.height) {
        const fz = {
          width: this.view.width,
          height: (imgHeight / imgWidth) * this.view.width,
        };
        if (fz.height < this.viewBox.height) {
          // 判断是否小于截取区
          fz.height = this.viewBox.height;
          fz.width = (imgWidth / imgHeight) * fz.height;
        }
        this.fileSize.width = fz.width;
        this.fileSize.height = fz.height;
        this.fileSize.left = 0;
        this.fileSize.top = (this.view.height - this.fileSize.height) / 2;
      } else {
        const fz = {
          width: (imgWidth / imgHeight) * this.view.height,
          height: this.view.height,
        };
        if (fz.width < this.viewBox.width) {
          fz.width = this.viewBox.width;
          fz.height = (imgHeight / imgWidth) * fz.width;
        }
        this.fileSize.height = fz.height;
        this.fileSize.width = fz.width;
        this.fileSize.top = 0;
        this.fileSize.left = (this.view.width - this.fileSize.width) / 2;
      }

      // 记录下初始宽高
      this.fileInitSize = {
        width: this.fileSize.width,
        height: this.fileSize.height,
      };

      this.fileSizePosition();
    },
    initViewSize() {
      this.view.width = document.documentElement.clientWidth;
      this.view.height = document.documentElement.clientHeight;
      // 屏幕
      this.$refs.fileView.style.width = this.view.width + 'px';
      this.$refs.fileView.style.height = this.view.height + 'px';
      // 主工作区
      this.$refs.imgView.style.width = this.view.width + 'px';
      this.$refs.imgView.style.height = this.view.height + 'px';
      // 视图区
      if (
        (this.view.width * this.initViewWidth) / this.aspectRatio <
        this.view.height * this.initViewWidth
      ) {
        // 判断宽高
        this.viewBox = {
          width: Math.floor(this.view.width * this.initViewWidth),
          height: Math.floor(
            (this.view.width * this.initViewWidth) / this.aspectRatio
          ),
        };
      } else {
        this.viewBox = {
          width: Math.floor(
            this.view.height * this.initViewWidth * this.aspectRatio
          ),
          height: Math.floor(this.view.height * this.initViewWidth),
        };
      }

      this.viewBox.left = Math.floor(
        (this.view.width - this.viewBox.width) / 2
      );
      this.viewBox.top = Math.floor(
        (this.view.height - this.viewBox.height) / 2
      );

      this.$refs.imgViewBox.style.width = this.viewBox.width + 'px';
      this.$refs.imgViewBox.style.height = this.viewBox.height + 'px';
      this.$refs.imgViewBox.style.top = this.viewBox.top + 'px';
      this.$refs.imgViewBox.style.left = this.viewBox.left + 'px';
    },
    fileSizePosition() {
      this.$refs.originImage.style.top = this.fileSize.top + 'px';
      this.$refs.originImage.style.left = this.fileSize.left + 'px';
      this.$refs.originImage.style.width = this.fileSize.width + 'px';
      this.$refs.originImage.style.height = this.fileSize.height + 'px';
      this.file2SizePosition();
    },
    file2SizePosition() {
      this.$refs.cropImage.style.top =
        this.$refs.originImage.offsetTop -
        (this.$refs.imgViewBox.offsetTop + this.borderWidth) +
        'px';
      this.$refs.cropImage.style.left =
        this.$refs.originImage.offsetLeft -
        (this.$refs.imgViewBox.offsetLeft + this.borderWidth) +
        'px';
      this.$refs.cropImage.style.width =
        this.$refs.originImage.offsetWidth + 'px';
      this.$refs.cropImage.style.height =
        this.$refs.originImage.offsetHeight + 'px';
    },
    checkPosition() {
      // 缩放移动校验
      let sizeFlag = false;
      if (this.fileSize.top >= this.viewBox.top + this.borderWidth) {
        // top 校验
        this.fileSize.top = this.viewBox.top + this.borderWidth;
      } else if (
        this.fileSize.top + this.fileSize.height <=
        this.viewBox.top + this.viewBox.height + this.borderWidth
      ) {
        this.fileSize.top =
          this.viewBox.top +
          this.viewBox.height -
          this.fileSize.height +
          this.borderWidth;
      }
      if (this.fileSize.left >= this.viewBox.left + this.borderWidth) {
        // left 校验
        this.fileSize.left = this.viewBox.left + this.borderWidth;
      } else if (
        this.fileSize.left + this.fileSize.width <=
        this.viewBox.left + this.viewBox.width + this.borderWidth
      ) {
        this.fileSize.left =
          this.viewBox.left +
          this.viewBox.width -
          this.fileSize.width +
          this.borderWidth;
      }
      // 缩放大小校验
      if (this.fileSize.width <= this.viewBox.width) {
        // width 校验
        this.fileSize.width = this.viewBox.width;
        this.fileSize.height =
          (this.fileInitSize.height / this.fileInitSize.width) *
          this.fileSize.width;
      }
      if (this.fileSize.height <= this.viewBox.height) {
        this.fileSize.height = this.viewBox.height;
        this.fileSize.width =
          (this.fileInitSize.width / this.fileInitSize.height) *
          this.fileSize.height;
      }
      if (this.fileSize.width > this.fileInitSize.width * this.maxSize) {
        this.fileSize.width = this.fileInitSize.width * this.maxSize;
        this.fileSize.height =
          (this.fileInitSize.height / this.fileInitSize.width) *
          this.fileSize.width;
        sizeFlag = true;
      }
      if (this.fileSize.height > this.fileInitSize.height * this.maxSize) {
        this.fileSize.height = this.fileInitSize.height * this.maxSize;
        this.fileSize.width =
          (this.fileInitSize.width / this.fileInitSize.height) *
          this.fileSize.height;
        sizeFlag = true;
      }
      if (sizeFlag) {
        this.fileSize.left = this.$refs.originImage.offsetLeft; // 阻止移动
        this.fileSize.top = this.$refs.originImage.offsetTop;
      }
    },
    move(evt) {
      if (this.top) {
        this.fileSize.top = Math.floor(
          this.$refs.originImage.offsetTop + evt.touches[0].clientY - this.top
        );
        this.fileSize.left = Math.floor(
          this.$refs.originImage.offsetLeft + evt.touches[0].clientX - this.left
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
          this.$refs.originImage.offsetLeft -
          (newSize.width - oldSize.width) / 2;
        this.fileSize.top =
          this.$refs.originImage.offsetTop -
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
        (this.viewBox.width / this.$refs.originImage.offsetWidth) *
          this.fileRealitySize.width <
        this.cropWidth
      ) {
        sizeScale = Number(
          (
            ((this.viewBox.width / this.$refs.originImage.offsetWidth) *
              this.fileRealitySize.width) /
            this.viewBox.width
          ).toFixed(15)
        );
      } else {
        sizeScale = this.cropWidth / this.viewBox.width;
      }
      return sizeScale;
    },
    // 裁剪
    getCropImage() {
      const sizeScale = this.imgSizeScale(); // 固定大小宽度比值

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.setAttribute('width', this.viewBox.width * sizeScale);
      canvas.setAttribute('height', this.viewBox.height * sizeScale);
      ctx.drawImage(
        this.$refs.originImage,
        (this.$refs.originImage.offsetLeft -
          this.viewBox.left -
          this.borderWidth) *
          sizeScale,
        (this.$refs.originImage.offsetTop -
          this.viewBox.top -
          this.borderWidth) *
          sizeScale,
        this.$refs.originImage.offsetWidth * sizeScale,
        this.$refs.originImage.offsetHeight * sizeScale
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
      // 不裁剪，直接使用
      const imgWidth =
        this.fileRealitySize.width > this.cropWidth
          ? this.cropWidth
          : this.fileRealitySize.width;
      const imgHeight = imgWidth * this.fileRealityAspectRatioX;
      const base64 = this.getCanvas(this.targetImage, imgWidth, imgHeight);
      this.currentValue = base64;
    },
    end() {
      this.top = null;
      this.left = null;
      this.point1 = null;
      this.point2 = null;
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
    onTouchMove(ev) {
      if (ev.touches.length === 1) {
        this.move(ev);
      } else if (event.touches.length === 2) {
        this.scale(ev);
      }
    },
    onTouchEnd(ev) {
      this.end(ev);

      ev.stopPropagation();
      return false;
    },
    getBtnRemove() {
      if (this.deletable) {
        return (
          <span class={bem('remove')} onClick={this.onRemove}>
            {this.$slots.delete || (
              <Icon name="clear" class={bem('remove-icon')} />
            )}
          </span>
        );
      }
    },
    onRemove(e) {
      this.$emit('delete', e);
      this.currentValue = null;
      this.reset();
      e.preventDefault();
      e.stopPropagation();
    },
    onCancel() {
      this.$emit('cancel');
      this.reset();
    },
    onRotate() {
      this.rotateFlag++;
      this.rotateFlag %= 4;
      this.$emit('rotate', this.rotateFlag);
      this.loadImg();
    },
    onSubmit() {
      this.$emit('submit');
      this.currentValue = this.getCropImage();
      this.reset();
    },
    reset() {
      this.state = 1;
      this.rotateFlag = 0;
      this.$refs.inputFile.value = ''; // 重置选取文件
      this.url = null;
      this.fileType = null;
    },
  },

  render() {
    return (
      <div class={bem()}>
        <img class={bem('show-img')} src={this.value || ''} />
        {this.getBtnRemove()}
        {this.$slots.default}
        <input
          v-show={this.state === 1}
          class={bem('input-file')}
          onChange={this.imageChange}
          ref="inputFile"
          accept="image/*"
          type="file"
        />
        <div
          v-show={this.state === 2}
          ref="fileView"
          class={bem('box')}
          ontouchmove={this.onTouchMove}
          ontouchend={this.onTouchEnd}
        >
          <img
            class={bem('background')}
            ref="originImage"
            src={this.url}
            alt=""
          />
          <div class={bem('viewbox')} ref="imgView">
            <div class={bem('view-wrapper')} ref="imgViewBox">
              <img
                class={bem('background')}
                ref="cropImage"
                src={this.url}
                alt=""
              />
            </div>
          </div>
          <div class={bem('handle')}>
            <div class={bem('back')} onClick={this.onCancel}>
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
